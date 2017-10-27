# Spring-boot-jenkins-demo

A Hello-world spring-boot based application for a Jenkins CI workshop.

## Prerequisites

* Docker version 1.13.0 or higher
* JDK 1.8

## Deployment

#### Locally

* execute: 

        docker build -t lyashenkogs/spring-boot-jenkins-workshop:0.0.3 .
        docker run  -p 8081:8080 lyashenkogs/spring-boot-jenkins-workshop:0.0.3
        
Application will be available on localhost:8081
        
#### Setup Jenkins

1. Create a new freestyle job

* add github URL 
* select checkbox Build when a change is pushed to GitHub

* add a build step -> execute shell -> 
        
        docker build -t lyashenkogs/spring-boot-jenkins-demo:0.0.3 .
* add a build step -> execute shell -> 
        
       docker stop $(docker ps -aq)
* add a build step -> execute shell -> 
               
        docker run -d -p 8081:8080 lyashenkogs/spring-boot-jenkins-demo:0.0.3
              
2. Setup a webhook from github
github page -> settings -> Integration & services -> add service -> Jenkins(GitHub plugin) 
http://<your-domain-name>/web-hook/

3. click test a service and check if it triggered the jenkins job
Application should be available on 
http://<your-domain-name>:8080

## Performance testing

Simple [Gatling](http://gatling.io/#/) script emulating 30_000 users load to localhost:8080
[script](./performance-testing/RecordedSimulation.scala)

