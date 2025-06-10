document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('submit-btn');
  const resultBox = document.getElementById('result');
  const scoreText = document.getElementById('score');

  submitBtn.addEventListener('click', () => {
    const form = document.getElementById('quiz-form');
    const answers = new FormData(form);
    let score = 0;
    let total = 4; // 문제 수

    for (let [key, value] of answers.entries()) {
      score += Number(value);
    }

    resultBox.style.display = 'block';
    scoreText.textContent = `당신의 점수는 ${score}점 / ${total}점 입니다.`;

    // 제출 후 버튼 비활성화
    submitBtn.disabled = true;
    submitBtn.textContent = '제출 완료';
  });
});
