document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            icon.classList.replace('fa-moon-o', 'fa-lightbulb-o');
        } else {
            document.documentElement.classList.remove('dark');
            icon.classList.replace('fa-lightbulb-o', 'fa-moon-o');
        }
    }
    
    // Проверяем сохраненную тему
    const currentTheme = localStorage.getItem('theme') || 
                        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(currentTheme);
    
    // Обработчик клика
    themeToggle.addEventListener('click', function() {
        const isDark = document.documentElement.classList.toggle('dark');
        applyTheme(isDark ? 'dark' : 'light');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Анимация кнопки
        this.classList.add('theme-change-animation');
        setTimeout(() => {
            this.classList.remove('theme-change-animation');
        }, 500);
    });
});
