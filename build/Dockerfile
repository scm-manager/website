FROM node:14.16.1

ENV GIT_VERSION="2.26.2"

# install latest git version, because we need sparse-checkout
WORKDIR /src/git
RUN BUILD_DEPS='wget make libssl-dev libghc-zlib-dev libcurl4-gnutls-dev libexpat1-dev' \
 && set -x \
 && apt-get update \
 # remove old installation to avoid conflicts
 && apt-get remove -y git \
 && apt-get install -y --no-install-recommends \
    ${BUILD_DEPS} \
    gettext \
    unzip \
    # the following dependencies are required for puppeteer
    libgtk2.0-0 \
    libgtk-3-0 \
    libnotify-dev \
    libgconf-2-4 \
    libgbm-dev \
    libnss3 \
    libxss1 \
    libasound2 \
    libxtst6 \
    xauth \
    xvfb \
 && wget -q -O git.tar.gz https://github.com/git/git/archive/v${GIT_VERSION}.tar.gz \
 && tar xfz git.tar.gz \
 && cd git-* \
 && make configure \
 && ./configure --prefix=/usr \
 && make all \
 && make install \
 # cleanup
 && apt-get purge -y --auto-remove ${BUILD_DEPS} \
 && apt-get clean autoclean \
 && apt-get autoremove --yes \
 && rm -rf /src/git /var/lib/{apt,dpkg,cache,log}/ 
