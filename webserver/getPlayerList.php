<?php

$mcname = "Zw0 sh4ni kaylabs jeb_";		// Hardcode for testing
$defaultskin = "jeb_";		// Defaultskin if nobody is playing

header('Content-type: text/plain');
$name = explode( " ", $mcname );
$anzahl = count($name);
print( '[ ' );
if ( $mcname ) {
	for ( $i = 0; $i < $anzahl; $i++ ) {
		print( '"' . $name[$i] . '"' );
		if ( $i < $anzahl -1 ) print( ',' );
	}
}
else {
	print( '"' . $defaultskin . '"' );
}
print( ' ]' );
?>
