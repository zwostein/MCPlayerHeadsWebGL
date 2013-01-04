<?php
header("Content-type: image/png");
$mcname	= $_GET['name'];

$piclink = "cache/" . $mcname . ".png";
$getnewfile = true;

if( file_exists($piclink) ){
	$fileage = floor( ( time() - filemtime($piclink) )/60/60 );		// fileage in hours
	if( $fileage < 24 ){
		$getnewfile = false;
	}
}

if( $getnewfile ){
	$source = "http://s3.amazonaws.com/MinecraftSkins/" . $mcname . ".png";
	$content = @file_get_contents($source);
	if( $content ){
		$destination = $piclink;
		@file_put_contents($destination, $content);
	}
}

$pic = @imagecreatefrompng($piclink);
if( !$pic ){
	$pic = @imagecreatefrompng("steve.png");
}

imagealphablending($pic, true);
imagesavealpha($pic, true);
imagepng($pic);
imagedestroy($pic);
?>
