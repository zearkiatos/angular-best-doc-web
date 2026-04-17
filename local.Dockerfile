FROM node:24-slim

WORKDIR /app

RUN npm install -g npm@11.11.0

COPY ["package.json","package-lock.json","./"]

RUN npm ci

RUN npm install -g @angular/cli

COPY [".","."]

EXPOSE 8000

ENTRYPOINT ["sh", "./docker/entrypoint.local.sh"]
