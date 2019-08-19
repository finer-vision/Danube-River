# Danube River

Design-focused micro-site telling the story of the danube river – Europe's second largest river, after the Volga.

### Getting Started

With [Docker](https://docs.docker.com/install/) installed, run the following.

```bash
cp .env.example .env
docker-compose up
```

### Adding Dependencies

If you are using [Docker](https://docs.docker.com/install/) make sure you install the dependencies inside the machine.

```bash
docker-compose exec app npm add package
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

### Useful

**Expected Article Content Modules:**

- Images (Left, Right, Full-width)
- Pull-out Quotes
- Video (Inline, full screen)
- Stats/Infographics (varied designs/graphs)
- 360 Video (Including GUI options)
- Image Carousel
- Audio Player
- Maps (2D/3D)

**Liked Examples:**

**Landing Page Examples:**

- Scrolling map: https://www.nationalgeographic.com/magazine/2016/05/yellowstone-national-parks-bears-video/
- Page Scroll: https://californiacalling.cc/

**Article Page Examples:**

- General Page Layout: https://emergencemagazine.org/story/language-keepers/#/chapter/wukchumni
- Stats on Scroll: https://news.sky.com/state-of-the-nation
- Progress Bar: https://intern-mag.com/rewriting-the-future/
- Page Parralax: https://www.thinkful.com/blog/what-is-data-science/
- Interactive Graph: http://mediaelection.com
