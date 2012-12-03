<?php
header("Content-type: image/png");
$mcname	= $_GET['name'];

$piclink = "cache/" . $mcname . ".png";

if ( file_exists($piclink) ) {
	$ftime = filemtime($piclink); // hier wird noch gearbeitet
}
else {
	$source = "http://s3.amazonaws.com/MinecraftSkins/" . $mcname . ".png";
	$content = @file_get_contents($source);
	if ( $content ) {
		$destination = $piclink;
		@file_put_contents($destination, $content);
	}
}

$pic = @imagecreatefrompng($piclink);
if ( !$pic ) {
	$pic = @imagecreatefrompng("steve.png");
}

imagealphablending($pic, true);
imagesavealpha($pic, true);
imagepng($pic);
imagedestroy($pic);
?>
