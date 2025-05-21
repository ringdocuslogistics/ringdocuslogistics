document.addEventListener('DOMContentLoaded', function() {
    // Анимация появления карточек
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 500);
    });

    // Аккордеон для вакансий
    const positionHeaders = document.querySelectorAll('.position-header');
    positionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const card = this.parentElement;
            const details = card.querySelector('.position-details');
            const icon = this.querySelector('i');
            
            card.classList.toggle('active');
            if (card.classList.contains('active')) {
                details.style.maxHeight = details.scrollHeight + 'px';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                details.style.maxHeight = '0';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });

    // Параллакс эффект для hero-секции
    // const heroSection = document.querySelector('.career-hero');
    // if (heroSection) {
    //     window.addEventListener('scroll', function() {
    //         const scrollPosition = window.pageYOffset;
    //         heroSection.style.backgroundPositionY = scrollPosition * 0.1 + 'px';
    //     });
    // }
});
