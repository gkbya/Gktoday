document.querySelectorAll('.question').forEach(question => {
  const correctOption = question.dataset.correct;

  question.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      const chosenOption = button.getAttribute('data-option');

      // Show all options: green if correct, red if selected wrong
      question.querySelectorAll('button').forEach(btn => {
        const opt = btn.getAttribute('data-option');

        if (opt === correctOption) {
          btn.style.backgroundColor = 'green';
          btn.style.color = 'white';
        } else if (opt === chosenOption) {
          btn.style.backgroundColor = 'red';
          btn.style.color = 'white';
        }

        btn.disabled = true;
      });
    });
  });
});
