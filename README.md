# Danube River

Design-focused micro-site telling the story of the danube river – Europe's second largest river, after the Volga.

### Getting Started

With [Docker](https://docs.docker.com/install/) installed, run the following. 

```bash
cp .env.example .env
docker-compose up
```

### Building for Production

Set `APP_ENV=production` inside the `.env` file.

```bash
cp .env.example .env
docker-compose up -d
```

Setup NGINX on the server to `proxy_pass` port 80 through to the app's port.

```nginx
server {
    listen 80;
    server_name example.com;
    location / {
        proxy_pass http://127.0.0.2:8080;
    }
}
```

Setup ownership of the public directories to NGINX's `www-data` user and group.

```bash
chown www-data:www-data -R build
``` 
