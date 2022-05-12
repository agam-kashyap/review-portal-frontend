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

## UI Screenshots

Landing Page(Dark)             |  Edit Review(Light)
:-------------------------:|:-------------------------:
![Landing Page](https://github.com/agam-kashyap/review-portal-frontend/blob/main/assets/landingpage.png)  |  ![Edit Review](https://github.com/agam-kashyap/review-portal-frontend/blob/main/assets/selecttags.png)

## Disclaimer

The website was not developed keeping UI/UX in utmost concern. Please pardon if there are any overlapping cards or some horrible UI. However, if you want to contribute, hop on to the Issues tab create an issue and open a PR.