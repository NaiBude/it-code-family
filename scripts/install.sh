#!/bin/bash

base=$(cd `dirname $0`; pwd)
root=$(cd `dirname $base`; pwd)
echo $root

export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1

cd $root
npm install

cd $root/client
npm install

cd $root/server
npm install