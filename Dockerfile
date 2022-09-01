FROM node:14-alpine3.15 as build

RUN apk add --no-cache python2 g++ make

WORKDIR /usr/src/app

# install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .

# *actually* build the monster
RUN npm run build

# remove dev dependencies
RUN npm prune --production

FROM node:14-alpine3.15
WORKDIR /usr/src/app

# copy from build image
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/public ./public

EXPOSE 3000
CMD ["npm", "run", "start"]
