FROM node:16-alpine as build

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm ci 

COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
