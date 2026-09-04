cd api-go
docker build -t puc-react-api:dev .
docker run --rm -p 4000:4000 puc-react-api:dev