// Countdown timer reset daily
function startCountdown() {
  const countdownEl = document.getElementById("countdown");
  const now = new Date();
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  let distance = end - now;

  setInterval(() => {
    if (distance <= 0) distance = 24 * 60 * 60 * 1000;
    const h = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const m = Math.floor((distance / (1000 * 60)) % 60);
    const s = Math.floor((distance / 1000) % 60);
    countdownEl.innerText = `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    distance -= 1000;
  }, 1000);
}
startCountdown();

// Stock left randomize
document.getElementById("slots-left").innerText =
  Math.floor(Math.random() * 3) + 3;

// Tab switch
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});
