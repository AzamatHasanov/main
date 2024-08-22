document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-item');
    const sections = document.querySelectorAll('.form-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');

            tabs.forEach(item => item.classList.remove('active'));
            tab.classList.add('active');

            sections.forEach(section => {
                if (section.id === target) {
                    section.classList.add('active');
                    section.classList.remove('inactive');
                } else {
                    section.classList.add('inactive');
                    section.classList.remove('active');
                }
            });
        });
    });

    // Handle form submissions
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Giriş formu göndərildi!');
    });

    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Qeydiyyat formu göndərildi!');
    });
});