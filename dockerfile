FROM node:16 AS Node
COPY . /web
WORKDIR /web
RUN  npm i &&  npm run build
ENTRYPOINT ["npm"]
CMD [ "run server:prod"]