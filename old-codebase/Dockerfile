FROM node:20-alpine AS build

RUN apk add --no-cache python3 make g++

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build

RUN npm prune --omit=dev

FROM node:20-alpine AS runtime
WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/next.config.js ./next.config.js

EXPOSE 3000

CMD ["npm", "run", "start"]
