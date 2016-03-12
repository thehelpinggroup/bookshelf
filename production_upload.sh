#!/bin/sh

aws s3 cp build/index.html s3://www.knowthyshelf.com/index.html
aws s3 cp build/bundle.js s3://www.knowthyshelf.com/bundle.js
aws s3 cp public/css/base.css s3://www.knowthyshelf.com/public/css/base.css
