VERSION="$(git log --pretty=format:'%h' -n 1)"
export REACT_APP_VERSION="${VERSION}"
echo ${REACT_APP_VERSION}
docker build -t pwa-app:${REACT_APP_VERSION} --build-arg appVersion=${REACT_APP_VERSION} . 