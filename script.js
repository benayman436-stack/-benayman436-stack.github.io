
function saveData() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  // تحقق من أن الحقول ليست فارغة
  if (username === "" || password === "") {
    alert("يرجى إدخال اسم المستخدم وكلمة المرور");
    return;
  }
  const data = `اسم المستخدم: ${username}
كلمة المرور: ${password}`;
  const blob = new Blob([data], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "data.txt";
  document.body.appendChild(a);
  a.click();
  window.location.href = "page2.html";
}
