function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("errorMessage");
  const lockBox = document.getElementById("lockBox");
  const secretContent = document.getElementById("secretContent");

  const password = "19920525"; // 仮：神谷の誕生日

  if (input === password) {
    lockBox.style.display = "none";
    secretContent.style.display = "block";
  } else {
    error.textContent = "パスワードが違います。";
  }
}