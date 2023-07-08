from postgres:latest

ENV POSTGRES_USER webapp
ENV POSTGRES_PASSWORD password
ENV POSTGRES_DB server

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432
