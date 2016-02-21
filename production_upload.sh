#!/bin/sh

aws s3 cp build/index.html s3://www.knowthyshelf.com/index.html
aws s3 cp build/bundle.js s3://www.knowthyshelf.com/bundle.js
