FROM java:8-alpine
MAINTAINER Your Name <you@example.com>

ADD target/uberjar/jan.jar /jan/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/jan/app.jar"]
