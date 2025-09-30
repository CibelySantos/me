document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling para âncoras (navegação)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Rola suavemente até o elemento, considerando a altura do navbar fixo
                const offset = 90; // Ajuste conforme a altura do seu navbar
                const targetPosition = targetElement.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Exemplo: Destacar o link da navegação ao rolar
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    function highlightNavOnScroll() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // O 150 é um offset para que o link mude antes de a seção tocar o topo
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);
    highlightNavOnScroll(); // Chama no carregamento para a seção inicial
    
    // 3. Adicione o estilo 'active' para visualização do JS
    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = `
        .nav-links a.active {
            color: var(--primary-color) !important;
            border-bottom: 2px solid var(--primary-color);
            padding-bottom: 5px;
        }
    `;
    document.head.appendChild(styleSheet);
});