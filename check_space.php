<?php
$dir = __DIR__;
echo "Disk free: " . disk_free_space($dir) / (1024*1024*1024) . " GB\n";
echo "Disk total: " . disk_total_space($dir) / (1024*1024*1024) . " GB\n";
?>
