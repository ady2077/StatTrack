// Initialize particles
particlesJS('particles-js', {
    particles: {
        number: { value: 90, density: { enable: true, value_area: 800 } },
        color: { value: '#00ced1' }, // Cyan particles
        shape: { type: 'edge' }, // Square-like edges for a techy feel
        opacity: { value: 0.7, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#00ced1', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2.5, direction: 'none', random: true }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' } },
        modes: { grab: { distance: 140, line_linked: { opacity: 0.7 } }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

function refreshStats() {
    const cpu = Math.floor(Math.random() * 100); // Fake CPU % (0-100)
    const memory = Math.floor(Math.random() * 8000) + 2000; // Fake memory MB (2000-10000)

    document.getElementById('cpu').textContent = `${cpu}%`;
    document.getElementById('memory').textContent = `${memory} MB`;
}

// Initial stats on load
refreshStats();