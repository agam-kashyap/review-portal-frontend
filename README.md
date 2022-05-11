<h1 align="center">selec. Frontend</h1>

> Developed as a part of CS 816 - Software Production Engineering course.

## Install

```sh
git clone git@github.com:agam-kashyap/review-portal-frontend.git
cd review-portal-frontend
npm install
```

## Demo

```sh
http://52.158.131.5
```

## Build Code

```sh
npm run build
```

## Launch the frontend

```sh
npm start
```

## Docker Development

```sh
docker pull keiserdocker/selec-frontend
docker build -t keiserdocker/selec-frontend:latest .
docker run -p 8080:80 keiserdocker/selec-frontend:latest
```

Find the docker image on https://hub.docker.com/r/keiserdocker/selec-frontend