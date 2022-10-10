FROM node:16 as build-stage

WORKDIR /usr/app/src

COPY --chown=node:node . .

RUN npm ci

ENV REACT_APP_BACKEND_URL=http://localhost:3000

USER node

RUN npm run build

FROM build-stage as test-stage

COPY --from=build-stage . .

RUN CI=true npm test

FROM nginx

COPY --from=test-stage /usr/app/src/build /usr/share/nginx/html
