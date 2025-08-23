# Usa Node 20 per la fase di build
FROM node:20-alpine3.18 as build

# Installazione pacchetti necessari
RUN apk add --no-cache python3 make g++

WORKDIR /usr/src/app

# install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .

# build dell'app
RUN npm run build

# rimuovi le dipendenze di sviluppo
RUN npm prune --production


# ---- Runtime stage ----
FROM node:20-alpine3.18
WORKDIR /usr/src/app

# Copia solo ciò che serve per il runtime
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/public ./public

EXPOSE 3000
CMD ["npm", "run", "start"]
