# KubeSpyglass

Instructions for making and merging developer branches:

Making the branch:
- Ensure frontend branch is up to date with Dev (git pull origin dev)
- git checkout -b *your-name*/*featureName*

Merging the branch: 
- git checkout dev 
- git pull origin dev
- git checkout -b *your-name*/*featureName*
- git merge dev
- Resolve any conflicts
- Git push origin *your-name*/*featureName*

Then make a pull request

For Running Prometheus 
1. Run command minikube start
2. Run command kubectl apply -f prometheus
3. In another terminal run the command minikube tunnel
4. go to localhost:8080 to access prometheus dashboard with metrics