FROM frolvlad/alpine-oraclejdk8:slim
ADD .mvn .mvn
ADD src src
ADD mvnw mvnw
ADD pom.xml pom.xml
RUN sh -c './mvnw clean install'
ENV JAVA_OPTS=""
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -jar ./target/spring-boot-jenkins-workshop-0.0.3.jar " ]