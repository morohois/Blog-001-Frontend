FROM nginxinc/nginx-unprivileged:stable-alpine 

COPY html /usr/share/nginx/html
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js

EXPOSE 8080

USER 101

CMD nginx -g 'daemon off;'
