#!/bin/bash
echo "📤 Uploading unzip_images.php..."
curl -v -T unzip_images.php 'ftp://serwer194525:Kurwa123$$$$$$$@serwer194525.lh.pl/public_html/autoinstalator/serwer194525.lh.pl/wordpress162339/'

echo "📤 Uploading images.zip (1.1GB, this will take some time)..."
curl -v -T images.zip 'ftp://serwer194525:Kurwa123$$$$$$$@serwer194525.lh.pl/public_html/autoinstalator/serwer194525.lh.pl/wordpress162339/'

echo "🚀 Triggering unzip..."
curl 'http://serwer194525.lh.pl/autoinstalator/serwer194525.lh.pl/wordpress162339/unzip_images.php'
echo -e "\n✅ Done."
