const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxrEEe3-z7xX3EF1BvV1m03IZYNexiIFPDl4yUaaTHQoLymiKcPKGqH1JH-Vqu7jdpr/exec";

document.getElementById("signup").addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailEl = document.getElementById("email");
  const msg = document.getElementById("msg");
  const email = emailEl.value.trim();

  msg.textContent = "Submitting…";

  try {
    await fetch(ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    msg.textContent = "Thanks — you’re on the list.";
    emailEl.value = "";
  } catch {
    msg.textContent = "Something went wrong.";
  }
});
