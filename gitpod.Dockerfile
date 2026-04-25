FROM node:24-alpine
RUN apk add --no-cache \
    git \
    curl \
    bash \
    openssh-client \
    ca-certificates

RUN npm install -g @angular/cli @ionic/cli

RUN addgroup -g 1000 gitpod && \
    adduser -D -u 1000 -G gitpod gitpod

USER gitpod

WORKDIR /workspace

CMD ["/bin/bash"]
