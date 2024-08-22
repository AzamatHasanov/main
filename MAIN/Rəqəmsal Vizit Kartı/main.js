document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const quizResult = document.getElementById('quiz-result');
    const submitQuizButton = document.getElementById('submit-quiz');

    const surveyForm = document.getElementById('survey-form');
    const surveyResult = document.getElementById('survey-result');

    // Quiz data
    const questions = [{
            question: "HTML nədir?",
            options: ["Hypertext Markup Language", "High-level Text Markup Language", "Hypertext Machine Language"],
            answer: "Hypertext Markup Language"
        },
        {
            question: "CSS nədir?",
            options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
            answer: "Cascading Style Sheets"
        },
        {
            question: "JavaScript hansı məqsədlər üçün istifadə olunur?",
            options: ["Veb səhifələrin dinamikliyini artırmaq", "Şəkil redaktə etmək", "Müəyyən formatlı sənədləri çap etmək"],
            answer: "Veb səhifələrin dinamikliyini artırmaq"
        }
    ];

    function createQuiz() {
        quizContainer.innerHTML = '';
        questions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';

            const questionText = document.createElement('p');
            questionText.textContent = `${index + 1}. ${q.question}`;
            questionDiv.appendChild(questionText);

            q.options.forEach(option => {
                const optionInput = document.createElement('input');
                optionInput.type = 'radio';
                optionInput.name = `question-${index}`;
                optionInput.value = option;
                optionInput.id = `q${index}-o${option}`;
                questionDiv.appendChild(optionInput);

                const optionLabel = document.createElement('label');
                optionLabel.htmlFor = optionInput.id;
                optionLabel.textContent = option;
                questionDiv.appendChild(optionLabel);

                questionDiv.appendChild(document.createElement('br'));
            });

            quizContainer.appendChild(questionDiv);
        });
    }

    function checkAnswers() {
        let score = 0;
        questions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
            if (selectedOption && selectedOption.value === q.answer) {
                score++;
            }
        });
        quizResult.textContent = `Sizin bal: ${score}/${questions.length}`;
        quizResult.classList.remove('hidden');
    }

    function handleSurveySubmit(event) {
        event.preventDefault();
        const name = event.target.name.value;
        const age = event.target.age.value;
        const feedback = event.target.feedback.value;

        surveyResult.innerHTML = `
            <h3>Təşəkkür edirik, ${name}!</h3>
            <p>Yaşınız: ${age}</p>
            <p>Fikirləriniz: ${feedback}</p>
        `;
        surveyResult.classList.remove('hidden');
    }

    createQuiz();

    submitQuizButton.addEventListener('click', checkAnswers);

    surveyForm.addEventListener('submit', handleSurveySubmit);
});