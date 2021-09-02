FROM nginx:alpine
COPY . /usr/share/nginx/html
LABEL org.opencontainers.image.source https://github.com/inez3/docker_191402018
