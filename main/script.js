document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Set initial theme and button text
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleButton.textContent = '🌜'; // Light Moon
    } else {
        document.body.classList.remove('dark-mode');
        themeToggleButton.textContent = '🌞'; // Dark Sun
    }

    themeToggleButton.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            themeToggleButton.textContent = '🌞'; // Dark Sun
        } else {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            themeToggleButton.textContent = '🌜'; // Light Moon
        }
    });

    // Toggle section content
    document.querySelectorAll('.section-heading').forEach(heading => {
        heading.addEventListener('click', () => {
            const content = heading.nextElementSibling;
            content.classList.toggle('show');
        });
    });
});
