FROM node:24-alpine AS builder

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
ENV PNPM_HOME=/pnpm
ENV PATH="/pnpm:$PATH"
RUN mkdir -p /pnpm
RUN corepack enable && corepack prepare pnpm@9.15.1 --activate
RUN pnpm install -g @angular/cli
RUN pnpm install --frozen-lockfile

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN pnpm run build

FROM nginx:1.30-alpine
RUN addgroup -S appgroup -g 10001 && adduser -S -D -H -u 10001 -G appgroup appuser && \
    mkdir -p /var/cache/nginx /var/run /tmp && \
    rm -f /etc/nginx/templates/default.conf.template && \
    sed -i 's|pid\s\+/run/nginx.pid;|pid /tmp/nginx.pid;|' /etc/nginx/nginx.conf && \
    chown -R appuser:appgroup /var/cache/nginx /var/run /tmp
COPY --chown=appuser:appgroup ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=appuser:appgroup --from=builder /app/dist/angular-best-doc-web/browser /usr/share/nginx/html
EXPOSE 80
USER appuser
CMD ["nginx", "-g", "daemon off;"]
