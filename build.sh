cd app
npm run build
cp ../Dockerfile ./dist/Dockerfile
cp ../serve.json ./dist/serve.json
gcloud run deploy webapp --source "$(pwd)/dist"
