document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.chat-input');
    const hero = document.getElementById('hero-section');
    const sendBtn = document.querySelector('.btn-send');
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    // Subtle transition effect when focused on chat
    if(input && hero) {
        input.addEventListener('focus', () => {
            hero.style.opacity = '0.7';
            hero.style.transform = 'translateY(-10px)';
        });

        input.addEventListener('blur', () => {
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        });

        // Enter key press simulation
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && input.value.trim() !== '') {
                const val = input.value;
                input.value = '';
                console.log('Sending message:', val);
                // Add active glow effect to send button
                if(sendBtn) {
                    sendBtn.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        sendBtn.style.transform = 'scale(1)';
                    }, 100);
                }
            }
        });
    }

    // Sidebar mobile toggle
    if(menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });

        // Close sidebar if clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 1024) {
                if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                    sidebar.classList.remove('open');
                }
            }
        });
    }
});
