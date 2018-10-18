# Caffeine8

 _Live on the caffeine edge_

Keep track of your caffeine consumption

## Quickstart

```
git clone http://github.com/wesleylima/cafeine8
```

### API and DB With Docker Compose

Start database and api

```
docker-compose up
```

Generate a unique key:

```
docker-compose exec api php artisan key:generate
```

Migrate and seed database

```
php artisan migrate --seed
```

To develop, copy vendor files from container and
rename `docker-compose.overrideexample.yml` to `docker-compose.override.yml`. This will mount your dev directory to the docker container.


### UI
Make sure you have node (8.10 or above) and yarn installed

```
cd ui
yarn
yarn start
```

Go to http://localhost:3000/ on your browser
