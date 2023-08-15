FROM node:16-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginxinc/nginx-unprivileged:stable-alpine-slim

ENV ENABLE_PERMISSIONS=TRUE
ENV DEBUG_PERMISSIONS=TRUE
ENV USER_NGINX=10015
ENV GROUP_NGINX=10015

COPY --from=builder /app/dist /usr/share/nginx/html/frontend
COPY nginx.conf /etc/nginx/conf.d/default.conf
USER 10015
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]