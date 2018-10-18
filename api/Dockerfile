FROM php:7.1-fpm

WORKDIR /

RUN echo "display_startup_errors = STDOUT" > /usr/local/etc/php/conf.d/php.ini && \
echo "log_errors = On" >> /usr/local/etc/php/conf.d/php.ini && \
echo "memory_limit = -1" >> /usr/local/etc/php/conf.d/php.ini && \
echo "max_execution_time = 300" >> /usr/local/etc/php/conf.d/php.ini

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
php -r "if (hash_file('SHA384', 'composer-setup.php') === 'e115a8dc7871f15d853148a7fbac7da27d6c0030b848d9b3dc09e2a0388afed865e6a3d6b3c0fad45c48e2b5fc1196ae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" \

RUN cd / && php /composer-setup.php

RUN mv /composer.phar /bin/composer && php -r "unlink('composer-setup.php');"

RUN apt-get update --fix-missing

RUN docker-php-ext-install \
pdo \
pdo_mysql

#RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
#RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
#RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get install -y \
unzip

COPY composer.json /var/www/composer.json

COPY . /var/www

WORKDIR /var/www

ENTRYPOINT php artisan serve
