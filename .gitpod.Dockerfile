FROM node:24.14.1-alpine
RUN apk add --no-cache \
    git \
    curl \
    bash \
    openssh-client \
    ca-certificates

RUN npm install -g pnpm
RUN pnpm install -g @angular/cli

RUN addgroup -g 1000 gitpod && \
    adduser -D -u 1000 -G gitpod gitpod

USER gitpod

WORKDIR /workspace

CMD ["/bin/bash"]
