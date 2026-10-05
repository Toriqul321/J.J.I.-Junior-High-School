// ====== OPTIONAL CENTRAL REGISTRATION ======
// For a real public registration system, paste your Google Apps Script/Webhook
// URL below. Leave it empty to use browser-only demo storage.
const REGISTRATION_ENDPOINT = "";

const form = document.getElementById("registrationForm");
const statusBox = document.getElementById("formStatus");
const countBox = document.getElementById("regCount");
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

function bnNumber(n) {
  const digits = "০১২৩৪৫৬৭৮৯";
  return String(n).replace(/\d/g, d => digits[d]);
}

function getLocalRegistrations() {
  try { return JSON.parse(localStorage.getItem("schoolReunionRegistrations") || "[]"); }
  catch { return []; }
}
function updateCount() {
  countBox.textContent = bnNumber(getLocalRegistrations().length);
}
updateCount();

menuBtn.addEventListener("click", () => mainNav.classList.toggle("show"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("show")));

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  data.createdAt = new Date().toISOString();

  statusBox.textContent = "রেজিস্ট্রেশন জমা হচ্ছে...";
  statusBox.style.color = "#0e7a59";

  try {
    if (REGISTRATION_ENDPOINT.trim()) {
      const res = await fetch(REGISTRATION_ENDPOINT, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Server rejected");
    }

    const all = getLocalRegistrations();
    all.push(data);
    localStorage.setItem("schoolReunionRegistrations", JSON.stringify(all));
    updateCount();
    form.reset();
    statusBox.textContent = "✓ আপনার রেজিস্ট্রেশন সফলভাবে গ্রহণ করা হয়েছে। ধন্যবাদ!";
  } catch (err) {
    statusBox.textContent = "দুঃখিত, রেজিস্ট্রেশন পাঠানো যায়নি। আবার চেষ্টা করুন।";
    statusBox.style.color = "#b3261e";
  }
});

// Gallery lightbox
const modal = document.getElementById("lightbox");
const modalImage = document.getElementById("modalImage");
document.querySelectorAll(".photo").forEach(btn => {
  btn.addEventListener("click", () => {
    modalImage.src = btn.dataset.src;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
}
document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
