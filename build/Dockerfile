FROM node:26.2.0

# install latest git version, because we need sparse-checkout
WORKDIR /src/git
RUN npm install -g pnpm@latest-11
RUN npm install -g yarn@1.22.22

# puppeteer needs a chromium to render the social sharing cards of blog posts.
# We use the chromium of the distribution, because it comes with all required
# system libraries and does not have to be downloaded on every build.
RUN apt-get update \
 && apt-get install -y --no-install-recommends \
    chromium \
    fonts-liberation \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# Tell puppeteer to use the chromium installed above instead of downloading its
# own one during "yarn install".
ENV PUPPETEER_SKIP_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
