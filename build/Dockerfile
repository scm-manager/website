FROM node:12.16.3

ENV GIT_VERSION="2.26.2"

# install latest git version, because we need sparse-checkout
WORKDIR /src/git
RUN BUILD_DEPS='wget make libssl-dev libghc-zlib-dev libcurl4-gnutls-dev libexpat1-dev' \
 && set -x \
 && apt-get update \
 # remove old installation to avoid conflicts
 && apt-get remove -y git \
 && apt-get install -y ${BUILD_DEPS} gettext unzip --no-install-recommends \
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
