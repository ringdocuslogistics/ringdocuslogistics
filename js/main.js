document.addEventListener('DOMContentLoaded', function() {
    const blueBlock = document.querySelector('#blueblock');
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    let isHeaderHidden = false;

    // Проверяем, что header вообще существует (на всякий случай)
    if (!header) {
        console.error('Header not found! Check your HTML.');
        return;
    }

    // Анимация blueBlock
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                blueBlock.classList.add('animate');
                observer.unobserve(blueBlock);
            }
        });
    }, { threshold: 0.1 });

    if (blueBlock) observer.observe(blueBlock);

    // Кнопка "Наверх"
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.id = 'scroll-to-top';
    scrollToTopBtn.innerHTML = '<i class="fa fa-arrow-up"></i>';
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Управление header'ом при скролле
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;

        scrollToTopBtn.classList.toggle('visible', scrollPosition > 300);

        if (scrollPosition > lastScrollTop && scrollPosition > 100) {
            // Скрываем header
            header.style.transform = 'translateY(-100%)';
            header.style.opacity = '0';
            header.style.transition = 'transform 0.3s, opacity 0.3s';
            isHeaderHidden = true;
        } else if (scrollPosition < lastScrollTop) {
            // Показываем header
            header.style.transform = 'translateY(0)';
            header.style.opacity = '1';
            isHeaderHidden = false;
        }

        lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;
    });

    // Показываем header при наведении на верх экрана
    document.addEventListener('mousemove', (e) => {
        if (!isHeaderHidden) return; // Если header уже виден — ничего не делаем

        const mouseY = e.clientY;
        const triggerZoneHeight = 50; // Верхние 50px экрана

        if (mouseY < triggerZoneHeight) {
            header.style.transform = 'translateY(0)';
            header.style.opacity = '1';
            header.style.transition = 'transform 0.3s, opacity 0.3s';
            isHeaderHidden = false;
        }
    });
});

if (window.innerWidth <= 768) {
    document.getElementById('header-phone').href = "tel:+14069672318";
}

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target.toLocaleString();
        }
    });
}

// Запускать при появлении в viewport
new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) animateCounters();
}).observe(document.querySelector('.stats'));

document.addEventListener('DOMContentLoaded', function() {
    const quoteBtn = document.getElementById('quote-btn');
    
    // Добавляем анимацию пульсации при загрузке на 3 секунды
    quoteBtn.classList.add('pulse');
    setTimeout(() => {
        quoteBtn.classList.remove('pulse');
    }, 3000);
    
    // Пульсация при наведении (альтернативный вариант)
    quoteBtn.addEventListener('mouseenter', function() {
        this.classList.add('pulse');
    });
    
    quoteBtn.addEventListener('mouseleave', function() {
        this.classList.remove('pulse');
    });
});