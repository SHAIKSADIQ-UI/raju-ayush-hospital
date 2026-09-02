/**
 * WH Healthcare - Three.js 3D Background Scenes
 * DNA Helix (Stats) + Leaf Particles (Doctor Profile)
 * Lazy-loaded with IntersectionObserver
 */
(function () {
    'use strict';

    if (typeof THREE === 'undefined') {
        console.warn('Three.js not loaded - skipping 3D scenes.');
        return;
    }

    // =====================================================
    // SCENE MANAGER - Lazy init + pause/resume
    // =====================================================
    var scenes = {};

    function createRenderer(canvas) {
        var renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true,
            powerPreference: 'low-power'
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        return renderer;
    }

    function resizeRenderer(renderer, container) {
        var w = container.clientWidth;
        var h = container.clientHeight;
        renderer.setSize(w, h);
        return { w: w, h: h };
    }

    // =====================================================
    // 1. DNA HELIX - Stats Counter Background
    // =====================================================
    function initDNAHelix() {
        var container = document.querySelector('#three-stats');
        if (!container) return;

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 100);
        camera.position.set(0, 0, 20);

        var renderer = createRenderer(container);
        var size = resizeRenderer(renderer, container);

        // DNA helix particles
        var helixGroup = new THREE.Group();
        scene.add(helixGroup);

        var particleCount = 200;
        var positions = new Float32Array(particleCount * 3);
        var colors = new Float32Array(particleCount * 3);
        var helixRadius = 4;
        var helixHeight = 30;

        for (var i = 0; i < particleCount; i++) {
            var t = (i / particleCount) * Math.PI * 6;
            var y = (i / particleCount) * helixHeight - helixHeight / 2;
            var strand = i % 2 === 0 ? 1 : -1;

            positions[i * 3] = Math.cos(t) * helixRadius * strand;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = Math.sin(t) * helixRadius * strand;

            // Green-teal gradient
            var green = 0.4 + Math.random() * 0.3;
            colors[i * 3] = 0.1 + Math.random() * 0.1;
            colors[i * 3 + 1] = green;
            colors[i * 3 + 2] = 0.2 + Math.random() * 0.2;
        }

        var geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        var material = new THREE.PointsMaterial({
            size: 0.2,
            vertexColors: true,
            transparent: true,
            opacity: 0.35,
            blending: THREE.NormalBlending,
            depthWrite: false
        });

        var points = new THREE.Points(geometry, material);
        helixGroup.add(points);

        // Connecting lines between strands
        var linePositions = [];
        for (var j = 0; j < particleCount; j += 4) {
            var t1 = (j / particleCount) * Math.PI * 6;
            var y1 = (j / particleCount) * helixHeight - helixHeight / 2;
            linePositions.push(
                Math.cos(t1) * helixRadius, y1, Math.sin(t1) * helixRadius,
                -Math.cos(t1) * helixRadius, y1, -Math.sin(t1) * helixRadius
            );
        }

        var lineGeometry = new THREE.BufferGeometry();
        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
        var lineMaterial = new THREE.LineBasicMaterial({
            color: 0x16a34a,
            transparent: true,
            opacity: 0.08
        });
        var lines = new THREE.LineSegments(lineGeometry, lineMaterial);
        helixGroup.add(lines);

        var running = true;
        var clock = new THREE.Clock();

        function animate() {
            if (!running) return;
            requestAnimationFrame(animate);
            var elapsed = clock.getElapsedTime();
            helixGroup.rotation.y = elapsed * 0.15;
            helixGroup.rotation.x = Math.sin(elapsed * 0.1) * 0.1;
            renderer.render(scene, camera);
        }

        scenes.dna = {
            start: function () { running = true; animate(); },
            stop: function () { running = false; },
            resize: function () {
                size = resizeRenderer(renderer, container);
                camera.aspect = size.w / size.h;
                camera.updateProjectionMatrix();
            }
        };

        return scenes.dna;
    }

    // =====================================================
    // 2. LEAF PARTICLES - Doctor Profile Background
    // =====================================================
    function initLeafParticles() {
        var container = document.querySelector('#three-doctor');
        if (!container) return;

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
        camera.position.z = 30;

        var renderer = createRenderer(container);
        var size = resizeRenderer(renderer, container);

        // Leaf particles
        var leafCount = 80;
        var positions = new Float32Array(leafCount * 3);
        var velocities = [];
        var sizes = new Float32Array(leafCount);

        for (var i = 0; i < leafCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 40;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
            velocities.push({
                x: (Math.random() - 0.5) * 0.02,
                y: -0.01 - Math.random() * 0.03,
                rotSpeed: Math.random() * 0.02
            });
            sizes[i] = 0.2 + Math.random() * 0.4;
        }

        var geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        var material = new THREE.PointsMaterial({
            color: 0x16a34a,
            size: 0.3,
            transparent: true,
            opacity: 0.25,
            blending: THREE.NormalBlending,
            depthWrite: false
        });

        var particles = new THREE.Points(geometry, material);
        scene.add(particles);

        var running = true;

        function animate() {
            if (!running) return;
            requestAnimationFrame(animate);

            var pos = geometry.attributes.position.array;
            for (var i = 0; i < leafCount; i++) {
                pos[i * 3] += velocities[i].x + Math.sin(Date.now() * 0.001 + i) * 0.005;
                pos[i * 3 + 1] += velocities[i].y;
                pos[i * 3 + 2] += Math.sin(Date.now() * 0.0005 + i * 0.5) * 0.005;

                // Reset when falling below
                if (pos[i * 3 + 1] < -20) {
                    pos[i * 3 + 1] = 20;
                    pos[i * 3] = (Math.random() - 0.5) * 40;
                }
            }
            geometry.attributes.position.needsUpdate = true;
            particles.rotation.y += 0.001;
            renderer.render(scene, camera);
        }

        scenes.leaves = {
            start: function () { running = true; animate(); },
            stop: function () { running = false; },
            resize: function () {
                size = resizeRenderer(renderer, container);
                camera.aspect = size.w / size.h;
                camera.updateProjectionMatrix();
            }
        };

        return scenes.leaves;
    }

    // =====================================================
    // LAZY LOADING - IntersectionObserver
    // =====================================================
    function setupLazyScenes() {
        var sceneMap = [
            { selector: '.ns-stats', init: initDNAHelix, key: 'dna' },
            { selector: '.ns-doctor', init: initLeafParticles, key: 'leaves' }
        ];

        sceneMap.forEach(function (cfg) {
            var section = document.querySelector(cfg.selector);
            if (!section) return;

            var initialized = false;

            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        if (!initialized) {
                            cfg.init();
                            initialized = true;
                        }
                        if (scenes[cfg.key]) scenes[cfg.key].start();
                    } else {
                        if (scenes[cfg.key]) scenes[cfg.key].stop();
                    }
                });
            }, { threshold: 0.1, rootMargin: '100px' });

            observer.observe(section);
        });
    }

    // Handle resize
    window.addEventListener('resize', function () {
        Object.keys(scenes).forEach(function (key) {
            if (scenes[key] && scenes[key].resize) scenes[key].resize();
        });
    });

    // Boot
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupLazyScenes);
    } else {
        setupLazyScenes();
    }
})();
