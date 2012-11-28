
PlayerHead = function( name )
{
	THREE.Mesh.call( this );	// inherit from THREE.Mesh
	this.name = name;
	this.texture = THREE.ImageUtils.loadTexture( 'getTexture.php?name=' + name );
	this.texture.magFilter = THREE.NearestFilter;
	this.material = new THREE.MeshLambertMaterial( { side:THREE.DoubleSide, alphaTest:0.999, map:this.texture } );
	this.geometry = new THREE.Geometry();
	function pushNewMCCube( geometry, scale, texOffset )
	{
		var faceStartIndex = geometry.vertices.length;
		geometry.vertices.push( new THREE.Vector3( -scale, -scale,  scale ) );	// 0 - frontBottomLeft
		geometry.vertices.push( new THREE.Vector3(  scale, -scale,  scale ) );	// 1 - frontBottomRight
		geometry.vertices.push( new THREE.Vector3(  scale,  scale,  scale ) );	// 2 - frontTopRight
		geometry.vertices.push( new THREE.Vector3( -scale,  scale,  scale ) );	// 3 - frontTopLeft
		geometry.vertices.push( new THREE.Vector3( -scale, -scale, -scale ) );	// 4 - backBottomLeft
		geometry.vertices.push( new THREE.Vector3(  scale, -scale, -scale ) );	// 5 - backBottomRight
		geometry.vertices.push( new THREE.Vector3(  scale,  scale, -scale ) );	// 6 - backTopRight
		geometry.vertices.push( new THREE.Vector3( -scale,  scale, -scale ) );	// 7 - backTopLeft
		geometry.faces.push( new THREE.Face4( faceStartIndex+0, faceStartIndex+1, faceStartIndex+2, faceStartIndex+3 ) );	// front
		geometry.faces.push( new THREE.Face4( faceStartIndex+5, faceStartIndex+4, faceStartIndex+7, faceStartIndex+6 ) );	// back
		geometry.faces.push( new THREE.Face4( faceStartIndex+4, faceStartIndex+0, faceStartIndex+3, faceStartIndex+7 ) );	// left
		geometry.faces.push( new THREE.Face4( faceStartIndex+1, faceStartIndex+5, faceStartIndex+6, faceStartIndex+2 ) );	// right
		geometry.faces.push( new THREE.Face4( faceStartIndex+3, faceStartIndex+2, faceStartIndex+6, faceStartIndex+7 ) );	// top
		geometry.faces.push( new THREE.Face4( faceStartIndex+4, faceStartIndex+5, faceStartIndex+1, faceStartIndex+0 ) );	// bottom
		geometry.faceVertexUvs[0].push( [	new THREE.UV( texOffset+1.0/8.0, 2.0/4.0 ),
							new THREE.UV( texOffset+2.0/8.0, 2.0/4.0 ),
							new THREE.UV( texOffset+2.0/8.0, 3.0/4.0 ),
							new THREE.UV( texOffset+1.0/8.0, 3.0/4.0 )	] );
		geometry.faceVertexUvs[0].push( [	new THREE.UV( texOffset+3.0/8.0, 2.0/4.0 ),
							new THREE.UV( texOffset+4.0/8.0, 2.0/4.0 ),
							new THREE.UV( texOffset+4.0/8.0, 3.0/4.0 ),
							new THREE.UV( texOffset+3.0/8.0, 3.0/4.0 )	] );
		geometry.faceVertexUvs[0].push( [	new THREE.UV( texOffset+0.0/8.0, 2.0/4.0 ),
							new THREE.UV( texOffset+1.0/8.0, 2.0/4.0 ),
							new THREE.UV( texOffset+1.0/8.0, 3.0/4.0 ),
							new THREE.UV( texOffset+0.0/8.0, 3.0/4.0 )	] );
		geometry.faceVertexUvs[0].push( [	new THREE.UV( texOffset+2.0/8.0, 2.0/4.0 ),
							new THREE.UV( texOffset+3.0/8.0, 2.0/4.0 ),
							new THREE.UV( texOffset+3.0/8.0, 3.0/4.0 ),
							new THREE.UV( texOffset+2.0/8.0, 3.0/4.0 )	] );
		geometry.faceVertexUvs[0].push( [	new THREE.UV( texOffset+1.0/8.0, 3.0/4.0 ),
							new THREE.UV( texOffset+2.0/8.0, 3.0/4.0 ),
							new THREE.UV( texOffset+2.0/8.0, 4.0/4.0 ),
							new THREE.UV( texOffset+1.0/8.0, 4.0/4.0 )	] );
		geometry.faceVertexUvs[0].push( [	new THREE.UV( texOffset+2.0/8.0, 3.0/4.0 ),
							new THREE.UV( texOffset+3.0/8.0, 3.0/4.0 ),
							new THREE.UV( texOffset+3.0/8.0, 4.0/4.0 ),
							new THREE.UV( texOffset+2.0/8.0, 4.0/4.0 )	] );
	}
	pushNewMCCube( this.geometry, 1.0, 0 );
	pushNewMCCube( this.geometry, 1.1, 0.5 );
	this.geometry.computeFaceNormals();
	this.geometry.computeCentroids();
	this.geometry.computeVertexNormals();
	this.geometry.computeBoundingSphere();
	this.boundRadius = this.geometry.boundingSphere.radius;
	return this;
};
PlayerHead.prototype = Object.create( THREE.Mesh.prototype );
PlayerHead.prototype.constructor = PlayerHead;
