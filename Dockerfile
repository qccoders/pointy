FROM node:lts-alpine3.13 AS build

WORKDIR /pointy

COPY bin bin/.
COPY src src/.

RUN sh ./bin/build

FROM node:lts-alpine3.13 AS pointy

WORKDIR /pointy

COPY --from=build /pointy/dist .

ENTRYPOINT ["node", "."]
