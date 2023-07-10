from postgres:latest

ENV POSTGRES_USER webapp
ENV POSTGRES_PASSWORD password              # god forbid this ever goes into prod
ENV POSTGRES_DB server

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432
