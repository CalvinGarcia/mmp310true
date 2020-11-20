const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.set( 0, 10,8 );

const renderer = new THREE.WebGLRenderer( {alpha: true} );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new THREE.OrbitControls( camera, renderer.domElement );


const groundGeo = new THREE.PlaneGeometry( 16,10, 10 );
const groundMat = new THREE.MeshBasicMaterial( { color:0x8f7347, side: THREE.DoubleSide } );
const ground = new THREE.Mesh( groundGeo, groundMat );
ground.rotation.x = Math.PI * -0.45;
scene.add( ground );

const width = 10;


// box example
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial( {color: 0x00ccdd} );
// const box =  new THREE.Mesh( geometry, material );
// scene.add(box);



// camera.lookAt( box.position ); example

// renderer.render( scene, camera );


// load editor scene

const loader = new THREE.ObjectLoader();
loader.load( 'scene.json', onLoad );
// loader.load( ' rock.json' , onLoad);


var p = Math.random () *5 ;
const np = Math.random() *-5;



function onLoad( cactus ){

	for (let x = -8; x < 8; x++){


	cactus.scale.set( 0.5, 0.5, 0.5);
	cactus.rotation.y = Math.PI * p;
	// cactus.position.set( p , 0 , p);
	cactus.position.x = x;
	cactus.position.z = p;
	scene.add( cactus );


	

	
}

	// cactus.scale.set( 0.5 , 0.5, 0.5);
	// cactus.rotation.y = Math.PI * p;
	// cactus.position.set( p, 0.15, p);


	// scene.add( cactus );
	animate();
}





function animate() {
	
	// box.rotation.y += 0.02;

	controls.update();

	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();


