const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.set( 0, 2 ,8 );

const renderer = new THREE.WebGLRenderer( {alpha: true} );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new THREE.OrbitControls( camera, renderer.domElement );


const groundGeo = new THREE.PlaneGeometry( 16,10, 10 );
const groundMat = new THREE.MeshBasicMaterial( { color:0x8f7347, side: THREE.DoubleSide } );
const ground = new THREE.Mesh( groundGeo, groundMat );
ground.rotation.x = Math.PI * -0.45;
scene.add( ground );

const width = 16;
const posRand = Math.random() * 4 ;
const negRand = Math.random() * -4;



const loader = new THREE.ObjectLoader();
loader.load( 'scene.json', function( cactus ){

	for( let x = -width/2; x < width/2; x++){
		let steve = cactus.clone();
		cactus.scale.set( 0.5, 0.5, 0.5 );
		cactus.position.set( posRand, 0, posRand);
		cactus.rotation.y = Math.PI * posRand;

		cactus.rot



		scene.add(cactus);
	}

})


loader.load( 'scene.json', function( cactus ){

	for( let x = -width/2; x < width/2; x++){
		let jason = cactus.clone();
		cactus.position.x = 6; 
		cactus.scale.set( 0.5, 0.5, 0.5 );
		cactus.position.set( negRand, 0, posRand);
		cactus.rotation.y = Math.PI * posRand;



		scene.add(cactus);
	}

})

loader.load( 'scene.json', function( cactus ){

	for( let x = -width/2; x < width/2; x++){
		let bert = cactus.clone();
		cactus.scale.set( 0.5, 0.5, 0.5 );
		cactus.position.x = -4;
		cactus.position.set( posRand, 0, negRand);
		cactus.rotation.y = Math.PI * posRand;



		scene.add(cactus);
	}

})

loader.load( 'scene.json', function( cactus ){

	for( let x = -width/2; x < width/2; x++){
		let tom = cactus.clone();
		cactus.position.x = 6; 
		cactus.scale.set( 0.5, 0.5, 0.5 );
		cactus.position.set( negRand, 0, negRand);
		cactus.rotation.y = Math.PI * posRand;



		scene.add(cactus);
	}

})

loader.load( 'scene.json', function( cactus ){

	for( let x = -width/2; x < width/2; x++){
		let christina = cactus.clone();
		cactus.position.x = 6; 
		cactus.scale.set( 0.5, 0.5, 0.5 );
		cactus.position.set( negRand, 0, posRand);
		cactus.rotation.y = Math.PI * posRand;



		scene.add(cactus);
	}

})



	animate();







function animate() {
	
	// box.rotation.y += 0.02;

	controls.update();

	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}




