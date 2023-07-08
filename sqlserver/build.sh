docker build -t my-postgres-image .
docker run --name my-postgres-container -p 5432:5432 -d my-postgres-image
docker start my-postgres-container
