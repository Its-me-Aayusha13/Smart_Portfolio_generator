// FORM PAGE (index.html)
let profileImage = "";

const fileInput = document.getElementById("profileInput");
if (fileInput) {
  fileInput.addEventListener("change", function () {
    const reader = new FileReader();
    reader.onload = function () {
      profileImage = reader.result;
    };
    reader.readAsDataURL(this.files[0]);
  });
}

function generatePortfolio() {
  localStorage.setItem("name", document.getElementById("name").value);
  localStorage.setItem("bio", document.getElementById("bio").value);
  localStorage.setItem("skills", document.getElementById("skills").value);
  localStorage.setItem("projects", document.getElementById("projects").value);
  localStorage.setItem("github", document.getElementById("github").value);
  localStorage.setItem("linkedin", document.getElementById("linkedin").value);
  localStorage.setItem("email", document.getElementById("email").value);
  localStorage.setItem("phone", document.getElementById("phone").value);

  if (profileImage) {
    localStorage.setItem("profileImage", profileImage);
  }

  window.location.href = "portfolio.html";
}

// PORTFOLIO PAGE
if (window.location.pathname.includes("portfolio.html")) {

  document.getElementById("name").innerText = localStorage.getItem("name");
  document.getElementById("bio").innerText = localStorage.getItem("bio");

  // Skills
  const skills = localStorage.getItem("skills").split(",");
  const skillsDiv = document.getElementById("skills");

  skills.forEach(s => {
    const div = document.createElement("div");
    div.className = "skill";
    div.innerHTML = `<p>${s}</p><div class="skill-bar"></div>`;
    skillsDiv.appendChild(div);
  });

  // Projects
  const projects = localStorage.getItem("projects").split(",");
  const projectDiv = document.getElementById("projects");

  projects.forEach(p => {
    const div = document.createElement("div");
    div.className = "project";
    div.innerText = p;
    projectDiv.appendChild(div);
  });

  // Links
  document.getElementById("github").href = localStorage.getItem("github");
  document.getElementById("linkedin").href = localStorage.getItem("linkedin");

  // Profile Image
  const img = localStorage.getItem("profileImage");
  document.getElementById("profileImg").src = img || "https://via.placeholder.com/150";
}

// Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
const email = localStorage.getItem("email");
const phone = localStorage.getItem("phone");

if (email) {
  const emailEl = document.getElementById("email");
  emailEl.innerText = email;
  emailEl.href = "mailto:" + email;
}

if (phone) {
  const phoneEl = document.getElementById("phone");
  phoneEl.innerText = phone;
  phoneEl.href = "tel:" + phone;
}