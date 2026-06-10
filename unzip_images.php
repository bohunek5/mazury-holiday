<?php
$dir = __DIR__;
$zip = new ZipArchive;
if ($zip->open('images.zip') === TRUE) {
    $zip->extractTo($dir);
    $zip->close();
    echo "ok";
} else {
    echo "failed";
}
@unlink('images.zip');
@unlink('unzip_images.php');
?>