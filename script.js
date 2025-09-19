// script.js

// ---- Hamburger menu ----
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".main-nav");
if (hamburger) {
  hamburger.addEventListener("click", () => {
    const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
    hamburger.setAttribute("aria-expanded", !expanded);
    nav.classList.toggle("open");
  });
}

// ---- Tabs for Plans ----
const tabs = document.querySelectorAll(".tab");
const panes = document.querySelectorAll(".tabpane");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // deactivate all
    tabs.forEach(t => t.classList.remove("active"));
    panes.forEach(p => p.classList.remove("active"));

    // activate clicked
    tab.classList.add("active");
    const target = document.getElementById(tab.dataset.tab);
    if (target) target.classList.add("active");
  });
});

// ---- FOMO countdown ----
function startCountdown(duration, display) {
  let timer = duration, hours, minutes, seconds;
  setInterval(() => {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = hours + ":" + minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.addEventListener("DOMContentLoaded", () => {
  const countdownEl = document.getElementById("countdown");
  if (countdownEl) {
    const threeHours = 60 * 60 * 3 + 45 * 60; // 3h 45min
    startCountdown(threeHours, countdownEl);
  }

  // Fake slots left
  const slotsEl = document.getElementById("slots-left");
  if (slotsEl) {
    let slots = 5;
    setInterval(() => {
      if (slots > 1) {
        slots--;
        slotsEl.textContent = slots;
      }
    }, 60000);
  }
});
