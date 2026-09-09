#esse conteiner é para buildar e rodar o backend golang
FROM golang:1.26-trixie

WORKDIR /app

# copia source to dest

COPY go.mod go.sum ./

RUN go mod download


COPY . .

RUN go build -o main .

EXPOSE 4000

CMD ["./main"]






