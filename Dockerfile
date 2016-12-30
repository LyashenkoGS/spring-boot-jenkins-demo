FROM frolvlad/alpine-oraclejdk8:slim
ADD ./target/spring-boot-jenkins-workshop-0.0.2.jar app.jar
ENV JAVA_OPTS=""
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS  -jar /app.jar" ]