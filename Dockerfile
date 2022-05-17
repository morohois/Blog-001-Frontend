FROM nginxinc/nginx-unprivileged:stable-alpine 

COPY html /usr/share/nginx/html
COPY css /usr/share/nginx/css
COPY js /usr/share/nginx/js

EXPOSE 8080

USER 101

CMD nginx -g 'daemon off;'
