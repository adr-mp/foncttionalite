document.querySelectorAll('.domain-card').forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                card.classList.add('transform', 'scale-105');
            });
            card.addEventListener('mouseleave', (e) => {
                card.classList.remove('transform', 'scale-105');
            });
        });


        function createShapes() {
            const background = document.getElementById('dynamic-background');
            const colors = [
                'rgba(102, 126, 234, 0.3)',   // Bleu violet
                'rgba(118, 75, 162, 0.3)',    // Violet profond
                'rgba(255, 255, 255, 0.1)',   // Blanc transparent
                'rgba(240, 128, 128, 0.2)',   // Corail léger
                'rgba(32, 178, 170, 0.2)'     // Turquoise
            ];

            for (let i = 0; i < 20; i++) {
                const shape = document.createElement('div');
                shape.classList.add('shape');

                // Taille aléatoire
                const size = Math.random() * 300 + 100;
                shape.style.width = `${size}px`;
                shape.style.height = `${size}px`;

                // Position aléatoire
                shape.style.left = `${Math.random() * 100}%`;
                shape.style.top = `${Math.random() * 100}%`;

                // Couleur aléatoire
                shape.style.background = colors[Math.floor(Math.random() * colors.length)];

                // Animation
                shape.style.animationName = 'moveShape';
                shape.style.animationDuration = `${20 + Math.random() * 30}s`;
                shape.style.animationIterationCount = 'infinite';
                shape.style.animationTimingFunction = 'ease-in-out';

                background.appendChild(shape);
            }
        }

        // Initialiser au chargement
        window.addEventListener('load', createShapes);
        
        
        