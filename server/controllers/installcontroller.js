const { spawn, spawnSync } = require('child_process');
const installController = {
  installPrometheus: (req, res, next) => {
    //Spawnsync will execute the listed command asynch. Will require the user to install helm previously.
    //We use spawnsync instead of execsync because execsync is for small data amounts and spawnsync for large data amounts
    //This command will then execute to add helm - charts to be available to use to update and create yaml files for standard grafana/prom use
    spawnSync(
      'helm repo add prometheus-community https://prometheus-community.github.io/helm-charts',
      //Stdio = standard input/output to declare it is not doing anything special. Shell is used to tell the function that it will execute in traditional shell style
      //This should
      { stdio: 'inherit', shell: true }
    );
    //Updates helm
    spawnSync('helm repo update', { stdio: 'inherit', shell: true });

    // https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack  I am not quite sure if we need this if we build our own dashboard.
    // But if we dont I think this helps with it
    spawnSync(
      'helm install prometheus prometheus-community/kube-prometheus-stack',
      { stdio: 'inherit', shell: true }
    );

    return next();
  },

  promStart: (req, res, next) => {
    //Look for all pods currently running and take the standard output
    const podList = spawnsync('kubectl', ['get', 'pods']);
    //Run through the output, taking each individual line into a different index of an array to look through
    const podArray = podList.stdout.split('\n');
    //Search through the array to find the prom-graf pod, so that it can be deleted and redeployed with correct settings
    let targetPod;
    podArray.forEach((line) => {
      if (line.includes('prometheus-grafana')) {
        targetPod = line.split(' ');
      }
    });
    //Delete previous config map
    spawnSync('kubectl delete configmap prometheus-grafana', {
      stdio: 'inherit',
      shell: true,
    });

    //Apply new config map
    spawnSync('kubectl apply -f prometheus-grafana.yaml', {
      stdio: 'inherit',
      shell: true,
    });
    //Delete the previous pod so it can be redeployed
    spawnSync(`kubectl delete pod ${targetPod}`, {
      stdio: 'inherit',
      shell: true,
    });

    return next();
  },

  portForward: (req, res, next) => {
    //Set up the Prom-graf to forward to port 3000 to allow us to grab its info

    spawn(`kubectl port-forward service/prometheus-grafana 3000:80`, {
      shell: true,
    });

    return next();
  },
};

module.exports = installController;
