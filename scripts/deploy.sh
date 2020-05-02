#! /usr/bin/env bash

docker build . -t gcr.io/catan-274322/catan
docker push gcr.io/catan-274322/catan
