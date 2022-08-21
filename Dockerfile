FROM node:lts-alpine as builder

WORKDIR /usr/src/app

COPY . .

RUN npm ci
RUN npm run storybook:build

FROM node:lts-alpine as server

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist

CMD ["npx", "--yes", "serve", "dist", "--listen", "8080"]