#!/bin/bash
dirs=(
	"backend"
	"web"
	"mobile"
)
start_dir=$PWD
ARG="$1"
for i in ${!dirs[*]}
do
	cd  ${dirs[i]}
	if [ "$ARG" != "" ]; then 
		cat yarn.lock | grep  $ARG
		if [ $? = 0 ]; then
			yarn upgrade $ARG
		fi
	fi
	yarn upgrade $*
	cd ..
done

cd $start_dir
