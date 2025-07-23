// Dark Mode
const toggleBtn = document.getElementById("toggle-mode");
const icon = toggleBtn.querySelector("i");

if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
}

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");

  icon.classList.toggle("fa-moon", !isDark);
  icon.classList.toggle("fa-sun", isDark);

  localStorage.setItem("dark-mode", isDark);
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); //

  // Get Values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || subject === "" || message === "") {
    alert("يرجى ملء جميع الحقول المطلوبة.");
    return;
  }

  // email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("يرجى إدخال بريد إلكتروني صالح.");
    return;
  }

  alert("تم إرسال النموذج بنجاح!");
});
