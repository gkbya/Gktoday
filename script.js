document.querySelectorAll('.question').forEach(question => {
  const correctOption = question.dataset.correct;

  question.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const userChoice = btn.getAttribute('data-option');

      // Highlight correct option in green
      question.querySelectorAll('button').forEach(b => {
        const option = b.getAttribute('data-option');
        if (option === correctOption) {
          b.style.backgroundColor = 'green';
          b.style.color = 'white';
        } else if (option === userChoice) {
          b.style.backgroundColor = 'red';
          b.style.color = 'white';
        }
        b.disabled = true; // disable all buttons
      });
    });
  });
});
