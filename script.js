// === Login Modal ===
const openModal = document.getElementById("openLoginModal")
const closeModal = document.getElementById("closeLoginModal")
const modal = document.getElementById("loginModal")

openModal.addEventListener("click", () => {
  modal.classList.add("show")
})

closeModal.addEventListener("click", () => {
  modal.classList.remove("show")
})

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show")
  }
})

// === Login Logic ===
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault()
  const username = document.getElementById("username").value.trim()
  const password = document.getElementById("password").value.trim()
  const message = document.getElementById("loginMessage")

  if (username === "oddsheep" && password === "secret123") {
    message.style.color = "green"
    message.textContent = "Login successful!"
    setTimeout(() => {
      modal.classList.remove("show")
      message.textContent = ""
      this.reset()
    }, 1000)
  } else {
    message.style.color = "red"
    message.textContent = "Invalid credentials."
  }
})

// === Sign-Up Modal ===
const openSignup = document.getElementById("openSignupModal")
const closeSignup = document.getElementById("closeSignupModal")
const signupModal = document.getElementById("signupModal")

openSignup.addEventListener("click", () => {
  signupModal.classList.add("show")
})

closeSignup.addEventListener("click", () => {
  signupModal.classList.remove("show")
})

window.addEventListener("click", (e) => {
  if (e.target === signupModal) {
    signupModal.classList.remove("show")
  }
})

// === Sign-Up Logic ===
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault()
  const username = document.getElementById("signupUsername").value.trim()
  const email = document.getElementById("signupEmail").value.trim()
  const password = document.getElementById("signupPassword").value.trim()
  const message = document.getElementById("signupMessage")

  if (username && email && password.length >= 6) {
    message.style.color = "green"
    message.textContent = "Account created (demo only)!"
    setTimeout(() => {
      signupModal.classList.remove("show")
      message.textContent = ""
      this.reset()
    }, 1200)
  } else {
    message.style.color = "red"
    message.textContent = "Please fill all fields correctly."
  }
})
