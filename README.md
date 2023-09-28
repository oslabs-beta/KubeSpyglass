# KubeSpyglass

# Technology Stack 
<div align="center">
  <img src='https://img.shields.io/badge/node-red?style=for-the-badge&logo=nodedotjs&logoColor=white&color=green'/>
  <img src='https://img.shields.io/badge/javascript-yellow?style=for-the-badge&logo=javascript&logoColor=white&color=yellow'/>
  <img src='https://img.shields.io/badge/react-js?style=for-the-badge&logo=react&logoColor=white&color=black'/>
  <img src='https://img.shields.io/badge/react%20router-red?style=for-the-badge&logo=reactrouter&logoColor=white&color=rgb(255%2C%2025%2C%2025)'/>
  <img src='https://img.shields.io/badge/Kubernetes-green?style=for-the-badge&logo=kubernetes&logoColor=white&color=blue'>
  <img src='https://img.shields.io/badge/Docker-blue?style=for-the-badge&logo=docker&logoColor=white&color=rgb(57%2C%20199%2C%20204)'/>
  <img src='https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express&logoColor=white&color=black)
  <img src='https://img.shields.io/badge/React%20Router-red?style=for-the-badge&logo=reactrouter&logoColor=white&color=red'/>
  <img src='https://img.shields.io/badge/Jest-purple?style=for-the-badge&logo=jest'/>
  <br>
  <img src='https://img.shields.io/badge/Prometheus-orange?style=for-the-badge&logo=prometheus&logoColor=white'/>
  <img src="https://img.shields.io/badge/PromQL-black?style=for-the-badge&logo=prometheus&logoColor=white">
  <img src='https://img.shields.io/badge/Grafana-black?style=for-the-badge&logo=grafana&logoColor=orange'/>
  <img src='https://img.shields.io/badge/Helm-blue?style=for-the-badge&logo=helm&logoColor=white'/>
  <img src="https://img.shields.io/badge/MongoDB-green?style=for-the-badge&logo=mongodb&logoColor=white">
  <img src="https://img.shields.io/badge/brcypt-blue?style=for-the-badge&color=purple">
</div>

# Introduction


# Features
## User-facing features
The kubeready tool is designed to streamline and enhance your experience with Kubernetes cluster management, monitoring, and analysis. kubeready was built with comprehensive pre-built metrics, automated dependency installation, seamless Grafana and Prometheus integration, custom dashboard generation, password encryption, and a comprehensive developer-side testing suite. 
* Connect your Kubernetes clusters to pre-built metrics, allowing you to visualize detailed CPU, Memory, Network, and Disk metrics.
* Automated dependency installation, running commands upon account creation to connect Helm charts and custom Grafana configurations.
* Automated Grafana dashboard creation, rendering a new dashboard specific to the user's machine.
* Automated connection to Prometheus, scraping metrics more quickly without additional user setup. 
* Security is a top priority in any Kubernetes environment. kubeready provides password encryption through bcrypt. 
## Developer-facing features
* Test-driven development: kubeready's comprehensive testing suite (using Jest and React Testing Library) enables future developers to assess code functionality throughout the frontend and backend of the application.

# Requirements
Please free up the following ports:
Technology  | Port Number
------------- | -------------
Grafana  | 3000
server | 3001
kubeready  | 8080