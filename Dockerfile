FROM node:12-alpine
RUN apk add --no-cache python g++ make
WORKDIR ./
COPY . .
RUN npm install
RUN npm run build
CMD ["node", "dist/main.js"] 