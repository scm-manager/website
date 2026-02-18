FROM nginx:1.29.5-alpine
ARG SERVER_NAME=scm-manager.org

# if more files are required, ensure .dockerignore does not exclude them
COPY deployment/docker/redirects.conf /etc/nginx/redirects.conf
COPY deployment/docker/nginx.conf /etc/nginx/nginx.conf.template
COPY public /usr/share/nginx/html

RUN chown -R nginx:nginx /var/cache/nginx \
 && sed "s/\${SERVER_NAME}/${SERVER_NAME}/g" < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

EXPOSE 8000
USER nginx
