#!/bin/bash

base=$(cd `dirname $0`; pwd)
root=$(cd `dirname $base`; pwd)
echo $root

export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1

cd $root
rm -rf node_modules

cd $root/client
rm -rf node_modules

cd $root/server
rm -rf node_modules