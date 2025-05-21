document.querySelectorAll('.question').forEach(question => {
  const options = question.querySelectorAll('li');
  options.forEach(option => {
    option.addEventListener('click', () => {
      options.forEach(o => o.style.pointerEvents = "none");
      const isCorrect = option.getAttribute('data-correct') === 'true';
      option.classList.add(isCorrect ? 'correct' : 'incorrect');
    });
  });
});
