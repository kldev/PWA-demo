VERSION="$(git log --pretty=format:'%h' -n 1)"
echo "Started docker pwa-app:${VERSION}"
docker run -it -p 80:80 pwa-app:${VERSION}