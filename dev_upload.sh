#!/bin/sh

aws s3 cp index.html s3://www.dev.knowthyshelf.com/index.html
aws s3 cp build/bundle.js s3://www.dev.knowthyshelf.com/bundle.js
aws s3 cp build/bundle.js.map s3://www.dev.knowthyshelf.com/bundle.js.map
aws s3 cp public/css/base.css s3://www.dev.knowthyshelf.com/public/css/base.css
