document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');
    const registrationForm = document.getElementById('registration-form');
    const studentsTableBody = document.querySelector('#students-table tbody');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');

            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            sections.forEach(section => {
                if (section.id === target) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('student-name').value;
        const email = document.getElementById('student-email').value;
        const phone = document.getElementById('student-phone').value;
        const course = document.getElementById('student-course').value;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${course}</td>
            <td><button class="delete-btn">Sil</button></td>
        `;
        studentsTableBody.appendChild(row);

        registrationForm.reset();
    });

    studentsTableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.parentElement.remove();
        }
    });
});