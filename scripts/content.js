function removeVerificationBox() {
  const interval = setInterval(() => {
    const box = document.querySelector(
      '[aria-label="Obter verificação"]'
    ).parentElement;
    if (box) {
      box.remove();
      clearInterval(interval);
      return;
    }
  }, 1000);
}
removeVerificationBox();
