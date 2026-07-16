(() => {
  const PASSWORD = "12345";
  const STORAGE_KEY = "home_video_archive_unlocked";
  const panel = document.getElementById("videoLock");
  const archive = document.getElementById("videoArchive");
  const input = document.getElementById("videoPassword");
  const button = document.getElementById("videoUnlockButton");
  const error = document.getElementById("videoError");

  if (!panel || !archive || !input || !button || !error) return;

  function reveal() {
    panel.hidden = true;
    archive.hidden = false;
    sessionStorage.setItem(STORAGE_KEY, "1");
  }

  function check() {
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

  button.addEventListener("click", check);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") check();
  });
})();
