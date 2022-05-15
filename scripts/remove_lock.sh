#!/bin/bash

base=$(cd `dirname $0`; pwd)
root=$(cd `dirname $base`; pwd)
echo $root


cd $root
rm -rf package-lock.json
rm -rf server/package-lock.json
rm -rf client/package-lock.json
rm -rf yarn.lock
rm -rf server/yarn.lock
rm -rf client/yarn.lock
