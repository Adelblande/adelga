FROM node:20-slim

RUN apt-get update -y && \
    apt-get install procps -y && \
    apt-get install -y openssl

WORKDIR /home/node/app

EXPOSE 3333

USER node

CMD [ "tail", "-f", "/dev/null"]
