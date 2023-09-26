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

remote_write:
      - url: https://prometheus-prod-13-prod-us-east-0.grafana.net/api/prom/push
      basic_auth:
        username: 1187002
        password: glc_eyJvIjoiOTQzODU5IiwibiI6InN0YWNrLTczOTU0My1obS13cml0ZS1wcm9tZXRoZXVzLXBhc3N3b3JkIiwiayI6ImVIMTRYNUU2YzhOWTFnNW02azlIdDlOdSIsIm0iOnsiciI6InByb2QtdXMtZWFzdC0wIn19