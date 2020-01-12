FROM node:12.4.0
WORKDIR /
RUN mkdir blog-vuepress
ADD . /blog-vuepress
WORKDIR /blog-vuepress
RUN npm install
RUN npm run docs:build