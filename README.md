# (Kube)Spyglass

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
## User features

The Spyglass tool is designed to streamline and enhance your experience with Kubernetes cluster management. We offer tools to visualize the structure of your Kubernetes cluster, monitor key performance metrics accross your cluster, and alerting for key health metrics. 
<br>
Choose the tool most suited for your needs: 
<div align = "center">
  <img src = "https://static.wikia.nocookie.net/pirates/images/c/cd/AWEJackBarbossaTelescopePromo.jpg/revision/latest?cb=20130424213705">
</div>

Spyglass comes with two options for Kubernetes metric monitoring. 
* A fast ultra-lightweight monitoring option using core API metrics. 
* A powerful comprehensive monitoring option using Prometheus and Grafana. 

It also comes with a helpful GUI to view and interact with your Kubernetes Cluster Structure and display:
* Nodes
* Services
* Namespaces
* Pods
* Containers 
* Ports
* Essential connections
<br>
## Security

User interactions with you Kubernetes instance are secured with BCrypt, HTTPS, and Kubernetes ClusterRole security, so you can rest assured that your cluster information stays secure.

## Developer features
* Comprehensive Testing Suite: Spyglass's testing suite (using Jest, Supertest, and React Testing Library) enables future developers to assess code functionality throughout the frontend and backend of the application.

# User Experience 



# Requirements
Requires Helm v. 
Please free up the following ports:
Technology  | Port Number
------------- | -------------
Grafana  | 3000
server | 4000
Spyglass  | 8080