FROM node:slim

RUN npm install -g serve

WORKDIR /var/www/html
COPY . ./

EXPOSE 8080

CMD ["serve", "--no-clipboard", "-l", "8080"]
