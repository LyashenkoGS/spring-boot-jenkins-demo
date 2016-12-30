# spring-boot-jenkins-demo
A Hello-world spring-boot based application for a jenkins workshop.

## Prerequisites
* Java 1.8
* Maven
##Deployment

####Locally
* execute: 

        mvn clean install
        docker build .
        docker run -it <builded_container_id> -p 8080:8080
Application will be available on localhost:8080
        
####Setup Jenkins

1. Create a new freestyle job

* add github URL 
* select checkbox Build when a change is pushed to GitHub
* add a build step -> execute shell -> 
        
        mvn clean install

* add a build step -> execute shell -> 
        
        docker build -t lyashenkogs/spring-boot-jenkins-demo:0.0.2 .
* add a build step -> execute shell -> 
        
       docker stop $(docker ps -aq)
* add a build step -> execute shell -> 
               
        docker run -d -p 8081:8080 lyashenkogs/spring-boot-jenkins-demo:0.0.2
              
2. Setup a webhook from github
github page -> settings -> Integration & services -> add service -> Jenkins(GitHub plugin) 
http://<your-domain-name>/web-hook/
3. click test a service and check if it triggered the jenkins job
Application should be available on 
http://<your-domain-name>:8080

