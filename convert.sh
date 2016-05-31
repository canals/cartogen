#!/bin/bash

PWD=`pwd`

BASE=`basename $1 .svg`
echo $PWD/$BASE
inkscape -z -f $PWD/$1 \
         -e $PWD/$BASE.exported.png \
         -A $PWD/$BASE.exported.pdf

