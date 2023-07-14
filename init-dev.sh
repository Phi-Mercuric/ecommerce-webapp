cd server/; npm i
cd ../app/; npm i
chmod +x ../sqlserver/build.sh
../sqlserver/build.sh

(
  cd server/
  npm run dev
)&

(
  cd app/
  npm run dev
)

xdg-open "http://localhost:8080/"
