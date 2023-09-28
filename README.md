# (Kube)Spyglass
<img src = "./Media/Spyglass.png">

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
In an era of technological advancements, it is important to remember that hardware is just as important a part of the process as software. Maintaining the health of your system at optimal levels can help keep costs and interruptions at a minimum, while ensuring maximal performance and longevity. There exist several fantastic tools which can provide the information necessary for this monitoring, but where they excel in effectiveness, they are also weighed down by the sheer quantity of data they provide. With an incredibly large array of complex metrics to choose from and parse, it can be a daunting and exhausting task simply to set up the monitoring. 
<br>
<br>
In order to make this process simpler and more efficient to interface with, we have developed KubeSpyglass (heretofore referred to as Spyglass). Spyglass aims to provide a clean, simple user experience which will enable users to seamlessly install a suite of monitoring and visualization tools on their systems without needing to go through the hassle of configuring it themselves. But how does it do this?
<br>
<br>
Spyglass is built to operate on systems running Kubernetes container orchestration. Spyglass provides threefold utility in the form of a simple visualization of the Kubernetes cluster structure, a lightweight monitoring visualization of four core Kubernetes system metrics, and a one-button installation process for both Prometheus and Grafana.


# Features
## User features

The Spyglass tool is designed to streamline and enhance your experience with Kubernetes cluster management. We offer tools to:
* visualize the structure of your Kubernetes cluster
* monitor key performance metrics accross your cluster 
* alert you to critical conditions in key health metrics. 

Choose the tool most suited for your needs: 
<br>
<div align = "center">
  <img src = "./Media/2spyglasses.jpg">
</div>
<br>

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

## Developer features
Comprehensive Testing Suite: Spyglass's testing suite (using Jest, Supertest, and React Testing Library) enables future developers to assess code functionality throughout the frontend and backend of the application.

## Security
User interactions with you Kubernetes instance are secured with BCrypt, HTTPS, and Kubernetes ClusterRole security, so you can rest assured that your cluster information stays secure.

# User Experience 

## Visualize the Structure of your cluster

<img src = "./Media/structure.gif">

## Seamlessly install prometheus and grafana

<img src = "./Media/install.gif">

## Visualize your metrics with grafana visualizations

<img src = "./Media/graphs.gif">

# Anticipated Release

Spyglass 1.0 is forthcoming and will likely be released later this year. Stay tuned for further announcements. 

# Requirements
Requires Helm v.3.12.0 <br>
Please free up the following ports:
Technology  | Port Number
------------- | -------------
Grafana  | 3000
server | 4000
Spyglass  | 8080

# Publications
Read our Medium Article [Here]('')!