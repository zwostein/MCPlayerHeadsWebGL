// get current script path for serverside helperscripts
MCPlayerHeads_scriptPath = "";
(function()
{
	var scripts = document.getElementsByTagName("script");
	var src = scripts[scripts.length-1].src;
	MCPlayerHeads_scriptPath = src.substring( 0, src.lastIndexOf("/")+1 );
}) ();


MCPlayerHead = function( name )
{
	THREE.Mesh.call( this );	// inherit from THREE.Mesh

	this.name = name;
	this.texture = THREE.ImageUtils.loadTexture( MCPlayerHeads_scriptPath + 'getTexture.php?name=' + name );
	this.texture.minFilter = THREE.LinearFilter;
	this.texture.magFilter = THREE.NearestFilter;
	this.generateMipmaps = false;
	this.texture.wrapS = THREE.ClampToEdgeWrapping;
	this.texture.wrasT = THREE.ClampToEdgeWrapping;
	this.material = new THREE.MeshLambertMaterial( { side:THREE.DoubleSide, alphaTest:0.999, map:this.texture } );
	this.geometry = new THREE.Geometry();
	function pushNewMCCube( geometry, scale, texOffset, texFixOffset )
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
		geometry.faces.push( new THREE.Face3( faceStartIndex+0, faceStartIndex+1, faceStartIndex+2 ) );	// front
		geometry.faces.push( new THREE.Face3( faceStartIndex+2, faceStartIndex+3, faceStartIndex+0 ) );	// front
		geometry.faces.push( new THREE.Face3( faceStartIndex+5, faceStartIndex+4, faceStartIndex+7 ) );	// back
		geometry.faces.push( new THREE.Face3( faceStartIndex+7, faceStartIndex+6, faceStartIndex+5 ) );	// back
		geometry.faces.push( new THREE.Face3( faceStartIndex+4, faceStartIndex+0, faceStartIndex+3 ) );	// left
		geometry.faces.push( new THREE.Face3( faceStartIndex+3, faceStartIndex+7, faceStartIndex+4 ) );	// left
		geometry.faces.push( new THREE.Face3( faceStartIndex+1, faceStartIndex+5, faceStartIndex+6 ) );	// right
		geometry.faces.push( new THREE.Face3( faceStartIndex+6, faceStartIndex+2, faceStartIndex+1 ) );	// right
		geometry.faces.push( new THREE.Face3( faceStartIndex+3, faceStartIndex+2, faceStartIndex+6 ) );	// top
		geometry.faces.push( new THREE.Face3( faceStartIndex+6, faceStartIndex+7, faceStartIndex+3 ) );	// top
		geometry.faces.push( new THREE.Face3( faceStartIndex+4, faceStartIndex+5, faceStartIndex+1 ) );	// bottom
		geometry.faces.push( new THREE.Face3( faceStartIndex+1, faceStartIndex+0, faceStartIndex+4 ) );	// bottom
		geometry.faceVertexUvs[0].push( [
			new THREE.Vector2( texOffset+1.0/8.0+texFixOffset, 2.0/4.0+texFixOffset ),
			new THREE.Vector2( texOffset+2.0/8.0-texFixOffset, 2.0/4.0+texFixOffset ),
			new THREE.Vector2( texOffset+2.0/8.0-texFixOffset, 3.0/4.0-texFixOffset )
		] );
		geometry.faceVertexUvs[0].push( [
			new THREE.Vector2( texOffset+2.0/8.0-texFixOffset, 3.0/4.0-texFixOffset ),
			new THREE.Vector2( texOffset+1.0/8.0+texFixOffset, 3.0/4.0-texFixOffset ),
			new THREE.Vector2( texOffset+1.0/8.0+texFixOffset, 2.0/4.0+texFixOffset )
		] );

		geometry.faceVertexUvs[0].push( [
			new THREE.Vector2( texOffset+3.0/8.0+texFixOffset, 2.0/4.0+texFixOffset ),
			new THREE.Vector2( texOffset+4.0/8.0-texFixOffset, 2.0/4.0+texFixOffset ),
			new THREE.Vector2( texOffset+4.0/8.0-texFixOffset, 3.0/4.0-texFixOffset )
		] );
		geometry.faceVertexUvs[0].push( [
			new THREE.Vector2( texOffset+4.0/8.0-texFixOffset, 3.0/4.0-texFixOffset ),
			new THREE.Vector2( texOffset+3.0/8.0+texFixOffset, 3.0/4.0-texFixOffset ),
			new THREE.Vector2( texOffset+3.0/8.0+texFixOffset, 2.0/4.0+texFixOffset )
		] );

		geometry.faceVertexUvs[0].push( [
			new THREE.Vector2( texOffset+0.0/8.0+texFixOffset, 2.0/4.0+texFixOffset ),
			new THREE.Vector2( texOffset+1.0/8.0-texFixOffset, 2.0/4.0+texFixOffset ),
			new THREE.Vector2( texOffset+1.0/8.0-texFixOffset, 3.0/4.0-texFixOffset )
		] );
		geometry.faceVertexUvs[0].push( [
			new THREE.Vector2( texOffset+1.0/8.0-texFixOffset, 3.0/4.0-texFixOffset ),
			new THREE.Vector2( texOffset+0.0/8.0+texFixOffset, 3.0/4.0-texFixOffset ),
			new THREE.Vector2( texOffset+0.0/8.0+texFixOffset, 2.0/4.0+texFixOffset )
		] );

		geometry.faceVertexUvs[0].push( [
			new THREE.Vector2( texOffset+2.0/8.0+texFixOffset, 2.0/4.0+texFixOffset ),
			new THREE.Vector2( texOffset+3.0/8.0-texFixOffset, 2.0/4.0+texFixOffset ),
			new THREE.Vector2( texOffset+3.0/8.0-texFixOffset, 3.0/4.0-texFixOffset )
		] );
		geometry.faceVertexUvs[0].push( [
			new THREE.Vector2( texOffset+3.0/8.0-texFixOffset, 3.0/4.0-texFixOffset ),
			new THREE.Vector2( texOffset+2.0/8.0+texFixOffset, 3.0/4.0-texFixOffset ),
			new THREE.Vector2( texOffset+2.0/8.0+texFixOffset, 2.0/4.0+texFixOffset )
		] );

		geometry.faceVertexUvs[0].push( [
			new THREE.Vector2( texOffset+1.0/8.0+texFixOffset, 3.0/4.0+texFixOffset ),
			new THREE.Vector2( texOffset+2.0/8.0-texFixOffset, 3.0/4.0+texFixOffset ),
			new THREE.Vector2( texOffset+2.0/8.0-texFixOffset, 4.0/4.0-texFixOffset )
		] );
		geometry.faceVertexUvs[0].push( [
			new THREE.Vector2( texOffset+2.0/8.0-texFixOffset, 4.0/4.0-texFixOffset ),
			new THREE.Vector2( texOffset+1.0/8.0+texFixOffset, 4.0/4.0-texFixOffset ),
			new THREE.Vector2( texOffset+1.0/8.0+texFixOffset, 3.0/4.0+texFixOffset )
		] );

		geometry.faceVertexUvs[0].push( [
			new THREE.Vector2( texOffset+2.0/8.0+texFixOffset, 3.0/4.0+texFixOffset ),
			new THREE.Vector2( texOffset+3.0/8.0-texFixOffset, 3.0/4.0+texFixOffset ),
			new THREE.Vector2( texOffset+3.0/8.0-texFixOffset, 4.0/4.0-texFixOffset )
		] );
		geometry.faceVertexUvs[0].push( [
			new THREE.Vector2( texOffset+3.0/8.0-texFixOffset, 4.0/4.0-texFixOffset ),
			new THREE.Vector2( texOffset+2.0/8.0+texFixOffset, 4.0/4.0-texFixOffset ),
			new THREE.Vector2( texOffset+2.0/8.0+texFixOffset, 3.0/4.0+texFixOffset )
		] );
	}
	pushNewMCCube( this.geometry, 1.0, 0.0, 0.0 );
	pushNewMCCube( this.geometry, 1.1, 0.5, 0.0 );
	this.geometry.computeFaceNormals();
	this.geometry.computeCentroids();
	this.geometry.computeVertexNormals();
	this.geometry.computeBoundingSphere();
	this.boundRadius = this.geometry.boundingSphere.radius;

	return this;
};

MCPlayerHead.prototype = Object.create( THREE.Mesh.prototype );



MCPlayerHeadRow = function( container )
{
	this.container = container;
	this.playerHeads = Array();
	this.selectableHeads = [];
	this.selectedHead;
	this.hoveredHead;
	this.targetRotation = new THREE.Vector2( 0, 0 );
	this.targetRotationOnMouseDown = new THREE.Vector2( 0, 0 );
	this.mouse = new THREE.Vector2( 0, 0 );
	this.mouseOnMouseDown = new THREE.Vector2( 0, 0 );
	this.windowHalf = new THREE.Vector2( container.offsetWidth/2, container.offsetHeight/2 );

	this.scene = new THREE.Scene();

	this.camera = new THREE.PerspectiveCamera(	this.fovX2fovY( 60, this.container.offsetWidth/this.container.offsetHeight ),
							this.container.offsetWidth/this.container.offsetHeight, 0.1, 100	);
	this.camera.position.z = 15;

	this.renderer = new THREE.WebGLRenderer( { alpha: true } );
	this.renderer.setClearColor( 0x000000, 0 );
	this.renderer.setSize( this.container.offsetWidth, this.container.offsetHeight );
	this.container.appendChild( this.renderer.domElement );

	this.directionalLight = new THREE.DirectionalLight( 0xffffff, 2.0 );
	this.directionalLight.position.set( 0, 1, 5 );
	this.scene.add( this.directionalLight );

	this.popupCanvas = document.createElement( 'canvas' );
	this.popupContext = this.popupCanvas.getContext('2d');
	var message = "MCPlayerHeads";
	var metrics = this.popupContext.measureText(message);
	this.popupCanvas.width = metrics.width;
	this.popupCanvas.height = 40;
	this.popupContext.fillStyle = "rgba(255,255,255,0.75)";
	this.popupContext.fillRect( 0,0, metrics.width,40 );
	this.popupContext.fillStyle = "rgba(0,0,0,1)";
	this.popupContext.textBaseline = 'bottom';
	this.popupContext.font = "32px Sans";
	this.popupContext.fillText( message, 0, 40 );
	this.popupTexture = new THREE.Texture( this.popupCanvas )
	this.popupTexture.needsUpdate = true;
	this.popupMaterial = new THREE.SpriteMaterial( { map: this.popupTexture, opacity: 1 } );
	this.popupSprite = new THREE.Sprite( this.popupMaterial );
	this.popupSprite.position.set( 0, 0, 0 );
	this.popupSprite.scale.set( 0.25*this.popupTexture.image.width/this.popupTexture.image.height, 0.25, 0.25 );
	this.scene.add( this.popupSprite );

	var _this = this
	this.container.addEventListener( 'mousedown', function(e){_this.onMouseDown(e)}, false );
	window.addEventListener( 'resize', function(e){_this.onResize(e)}, false );
	this.container.addEventListener( 'mousemove', function(e){_this.onMouseMove(e)}, false );
	this.container.addEventListener( 'mouseup', function(e){_this.onMouseUp(e)}, false );
	this.container.addEventListener( 'mouseout', function(e){_this.onMouseOut(e)}, false );

	this.render();
}

MCPlayerHeadRow.prototype.updatePlayerList = function( playerNames )
{
	this.selectableHeads = new Array();
	// Players to remove:
	for( var i in this.playerHeads )
	{
		if( playerNames.indexOf(i) < 0 )
		{
			this.scene.remove( this.playerHeads[i] );
			delete this.playerHeads[i];
		}
	}
	// Players to add:
	for( var i in playerNames )
	{
		if( !(playerNames[i] in this.playerHeads) )
		{
			this.playerHeads[playerNames[i]] = new MCPlayerHead( playerNames[i] );
			this.scene.add( this.playerHeads[playerNames[i]] );
			this.playerHeads[playerNames[i]].targetRotation = new THREE.Vector2( 0, 0 );
			this.playerHeads[playerNames[i]].lookAt = new THREE.Quaternion();
			this.playerHeads[playerNames[i]].randomLookAtOffset = new THREE.Quaternion();
			this.playerHeads[playerNames[i]].newRandomLookAtOffset = function()
			{
				var random = new THREE.Vector3( -Math.random()*50+25, Math.random()*50-25, -Math.random()*50-80 );
				var mat = new THREE.Matrix4();
				mat.lookAt( new THREE.Vector3(0,0,0), random, new THREE.Vector3(0,1,0) );
				this.randomLookAtOffset.setFromRotationMatrix( mat );
				var _this = this;
				this.randomLookAtOffsetTimeout = setTimeout( function(){_this.newRandomLookAtOffset();}, (Math.random()*7000)+1000 );
			};
			this.playerHeads[playerNames[i]].newRandomLookAtOffset();
		}
	}
	var cnt = 1;
	for( var i in this.playerHeads )
	{
		this.selectableHeads.push( this.playerHeads[i] );
		this.playerHeads[i].position.x = (18/(playerNames.length+1)) * cnt - 9;
		cnt++;
	}
}

MCPlayerHeadRow.prototype.fovX2fovY = function( fovX, aspect )
{
	fovX = fovX * (Math.PI/180.0);
	var fovY = 2.0 * Math.atan( Math.tan( fovX * 0.5 ) / aspect );
	fovY = fovY * (180.0/Math.PI)
	return fovY;
}

MCPlayerHeadRow.prototype.onResize = function()
{
	this.windowHalf.x = this.container.offsetWidth/2;
	this.windowHalf.y = this.container.offsetHeight/2;
	this.camera.aspect = this.container.offsetWidth / this.container.offsetHeight;
	this.camera.fov = this.fovX2fovY( 60, this.container.offsetWidth/this.container.offsetHeight );
	this.camera.updateProjectionMatrix();
	this.renderer.setSize( this.container.offsetWidth, this.container.offsetHeight );
}

MCPlayerHeadRow.prototype.onMouseDown = function( event )
{
	event.preventDefault();

	this.mouseOnMouseDown.x = event.clientX;
	this.mouseOnMouseDown.y = event.clientY;

	var vector = new THREE.Vector3(	( (event.clientX-this.container.offsetLeft) / this.container.offsetWidth ) * 2 - 1,
					-( (event.clientY-this.container.offsetTop) / this.container.offsetHeight ) * 2 + 1,
					0.5);
	var projector = new THREE.Projector();
	projector.unprojectVector( vector, this.camera );
	var ray = new THREE.Raycaster( this.camera.position, vector.sub( this.camera.position ).normalize() );
	var intersects = ray.intersectObjects( this.selectableHeads );
	if( intersects.length > 0 )
	{
		this.selectedHead = intersects[0].object;
	}

	if( this.selectedHead )
	{
		this.targetRotationOnMouseDown.x = this.selectedHead.targetRotation.x;
		this.targetRotationOnMouseDown.y = this.selectedHead.targetRotation.y;
	}
}

MCPlayerHeadRow.prototype.onMouseMove = function( event )
{
	this.mouse.x = event.clientX;
	this.mouse.y = event.clientY;

	if( this.selectedHead )
	{
		this.selectedHead.targetRotation.x = this.targetRotationOnMouseDown.x + ( this.mouse.x - this.mouseOnMouseDown.x ) * 0.01;
		this.selectedHead.targetRotation.y = this.targetRotationOnMouseDown.y + ( this.mouse.y - this.mouseOnMouseDown.y ) * 0.01;
		if( this.selectedHead.targetRotation.y > Math.PI/4 )
			this.selectedHead.targetRotation.y = Math.PI/4;
		if( this.selectedHead.targetRotation.y < -Math.PI/4 )
			this.selectedHead.targetRotation.y = -Math.PI/4;
	}
	if( ! this.selectedHead )
	{
		var vector = new THREE.Vector3(	( (event.clientX-this.container.offsetLeft) / this.container.offsetWidth ) * 2 - 1,
						-( (event.clientY-this.container.offsetTop) / this.container.offsetHeight ) * 2 + 1,
						0.5);
		var projector = new THREE.Projector();
		projector.unprojectVector( vector, this.camera );
		var ray = new THREE.Raycaster( this.camera.position, vector.sub( this.camera.position ).normalize() );
		var intersects = ray.intersectObjects( this.selectableHeads );
		if( intersects.length > 0 )
		{
			this.hoveredHead = intersects[0].object;
			var popupOffset = new THREE.Vector3( 0, -1.25, 1.5 );
			this.popupSprite.position = popupOffset.add(intersects[0].object.position);
			this.popupMaterial.opacity = 0.75;
			var message = intersects[0].object.name;
			var metrics = this.popupContext.measureText(message);
			this.popupCanvas.width = metrics.width;
			this.popupCanvas.height = 40;
			this.popupContext.fillStyle = "rgba(255,255,255,0.75)";
			this.popupContext.fillRect( 0,0, metrics.width,40 );
			this.popupContext.fillStyle = "rgba(0,0,0,1)";
			this.popupContext.textBaseline = 'bottom';
			this.popupContext.font = "32px Sans";
			this.popupContext.fillText( message, 0,40 );
			this.popupTexture.needsUpdate = true;
			this.popupSprite.scale.set( 0.5*this.popupTexture.image.width/this.popupTexture.image.height, 0.5, 0.5 );
		}
		else
		{
			this.hoveredHead = null;
		}
	}
	else
	{
		this.hoveredHead = null;
	}
}

MCPlayerHeadRow.prototype.onMouseUp = function( event )
{
	this.selectedHead = null;
	this.hoveredHead = null;
}

MCPlayerHeadRow.prototype.onMouseOut = function( event )
{
	this.selectedHead = null;
	this.hoveredHead = null;
}

MCPlayerHeadRow.prototype.render = function()
{
	var _this = this;
	requestAnimationFrame( function(){_this.render()} );

	for( var i in this.playerHeads )
	{
		var rotX = new THREE.Quaternion();
		rotX.setFromAxisAngle( new THREE.Vector3( 1, 0, 0 ), this.playerHeads[i].targetRotation.y );
		var rotY = new THREE.Quaternion();
		rotY.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), this.playerHeads[i].targetRotation.x );
		this.playerHeads[i].lookAt = new THREE.Quaternion();
		this.playerHeads[i].lookAt.multiply( rotX );
		this.playerHeads[i].lookAt.multiply( rotY );
		this.playerHeads[i].lookAt.multiply( this.playerHeads[i].randomLookAtOffset );
		var newRotation = new THREE.Quaternion();
		THREE.Quaternion.slerp( this.playerHeads[i].quaternion, this.playerHeads[i].lookAt, newRotation, 0.08 );
		this.playerHeads[i].quaternion = newRotation;
	}
	if( ! this.hoveredHead )
		this.popupMaterial.opacity = this.popupMaterial.opacity * 0.86;
	this.renderer.render( this.scene, this.camera );
}
