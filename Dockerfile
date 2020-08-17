FROM node:10
WORKDIR usr/src/app
COPY package*.json ./
RUN npm install
RUN npm audit fix
# Copy local angular/nest code to the container
COPY . .
# Build production app
RUN npm run build:ssr
CMD ["npm", "run", "serve:ssr"]
