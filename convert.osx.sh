#!/bin/bash

PWD=`pwd`

BASE=`basename $1 .svg`
echo $PWD/$BASE
/Applications/Inkscape.app/Contents/Resources/bin/inkscape -z -f $PWD/$1 \
              -e $PWD/$BASE.exported.png \
              -A $PWD/$BASE.exported.pdf

