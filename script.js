document.querySelectorAll('.question').forEach(question => {
  const correctOption = question.dataset.correct;

  question.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      const chosenOption = button.getAttribute('data-option');

      question.querySelectorAll('button').forEach(btn => {
        const option = btn.getAttribute('data-option');

        if (option === correctOption) {
          btn.style.backgroundColor = 'green';
          btn.style.color = 'white';
        } else if (option === chosenOption) {
          btn.style.backgroundColor = 'red';
          btn.style.color = 'white';
        }

        btn.disabled = true;
      });
    });
  });
});
