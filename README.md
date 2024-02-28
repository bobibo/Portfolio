# Portfolio

Upload on web server with a domain name : alexwavedigital.fr

En local : 
npm install
npm run dev

npm run build -> /var/www/Portfolio/

nginx 80 ( http ) + pm2 sur digital ocean 

server {
  listen 80;
  server_name portfolio.alexwavedigital.fr www.alexwavedigital.fr alexwavedigital.fr;
  location / {
    root /var/www/Portfolio;
    try_files $uri /index.html;
  }
}

