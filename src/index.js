
import * as THREE from 'three';
import { gsap } from "gsap";
    




// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 500 );



// the DIV from the page

var container = document.getElementById( 'canvas' );


// a scene

var scene = new THREE.Scene();
scene.background = new THREE.Color( 'rgb(232, 232, 227)' );


// camera that uses the container's size

var camera = new THREE.PerspectiveCamera( 75, container.clientWidth/ container.clientHeight, 0.1, 1000 );
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 500 );
camera.position.set( 2, 5, 10 );
camera.lookAt( scene.position );


// renderer that uses the container's size and is inserted in it

const renderer = new THREE.WebGLRenderer( {antialias: true} );
renderer.setSize( container.clientWidth, container.clientHeight );
// renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animationLoop );
container.appendChild( renderer.domElement );



const geometry = new THREE.BoxGeometry( 3, 3, 3 );
const material = new THREE.MeshBasicMaterial( { color: 0xff65d7 } );
const cube = new THREE.Mesh( geometry, material );



scene.add( cube );


camera.position.z = 5;



function animationLoop( t )
{
    cube.rotation.x = Math.sin( t/700 );
    cube.rotation.y = Math.sin( t/900 );

    //controls.update( );
	//light.position.copy( camera.position );
    renderer.render( scene, camera );
}



document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('src/darkviolet-dog-241640.hostingersite.com - Google Chrome 2024-06-07 14-36-15.mp4');
    video.addEventListener('mouseover', () => {
        video.play();
    });

    video.addEventListener('mouseout', () => {
        video.pause();
    });
});



