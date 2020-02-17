FROM node:lts-alpine
RUN adduser kanrule --gecos GECOS --shell /bin/bash --disabled-password --home /app
COPY . /app
WORKDIR /app
RUN npm run install-dependencies && \
    cp -v /app/docker/entrypoint.sh /usr/bin/entrypoint
ENTRYPOINT ["entrypoint"]
