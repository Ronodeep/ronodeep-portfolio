document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Animations (.fade-in)
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const elementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        elementObserver.observe(el);
    });

    // 2. Subtly parallax the offset-code block
    const offsetCodeBlocks = document.querySelectorAll('.offset-code');
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.scrollY;
                offsetCodeBlocks.forEach(block => {
                    const speed = 0.05;
                    const yPos = -(scrolled * speed);
                    if(window.innerWidth > 1024) {
                       block.style.transform = `translateX(-40px) translateY(calc(20px + ${yPos}px))`;
                    } else {
                       block.style.transform = `translateX(0) translateY(calc(-20px + ${yPos}px))`;
                    }
                });
                ticking = false;
            });
            ticking = true;
        }
    });

    // 3. Modal Logic for Experiences
    const experienceCards = document.querySelectorAll('.trigger-modal');
    const modalOverlay = document.getElementById('experience-modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.querySelector('.modal-close');

    function openModal(htmlContent) {
        modalBody.innerHTML = htmlContent;
        modalOverlay.classList.add('active');
        document.body.classList.add('modal-open');
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.classList.remove('modal-open');
    }

    experienceCards.forEach(card => {
        card.addEventListener('click', () => {
            const hiddenData = card.querySelector('.modal-data');
            if (hiddenData) {
                openModal(hiddenData.innerHTML);
            }
        });
    });

    // Close on X click
    modalClose.addEventListener('click', closeModal);

    // Close on background click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
});
