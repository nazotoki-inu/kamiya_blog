(() => {
  const PASSWORD = "koichi0917";
  const STORAGE_KEY = "kamiya_locked_article_unlocked";
  const input = document.getElementById("passwordInput");
  const button = document.getElementById("unlockButton");
  const error = document.getElementById("errorMessage");
  const lockBox = document.getElementById("lockBox");
  const secretContent = document.getElementById("secretContent");

  if (!input || !button || !error || !lockBox || !secretContent) return;

  function reveal() {
    lockBox.hidden = true;
    secretContent.hidden = false;
    sessionStorage.setItem(STORAGE_KEY, "1");
  }

  function checkPassword() {
    if (input.value.trim() === PASSWORD) {
      error.textContent = "";
      reveal();
      return;
    }
    error.textContent = "パスワードが違います。";
    input.select();
  }

  if (sessionStorage.getItem(STORAGE_KEY) === "1") {
    reveal();
  } else {
    input.focus();
  }

  button.addEventListener("click", checkPassword);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") checkPassword();
  });
})();
