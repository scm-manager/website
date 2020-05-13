FROM scmmanager/node-build:12.16.3 as builder

ARG GITHUB_API_TOKEN
ENV GITHUB_API_TOKEN=$GITHUB_API_TOKEN

# compile application
WORKDIR /src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.17.9

COPY deployment/docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /src/app/public /usr/share/nginx/html

RUN chown -R nginx:nginx /var/cache/nginx

EXPOSE 8000
USER nginx
