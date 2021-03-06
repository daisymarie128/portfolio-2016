import React from 'react';
import {Link} from 'react-router';
import Header from '../header/index.jsx';
import './index.scss';

var renderer, camera, scene, requestId;

const Home = React.createClass({

	getInitialState() {
    return {
        scene: null,
    };
	},

  componentDidMount(){
  	window.addEventListener('resize', this.handleResize);
  	var sideQuote = document.getElementsByClassName('side-quote-text')[0];
    sideQuote.innerHTML = "Daisy Smith Creative Coder";
   	this.initThree();
  },

  initThree() {

  	/* ----------------------------
		threejs code
		------------------------------------ */
		var self = this;
		var container,
		    composer,
		    color,
		    geometry,
		    material,
		    amount,
		    cooordinates,
		    object,
		    sphere,
		    glitchPass,
		    light;
		var uniforms;

		init();
		animate();

		function init() {

		  // set up my sphere coordinates
		  cooordinates = [
		    {
		      x: 0,
		      y: -10,
		      z: 30
		    }
		  ];

		    container = document.getElementById( 'home-page' );
		    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 100000 );
		    camera.position.z = 400;
		    scene = new THREE.Scene();
		    scene.fog = new THREE.Fog( 0x000000, 1, 1000 );

		    renderer = new THREE.WebGLRenderer();
		    renderer.setPixelRatio( window.devicePixelRatio );
		    renderer.setSize(window.innerWidth, window.innerHeight);

		    object = new THREE.Object3D();
		    color = new THREE.Color( 0xff0000 );
		    geometry = new THREE.SphereGeometry( 70, 100, 100 );

		    scene.add( new THREE.AmbientLight( 0x222222 ) );
		    light = new THREE.DirectionalLight( 0xffffff );
		    light.position.set( 1, 1, 1 );
		    scene.add( light );

		    var bumpTexture = new THREE.TextureLoader().load( "/assets/shader-images/water-texture.jpg" );
		    var colorTexture = new THREE.TextureLoader().load( "/assets/shader-images/rainbow.jpg" );

		    uniforms = {
		        u_time: { type: "f", value: 1.0 },
		        u_resolution: { type: "v2", value: new THREE.Vector2() },
		        u_mouse: { type: "v2", value: new THREE.Vector2() },
		        colorMap: {type: "t", value: colorTexture},
		        bumpTexture: {type: "t", value: bumpTexture}
		    };

		    var material = new THREE.ShaderMaterial( {
		        uniforms: uniforms,
		        vertexShader: document.getElementById( 'vertexshader' ).textContent,
		        fragmentShader: document.getElementById( 'fragmentshader' ).textContent
		    } );

		    material.uniforms.colorMap.value.wrapS = THREE.ClampToEdgeWrapping;
		    material.uniforms.colorMap.value.wrapT = THREE.ClampToEdgeWrapping;


		    sphere = new THREE.Mesh( geometry, material );

		    for (var i = 0; i < cooordinates.length; i++) {
	        var clone = sphere.clone();
	        clone.position.x = cooordinates[i].x;
	        clone.position.y = cooordinates[i].y;
	        clone.position.z = cooordinates[i].z;
	        clone.rotation.x = cooordinates[i].x;
	        clone.rotation.z = cooordinates[i].z;
	        var scale = clone.position.z * .09;
	        clone.scale.set( scale, scale, scale );
	        scene.add( clone );
		    };

		    renderer.setClearColor(0xffffff, 1);


		    composer = new THREE.EffectComposer( renderer );
		    composer.addPass( new THREE.RenderPass( scene, camera ) );
		    glitchPass = new THREE.GlitchPass();
		    glitchPass.renderToScreen = true;
		    composer.addPass( glitchPass );

		    container.appendChild( renderer.domElement );
		}

		function onWindowResize( event ) {
		    renderer.setSize( window.innerWidth, window.innerHeight );
		}

		var direction = 'up';
		function animate() {
		    if (direction == 'down') {
		        if (uniforms.u_time.value <= 0) {
		            direction = 'up';
		        }
		        uniforms.u_time.value -= 0.05;
		    } else if (direction == 'up') {
		        if (uniforms.u_time.value > 30) {
		            direction = 'down';
		        }
		        uniforms.u_time.value += 0.05;
		    }
		    uniforms.u_resolution.value.x = renderer.domElement.width;
		    uniforms.u_resolution.value.y = renderer.domElement.height;

		    for (var i = 0; i < scene.children.length; i++) {
		        scene.children[i].rotation.x += 0.005;
		        scene.children[i].rotation.y += 0.005;
		    };

		    requestId = requestAnimationFrame(animate);
		    render();
		}

		function render() {
	    composer.render();
		}
  },

  componentWillUnmount() {
  	cancelAnimationFrame(requestId);
    // scene.dispose();
  },

  handleResize() {
	  renderer.setSize(window.innerWidth, window.innerHeight);
	  camera.aspect = window.innerWidth / window.innerHeight;
	  camera.updateProjectionMatrix();

  },

  render() {
    return <div id="home-page">
			<h4>DEVELOPER<br/>ANIMATOR<br/>FOOL</h4>
    </div>;
  }
});

export default Home;
