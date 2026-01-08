        // Text size adjustment
        const textSizeSelect = document.getElementById('textSize');
        textSizeSelect.addEventListener('change', (e) => {
            document.body.className = document.body.className.replace(/\btext-(xs|sm|base|lg|xl)\b/g, '');
            document.body.classList.add(`text-${e.target.value}`);
        });
        
        // Dark mode toggle
        const darkModeToggle = document.getElementById('darkModeToggle');
        darkModeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
        });
        
        // Check for saved dark mode preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.documentElement.classList.add('dark');
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        }
        
        // Reduce motion
        const reduceMotionBtn = document.getElementById('reduceMotion');
        reduceMotionBtn.addEventListener('click', () => {
            alert("Motion reduction settings are now controlled by your operating system preferences. Please adjust in your system settings.");
        });
        
        // Form submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Thank you for your message! Our travel specialists will contact you soon.");
            contactForm.reset();
        });
        
        // Keyboard navigation enhancements
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.documentElement.classList.add('keyboard-navigation');
            }
        });
        
        document.addEventListener('mousedown', () => {
            document.documentElement.classList.remove('keyboard-navigation');
        });