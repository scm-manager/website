FROM node:10.16.2 as builder
WORKDIR /src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.17.2

COPY deployment/docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /src/app/public /usr/share/nginx/html

RUN chown -R nginx:nginx /var/cache/nginx

USER nginx
