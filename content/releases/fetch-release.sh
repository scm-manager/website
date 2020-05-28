#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

RELEASE=$1
BASE_URL=https://packages.scm-manager.org/repository/releases/sonia/scm/scm-server/${RELEASE}/scm-server-${RELEASE}-app

UNIX_TEMP=$(mktemp)
trap "rm -f ${UNIX_TEMP}" EXIT
curl -o "${UNIX_TEMP}" "${BASE_URL}.tar.gz"
VERIFY_UNIX_CHECKSUM=$(curl "${BASE_URL}.tar.gz.sha1")
echo "${VERIFY_UNIX_CHECKSUM}  ${UNIX_TEMP}" | shasum -a 1 -c
UNIX_CHECKSUM=$(shasum -a 256 "${UNIX_TEMP}" | awk '{print $1}')

WIN_TEMP=$(mktemp)
trap "rm -f ${WIN_TEMP}" EXIT
curl -o "${WIN_TEMP}" "${BASE_URL}.zip"
VERIFY_WIN_CHECKSUM=$(curl "${BASE_URL}.zip.sha1")
echo "${VERIFY_WIN_CHECKSUM}  ${WIN_TEMP}" | shasum -a 1 -c
WIN_CHECKSUM=$(shasum -a 256 "${WIN_TEMP}" | awk '{print $1}')

RELEASE_FILE=$(echo $RELEASE | sed 's/\./-/g')

cat > "${RELEASE_FILE}.yaml" << EOF
tag: '${RELEASE}'
date: 'Z'
packages:
- type: unix
  url: ${BASE_URL}.tar.gz
  checksum: ${UNIX_CHECKSUM}
- type: windows
  url: ${BASE_URL}.zip
  checksum: ${WIN_CHECKSUM}
EOF
