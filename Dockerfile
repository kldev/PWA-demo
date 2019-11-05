FROM node:10.17 as build-deps
ENV GENERATE_SOURCEMAP=false
ENV REACT_APP_USERNAME=
ENV REACT_APP_PASSWORD=
# on kuberntes setup and reverse proxy this could be k8s-service:8080
# needed default.conf properly set
ENV REACT_APP_WEB_API=
ENV REACT_APP_BASE_API=
ARG appVersion
ENV REACT_APP_VERSION=$appVersion

RUN echo $REACT_APP_VERSION

COPY / /
RUN ls -la /

RUN NODE_ENV=development npm ci
RUN NODE_ENV=production npm run build

FROM nginx:1.17-alpine
COPY --from=build-deps /build /usr/share/nginx/html
RUN echo 'Build files:'
RUN ls -la /usr/share/nginx/html
RUN cat /usr/share/nginx/html/service-worker.js
RUN cat /usr/share/nginx/html/precache-manifest*.js

RUN echo 'Nginx config:'
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# build command
# docker build -t pwa-app -f Dockerfile .

# run command
# docker run -p 5000:80 kbs-front

