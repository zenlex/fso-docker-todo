FROM node:16 as build-stage

WORKDIR /usr/app/src

COPY --chown=node:node . .

RUN npm install

ENV REACT_APP_BACKEND_URL=http://localhost:3000

USER node

RUN npm run build

FROM nginx

COPY --from=build-stage /usr/app/src/build /usr/share/nginx/html
