FROM nginx:1.17

#Remove the default nginx web stuffs
RUN rm -rf /usr/share/nginx/html/*

#Copy the build web stuffs into nginx
RUN mv /etc/nginx/conf.d /etc/nginx/conf.d.back
COPY ci/default_dev.conf /etc/nginx/conf.d
COPY dist/ds-web /usr/share/nginx/html/
COPY ci/report.html /usr/share/nginx/html/
COPY README.md /usr/share/nginx/html/
RUN ls /etc/nginx/
