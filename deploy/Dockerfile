FROM httpd
COPY ./dist/ /usr/local/apache2/htdocs/
COPY ./deploy/apache2/conf/ /usr/local/apache2/conf/
RUN echo 'Listen ${PORT}' >> /usr/local/apache2/conf/httpd.conf