
FROM node:18-bullseye-slim AS prod

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 3000
# EXPOSE 8080

CMD ["npm", "run", "start"]
