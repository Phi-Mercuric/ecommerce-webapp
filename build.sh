npm run build
cp ./Dockerfile ./dist/Dockerfile
gcloud run deploy webapp --source "/home/user/Projects/webapp/vite-project/dist"
