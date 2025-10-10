// FAQ SPECIFIC JAVASCRIPT

document.addEventListener('DOMContentLoaded', function() {
    // Аккордеон функциональность
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const toggle = faqItem.querySelector('.faq-toggle');
            
            // Закрываем другие элементы
            document.querySelectorAll('.faq-answer').forEach(item => {
                if (item !== answer) item.classList.remove('active');
            });
            
            document.querySelectorAll('.faq-toggle').forEach(item => {
                if (item !== toggle) item.textContent = '+';
            });
            
            // Переключаем текущий элемент
            answer.classList.toggle('active');
            toggle.textContent = answer.classList.contains('active') ? '−' : '+';
        });
    });

    // Авто-открытие первого вопроса
    const firstQuestion = document.querySelector('.faq-question');
    if (firstQuestion) firstQuestion.click();
});