FROM node:16

WORKDIR /usr/src/app/todo

COPY --chown=node:node . .

RUN npm ci

USER node

ENV DEBUG=todo-backend:*

CMD npm run dev
