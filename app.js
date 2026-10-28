/* ==========================================================
   MEDICONNECT — Fully Connected Interactive Website Logic
========================================================== */

const DOCTORS = [
    {
        id: "anjana",
        name: "Dr. Anjana Raj",
        specialty: "General Physician",
        hospital: "KMCT Hospital, Kuttippuram",
        rating: 4.8,
        reviews: 245,
        experience: "8+ years",
        fee: 500,
        qualifications: ["MBBS", "MD (General Medicine)", "Consultant"],
        about: "Dr. Anjana Raj focuses on preventive care, general medicine, and helping patients build healthier everyday habits. This sample profile is for a student website demonstration.",
        specialties: ["General Medicine", "Preventive Care", "Lifestyle Diseases"],
        photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=480&q=85"
    },
    {
        id: "faizal",
        name: "Dr. Faizal K",
        specialty: "Cardiologist",
        hospital: "Malabar Heart Centre",
        rating: 4.9,
        reviews: 186,
        experience: "10+ years",
        fee: 800,
        qualifications: ["MBBS", "MD", "DM Cardiology"],
        about: "Dr. Faizal K is presented here as a sample cardiology specialist profile for demonstrating doctor discovery and appointment selection.",
        specialties: ["Heart Health", "Preventive Cardiology", "Blood Pressure"],
        photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=480&q=85"
    },
    {
        id: "sameera",
        name: "Dr. Sameera V",
        specialty: "Dermatologist",
        hospital: "CarePlus Skin Clinic",
        rating: 4.7,
        reviews: 132,
        experience: "7+ years",
        fee: 600,
        qualifications: ["MBBS", "MD Dermatology"],
        about: "Dr. Sameera V is a fictional sample profile used to demonstrate the MEDICONNECT website interface and booking workflow.",
        specialties: ["Skin Care", "Acne Care", "Dermatology"],
        photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=480&q=85"
    },
    {
        id: "rahul",
        name: "Dr. Rahul Menon",
        specialty: "Pediatrician",
        hospital: "Little Steps Child Clinic",
        rating: 4.8,
        reviews: 164,
        experience: "9+ years",
        fee: 550,
        qualifications: ["MBBS", "MD Pediatrics"],
        about: "This sample pediatrician profile illustrates how families might browse doctors and select a consultation in a demo application.",
        specialties: ["Child Health", "Growth & Development", "Preventive Care"],
        photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=480&q=85"
    },
    {
        id: "meera",
        name: "Dr. Meera Nair",
        specialty: "General Physician",
        hospital: "WellSpring Medical Centre",
        rating: 4.6,
        reviews: 98,
        experience: "6+ years",
        fee: 450,
        qualifications: ["MBBS", "DNB"],
        about: "Dr. Meera Nair is a fictional sample profile included for browsing and filtering demonstrations.",
        specialties: ["General Medicine", "Wellness", "Preventive Care"],
        photo: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=480&q=85"
    },
    {
        id: "arjun",
        name: "Dr. Arjun Das",
        specialty: "Cardiologist",
        hospital: "Malabar Heart Centre",
        rating: 4.7,
        reviews: 111,
        experience: "11+ years",
        fee: 750,
        qualifications: ["MBBS", "MD", "DM Cardiology"],
        about: "This fictional sample doctor is included to make the website search, sorting, and appointment interactions demonstrable.",
        specialties: ["Heart Health", "Cardiology", "Preventive Care"],
        photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=480&q=85"
    }
];

const ARTICLES = [
    {
        id: "habits",
        category: "Wellbeing",
        title: "10 Simple Habits for a Healthier Life",
        desc: "Small, consistent daily choices can support your energy, sleep, and overall wellbeing.",
        date: "Oct 12, 2026",
        read: "5 min read",
        author: "MEDICONNECT Editorial Team",
        emoji: "🌿",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=720&q=80",
        sections: [
            {
                subhead: "1. The Power of Micro-Routines",
                body: "Health improvements rarely require dramatic life overhauls. Research shows that tiny, sustainable adjustments like drinking a glass of water first thing in the morning or taking a 10-minute walk after lunch deliver far greater long-term physical and mental benefits than sporadic extreme workouts."
            },
            {
                subhead: "2. Setting Your Internal Clock",
                body: "Exposing your eyes to natural morning sunlight within an hour of waking stabilizes your circadian rhythm. This promotes natural melatonin release at night, leading to deeper restorative sleep."
            },
            {
                subhead: "3. Actionable Checklist",
                body: "• Stay hydrated with 2-3 liters of fluids daily.<br>• Take 2-minute posture and eye breaks every hour.<br>• Unplug from digital screens 30 minutes before sleep."
            }
        ],
        takeaway: "Pick just one habit to practice consistently this week before layering on another."
    },
    {
        id: "nutrition",
        category: "Nutrition",
        title: "Everyday Foods for Balanced Nutrition",
        desc: "A practical introduction to building varied, balanced meals with familiar foods.",
        date: "Oct 08, 2026",
        read: "4 min read",
        author: "Clinical Nutrition Review",
        emoji: "🥗",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=720&q=80",
        sections: [
            {
                subhead: "The Balanced Plate Method",
                body: "A reliable visual guideline is the balanced plate rule: fill half your plate with colorful vegetables and salads, one quarter with lean protein (pulses, paneer, fish, or poultry), and one quarter with complex whole grains (brown rice, oats, whole wheat)."
            },
            {
                subhead: "Smart Snacking",
                body: "Replace packaged ultra-processed snacks with a handful of walnuts, almonds, roasted chana, or fresh seasonal fruit to maintain stable blood sugar levels through the day."
            }
        ],
        takeaway: "Focus on adding colorful fiber and clean protein rather than strictly counting calories."
    },
    {
        id: "movement",
        category: "Fitness",
        title: "Make Movement Part of Your Day",
        desc: "Simple ideas for adding comfortable movement to a busy routine.",
        date: "Oct 02, 2026",
        read: "6 min read",
        author: "Preventive Health Group",
        emoji: "🚶",
        image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=720&q=80",
        sections: [
            {
                subhead: "Overcoming Sedentary Hours",
                body: "Prolonged sitting slows blood circulation and puts strain on the lumbar spine. Incorporating brisk 5-minute movement sessions throughout your workday helps regulate glucose and boosts focus."
            },
            {
                subhead: "Low-Impact Cardio Strategies",
                body: "Brisk walking, stair climbing, and gentle cycling strengthen the cardiovascular system without placing excessive strain on joints. Aim for at least 150 minutes of moderate activity weekly."
            }
        ],
        takeaway: "Every minute of movement counts. Even short bouts of activity add up."
    },
    {
        id: "sleep",
        category: "Wellbeing",
        title: "A Calmer Evening for Better Sleep",
        desc: "Create a wind-down routine that helps you prepare for rest.",
        date: "Sep 25, 2026",
        read: "3 min read",
        author: "Sleep Hygiene Editorial",
        emoji: "🌙",
        image: "https://images.unsplash.com/photo-1511295742362-92c96b6d6f9a?auto=format&fit=crop&w=720&q=80",
        sections: [
            {
                subhead: "Optimizing Your Bedroom Environment",
                body: "Keep the bedroom cool, dark, and quiet. Dim overhead lights 1 hour before bed to signal your brain that it is time to transition toward rest."
            },
            {
                subhead: "Nighttime Wind-Down",
                body: "Swapping late-night smartphone feeds for 10 minutes of gentle stretching or journaling helps calm nervous system stimulation."
            }
        ],
        takeaway: "A restful tomorrow starts with an intentional routine tonight."
    },
    {
        id: "hydration",
        category: "Nutrition",
        title: "Hydration: Listen to Your Body",
        desc: "Learn a few practical ways to remember fluids through the day.",
        date: "Sep 19, 2026",
        read: "4 min read",
        author: "Wellness & Lifestyle Desk",
        emoji: "💧",
        image: "https://images.unsplash.com/photo-1532634896-26909d0d4b0c?auto=format&fit=crop&w=720&q=80",
        sections: [
            {
                subhead: "Recognizing Sub-Clinical Dehydration",
                body: "Mild dehydration frequently manifests as fatigue, brain fog, or headaches rather than overt thirst. Monitor your fluid intake, especially in warm climates or air-conditioned rooms."
            },
            {
                subhead: "Easy Fluid Habits",
                body: "Keep a reusable water bottle at your desk and infuse it with mint or lemon slices if you prefer subtle flavor."
            }
        ],
        takeaway: "Drink steadily across the day rather than chugging large amounts at once."
    },
    {
        id: "mindful",
        category: "Fitness",
        title: "Gentle Stretching for Screen Breaks",
        desc: "Use short, comfortable breaks to move after long periods of sitting.",
        date: "Sep 10, 2026",
        read: "3 min read",
        author: "Ergonomics Advisory",
        emoji: "🧘",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=720&q=80",
        sections: [
            {
                subhead: "Desk-Friendly Posture Resets",
                body: "Perform 10 shoulder rolls backward, gentle neck tilts side to side, and seated spinal twists. Breathe deeply and avoid forcing joints into painful ranges."
            }
        ],
        takeaway: "Taking 60 seconds to decompress relieves tension and sustains your productivity."
    }
];

const RECORDS = [
    {
        id: "r1",
        title: "Complete Blood Count (CBC)",
        type: "Reports",
        kind: "Diagnostic Lab Report",
        date: "Oct 18, 2026",
        icon: "▤",
        color: "blue",
        doctor: "Dr. Anjana Raj",
        facility: "KMCT Diagnostic Lab",
        findings: [
            { test: "Hemoglobin", value: "14.2", unit: "g/dL", range: "13.0 - 17.0", flag: "Normal" },
            { test: "Total WBC Count", value: "6,800", unit: "cells/mcL", range: "4,000 - 11,000", flag: "Normal" },
            { test: "Platelet Count", value: "245,000", unit: "/mcL", range: "150,000 - 450,000", flag: "Normal" },
            { test: "RBC Count", value: "4.9", unit: "million/mcL", range: "4.5 - 5.5", flag: "Normal" },
            { test: "Hematocrit (PCV)", value: "42.5", unit: "%", range: "40.0 - 50.0", flag: "Normal" }
        ],
        interpretation: "All tested parameters are well within biological reference intervals. Hydration and general indices are normal."
    },
    {
        id: "r2",
        title: "General Consultation & Rx",
        type: "Prescriptions",
        kind: "Digital Prescription",
        date: "Oct 05, 2026",
        icon: "✚",
        color: "mint",
        doctor: "Dr. Faizal K",
        facility: "Malabar Heart Centre",
        medications: [
            { name: "Multivitamin & Minerals", dose: "1 Tablet", frequency: "Once daily (Morning)", duration: "30 Days", instructions: "Take after breakfast with water" },
            { name: "Omega-3 Fish Oil 1000mg", dose: "1 Capsule", frequency: "Once daily (Night)", duration: "60 Days", instructions: "Take with food" }
        ],
        interpretation: "Follow up in 6 weeks. Continue balanced physical activity and low-sodium diet."
    },
    {
        id: "r3",
        title: "Annual Health Checkup",
        type: "History",
        kind: "Clinical Consultation Summary",
        date: "Sep 21, 2026",
        icon: "♡",
        color: "lilac",
        doctor: "Dr. Meera Nair",
        facility: "WellSpring Medical Centre",
        vitals: { bp: "118/76 mmHg", pulse: "72 bpm", bmi: "22.4", spo2: "99%" },
        interpretation: "General health is good. Advised routine physical activity and maintaining ergonomic posture while studying or working."
    }
];

const TIMES = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];

function readStorage(key, fallback) {
    try {
        const v = localStorage.getItem(key);
        return v ? JSON.parse(v) : fallback;
    } catch (e) {
        return fallback;
    }
}

function saveStorage() {
    try {
        localStorage.setItem("mediconnect-appointments", JSON.stringify(state.appointments));
        localStorage.setItem("mediconnect-favorites", JSON.stringify(state.favorites));
        localStorage.setItem("mediconnect-profile", JSON.stringify(state.profile));
    } catch (e) {
        console.warn("Storage quota exceeded", e);
    }
}

const defaultProfile = {
    name: "Sinan A.",
    email: "sinan@example.com",
    phone: "+91 98765 43210",
    bloodGroup: "O+",
    emergencyContact: "+91 98765 00000"
};

const state = {
    page: "home",
    doctorId: "anjana",
    specialty: "All",
    doctorQuery: "",
    sort: "recommended",
    articleCategory: "All",
    articleQuery: "",
    recordTab: "All",
    appointmentTab: "upcoming",
    selectedDate: null,
    selectedTime: null,
    consultation: "In-person",
    appointments: readStorage("mediconnect-appointments", [
        {
            id: "APT-2026-101",
            doctorId: "anjana",
            date: new Date(Date.now() + 86400000 * 2).toISOString().split("T")[0],
            time: "10:00 AM",
            consultation: "In-person",
            status: "Confirmed",
            reason: "Routine physical evaluation"
        }
    ]),
    favorites: readStorage("mediconnect-favorites", ["sameera", "anjana"]),
    profile: readStorage("mediconnect-profile", defaultProfile),
    toastTimer: null
};

function escapeHTML(s = "") {
    return String(s).replace(/[&<>"']/g, c => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }[c]));
}

function money(n) {
    return "₹" + Number(n).toLocaleString("en-IN");
}

function getDoctor(id = state.doctorId) {
    return DOCTORS.find(d => d.id === id) || DOCTORS[0];
}

function toast(message) {
    const el = document.getElementById("toast");
    if (!el) return;
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(() => el.classList.remove("show"), 2800);
}

function go(page) {
    const valid = ["home", "doctors", "profile", "appointments", "doctor-profile", "booking", "records", "articles"];
    if (!valid.includes(page)) page = "home";
    if (page === "doctor-profile" && !getDoctor(state.doctorId)) state.doctorId = DOCTORS[0].id;
    state.page = page;

    document.querySelectorAll(".page").forEach(p => p.classList.toggle("active", p.id === "page-" + page));
    document.querySelectorAll("[data-nav]").forEach(a => {
        a.classList.toggle("active", a.dataset.nav === page || ((page === "doctor-profile" || page === "booking") && a.dataset.nav === "doctors"));
    });

    const names = {
        home: "Home",
        doctors: "Find Doctor",
        profile: "My Profile",
        appointments: "Appointments",
        "doctor-profile": "Doctor Profile",
        booking: "Book Appointment",
        records: "Health Records",
        articles: "Health Articles"
    };
    const labelEl = document.getElementById("page-label");
    if (labelEl) labelEl.textContent = names[page] || "Home";

    const sidebar = document.querySelector(".sidebar");
    if (sidebar) sidebar.classList.remove("open");

    history.replaceState(null, "", "#" + page);
    window.scrollTo({ top: 0, behavior: "smooth" });
    renderAll();
}

function doctorCard(d) {
    const fav = state.favorites.includes(d.id);
    return `
    <article class="doctor-card">
      <div class="doctor-card-top">
        <img class="doctor-photo" src="${d.photo}" alt="${escapeHTML(d.name)}" loading="lazy" onerror="this.style.visibility='hidden'">
        <div class="doctor-info">
          <h3>${escapeHTML(d.name)}</h3>
          <p>${escapeHTML(d.specialty)}</p>
        </div>
        <button class="favorite ${fav ? "saved" : ""}" data-favorite="${d.id}" aria-label="${fav ? "Remove from" : "Add to"} favorites">
          ${fav ? "♥" : "♡"}
        </button>
      </div>
      <div class="doctor-meta">
        <span class="rating">★ ${d.rating} <span class="muted">(${d.reviews})</span></span>
        <span class="available">Available today</span>
      </div>
      <p class="doctor-hospital">⌖ ${escapeHTML(d.hospital)}</p>
      <div class="doctor-card-actions">
        <strong>${money(d.fee)} <span class="muted small">/ visit</span></strong>
        <button class="btn btn-outline" data-view-doctor="${d.id}">View profile →</button>
      </div>
    </article>
  `;
}

function renderDoctors() {
    let docs = DOCTORS.filter(d => {
        let matchesSpecialty = true;
        if (state.specialty === "Saved") {
            matchesSpecialty = state.favorites.includes(d.id);
        } else if (state.specialty !== "All") {
            matchesSpecialty = d.specialty === state.specialty;
        }
        const q = state.doctorQuery.toLowerCase();
        const matchesQuery = `${d.name} ${d.specialty} ${d.hospital}`.toLowerCase().includes(q);
        return matchesSpecialty && matchesQuery;
    });

    if (state.sort === "rating") docs.sort((a, b) => b.rating - a.rating);
    if (state.sort === "name") docs.sort((a, b) => a.name.localeCompare(b.name));

    const listEl = document.getElementById("doctor-list");
    if (listEl) listEl.innerHTML = docs.map(doctorCard).join("");

    const resCount = document.getElementById("doctor-result-count");
    if (resCount) resCount.textContent = `Showing ${docs.length} doctor${docs.length === 1 ? "" : "s"}`;

    const emptyEl = document.getElementById("doctor-empty");
    if (emptyEl) emptyEl.classList.toggle("hidden", docs.length > 0);
}

function renderHome() {
    const homeDocs = document.getElementById("home-doctors");
    if (homeDocs) homeDocs.innerHTML = DOCTORS.slice(0, 3).map(doctorCard).join("");
}

function renderDoctorProfile() {
    const d = getDoctor();
    const container = document.getElementById("doctor-profile-content");
    if (!container) return;

    container.innerHTML = `
    <div class="doctor-profile-hero">
      <img class="doctor-profile-photo" src="${d.photo}" alt="${escapeHTML(d.name)}" onerror="this.style.visibility='hidden'">
      <div class="doctor-profile-details">
        <span class="eyebrow">DOCTOR PROFILE</span>
        <h1>${escapeHTML(d.name)}</h1>
        <div class="specialty">${escapeHTML(d.specialty)}</div>
        <div class="profile-rating">★ ${d.rating} <span class="muted">· ${d.reviews} patient reviews (sample)</span></div>
        <div class="profile-facts">
          <div><strong>${escapeHTML(d.experience)}</strong><small>Experience</small></div>
          <div><strong>${escapeHTML(d.hospital)}</strong><small>Hospital / clinic</small></div>
          <div><strong>${money(d.fee)}</strong><small>Demo consultation fee</small></div>
        </div>
        <div class="tag-row">${d.qualifications.map(q => `<span class="tag">${escapeHTML(q)}</span>`).join("")}</div>
        <button class="btn btn-primary" data-book-doctor="${d.id}">Book appointment →</button>
      </div>
    </div>
    <div class="profile-content-grid">
      <div class="card content-card">
        <h2>About the doctor</h2>
        <p>${escapeHTML(d.about)}</p>
      </div>
      <div class="card content-card">
        <h2>Areas of focus</h2>
        <div class="specialty-list">${d.specialties.map(s => `<span>${escapeHTML(s)}</span>`).join("")}</div>
      </div>
    </div>
    <div class="profile-book-bar">
      <div>
        <strong>Ready to schedule your visit?</strong>
        <small>Choose an available date and time to continue.</small>
      </div>
      <button class="btn btn-primary" data-book-doctor="${d.id}">Book appointment · ${money(d.fee)}</button>
    </div>
  `;
}

function dateOptions() {
    const list = [];
    for (let i = 1; i <= 5; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        list.push(date);
    }
    return list;
}

function dateLabel(date) {
    return date.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });
}

function dateISO(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function renderBooking() {
    const d = getDoctor();
    const dates = dateOptions();
    if (!state.selectedDate) state.selectedDate = dateISO(dates[0]);
    if (!state.selectedTime) state.selectedTime = TIMES[0];

    const sumEl = document.getElementById("booking-doctor-summary");
    if (sumEl) {
        sumEl.innerHTML = `
      <div class="summary-doctor">
        <img src="${d.photo}" alt="">
        <div>
          <strong>${escapeHTML(d.name)}</strong>
          <small>${escapeHTML(d.specialty)}</small>
          <small>★ ${d.rating} · ${escapeHTML(d.hospital)}</small>
        </div>
      </div>
    `;
    }

    const dateGrid = document.getElementById("date-grid");
    if (dateGrid) {
        dateGrid.innerHTML = dates.map(dt => {
            const iso = dateISO(dt);
            return `
        <button class="date-option ${state.selectedDate === iso ? "selected" : ""}" data-date="${iso}">
          <span>${dt.toLocaleDateString("en-IN", { weekday: "short" })}</span>
          <strong>${dt.getDate()}</strong>
          <small>${dt.toLocaleDateString("en-IN", { month: "short" })}</small>
        </button>
      `;
        }).join("");
    }

    const timeGrid = document.getElementById("time-grid");
    if (timeGrid) {
        timeGrid.innerHTML = TIMES.map(t => `
      <button class="time-option ${state.selectedTime === t ? "selected" : ""}" data-time="${t}">${t}</button>
    `).join("");
    }

    const sumDate = document.getElementById("summary-date");
    if (sumDate) sumDate.textContent = state.selectedDate ? dateLabel(new Date(state.selectedDate + "T12:00:00")) : "Select a date";

    const sumTime = document.getElementById("summary-time");
    if (sumTime) sumTime.textContent = state.selectedTime || "Select a time";

    const sumConsult = document.getElementById("summary-consult");
    if (sumConsult) sumConsult.textContent = state.consultation;

    const sumFee = document.getElementById("summary-fee");
    if (sumFee) sumFee.textContent = money(d.fee);

    const sumTotal = document.getElementById("summary-total");
    if (sumTotal) sumTotal.textContent = money(d.fee);

    document.querySelectorAll('input[name="consult"]').forEach(r => r.checked = r.value === state.consultation);
    document.querySelectorAll(".consult-option").forEach(el => el.classList.toggle("selected", el.querySelector("input").checked));

    const errEl = document.getElementById("booking-error");
    if (errEl) errEl.classList.add("hidden");
}

function renderAppointments() {
    const upcoming = state.appointments.filter(a => a.status !== "Cancelled" && a.status !== "Completed");
    const past = state.appointments.filter(a => a.status === "Cancelled" || a.status === "Completed");
    const list = state.appointmentTab === "upcoming" ? upcoming : past;

    const upCount = document.getElementById("upcoming-tab-count");
    if (upCount) upCount.textContent = upcoming.length;

    const apptCount = document.getElementById("appointment-count");
    if (apptCount) apptCount.textContent = upcoming.length;

    const apptEmpty = document.getElementById("appointment-empty");
    if (apptEmpty) apptEmpty.classList.toggle("hidden", list.length > 0);

    const apptList = document.getElementById("appointment-list");
    if (apptList) {
        apptList.innerHTML = list.map(a => {
            const d = getDoctor(a.doctorId);
            const dt = new Date(a.date + "T12:00:00");
            return `
        <article class="appointment-card">
          <div class="appointment-datebox">
            <span>${dt.toLocaleDateString("en-IN", { month: "short" })}</span>
            <strong>${dt.getDate()}</strong>
            <small>${dt.toLocaleDateString("en-IN", { weekday: "short" })}</small>
          </div>
          <div class="appointment-details">
            <h3>${escapeHTML(d.name)}</h3>
            <p>${escapeHTML(d.specialty)} · ${escapeHTML(d.hospital)}</p>
            <p>◷ ${escapeHTML(a.time)} · ${escapeHTML(a.consultation)}</p>
            <span class="appointment-badge">${escapeHTML(a.status || "Confirmed")} · Demo</span>
          </div>
          <div class="appointment-actions">
            <button class="btn btn-outline" data-appointment-detail="${a.id}">Details</button>
            ${a.status !== "Cancelled" && a.status !== "Completed" ? `<button class="btn btn-outline" data-cancel-appointment="${a.id}">Cancel</button>` : ""}
          </div>
        </article>
      `;
        }).join("");
    }

    document.querySelectorAll("#appointment-tabs .tab").forEach(t => t.classList.toggle("active", t.dataset.tab === state.appointmentTab));
}

function renderRecords() {
    const rows = RECORDS.filter(r => state.recordTab === "All" || r.type === state.recordTab);
    const recList = document.getElementById("record-list");
    if (recList) {
        recList.innerHTML = rows.map(r => `
      <article class="record-row">
        <span class="record-icon ${r.color}">${r.icon}</span>
        <div class="record-details">
          <strong>${escapeHTML(r.title)}</strong>
          <small>${escapeHTML(r.kind)} · ${escapeHTML(r.date)}</small>
        </div>
        <span class="record-type">${escapeHTML(r.type)}</span>
        <button class="btn btn-outline btn-small" data-record-detail="${r.id}">View</button>
      </article>
    `).join("");
    }

    document.querySelectorAll("#record-tabs .tab").forEach(t => t.classList.toggle("active", t.dataset.recordTab === state.recordTab));
}

function renderArticles() {
    const items = ARTICLES.filter(a => (state.articleCategory === "All" || a.category === state.articleCategory) && `${a.title} ${a.desc} ${a.category}`.toLowerCase().includes(state.articleQuery.toLowerCase()));
    const grid = document.getElementById("article-grid");
    if (grid) {
        grid.innerHTML = items.map(a => `
      <article class="article-card">
        <div class="article-image">
          <span class="article-emoji">${a.emoji}</span>
          <img src="${a.image}" alt="" loading="lazy" onerror="this.remove()">
        </div>
        <div class="article-body">
          <span class="article-category">${escapeHTML(a.category)}</span>
          <h3>${escapeHTML(a.title)}</h3>
          <p>${escapeHTML(a.desc)}</p>
          <div class="article-meta">
            <span>${escapeHTML(a.date)} · ${a.read}</span>
            <button class="text-link" data-article="${a.id}">Read more →</button>
          </div>
        </div>
      </article>
    `).join("");
    }

    const emptyEl = document.getElementById("article-empty");
    if (emptyEl) emptyEl.classList.toggle("hidden", items.length > 0);

    document.querySelectorAll("#article-filters .filter-chip").forEach(b => b.classList.toggle("selected", b.dataset.category === state.articleCategory));
}

function renderProfile() {
    const pAppt = document.getElementById("profile-appointment-count");
    if (pAppt) pAppt.textContent = state.appointments.length;

    const pRec = document.getElementById("profile-record-count");
    if (pRec) pRec.textContent = RECORDS.length;

    const pRecSum = document.getElementById("record-summary-count");
    if (pRecSum) pRecSum.textContent = RECORDS.length;

    const pDoc = document.getElementById("profile-doctor-count");
    if (pDoc) pDoc.textContent = state.favorites.length;

    const name = state.profile.name || "Sin";
    const nameParts = name.trim().split(" ");
    const initials = nameParts.length > 1 ? (nameParts[0][0] + nameParts[1][0]).toUpperCase() : name.slice(0, 2).toUpperCase();

    const cardName = document.getElementById("profile-card-name");
    if (cardName) cardName.textContent = name;

    const cardEmail = document.getElementById("profile-card-email");
    if (cardEmail) cardEmail.textContent = `${state.profile.email || "demo@mediconnect.org"} · ${state.profile.bloodGroup || "O+"}`;

    const greetName = document.getElementById("home-greeting-name");
    if (greetName) greetName.textContent = nameParts[0];

    const navName = document.getElementById("nav-user-name");
    if (navName) navName.textContent = nameParts[0];

    const navAvatar = document.getElementById("nav-avatar");
    if (navAvatar) navAvatar.textContent = initials;

    const topAvatar = document.getElementById("top-avatar");
    if (topAvatar) topAvatar.textContent = initials;

    const cardAvatar = document.getElementById("profile-card-avatar");
    if (cardAvatar) cardAvatar.textContent = initials;
}

function renderAll() {
    renderHome();
    renderDoctors();
    renderDoctorProfile();
    renderBooking();
    renderAppointments();
    renderRecords();
    renderArticles();
    renderProfile();
}

function showModal(title, message, extra = "", action = "Continue", callback = () => closeModal()) {
    document.getElementById("modal-title").textContent = title;
    const msgEl = document.getElementById("modal-message");
    if (typeof message === "string") {
        msgEl.innerHTML = message;
    }
    document.getElementById("modal-extra").innerHTML = extra;
    const actBtn = document.getElementById("modal-action");
    actBtn.textContent = action;
    actBtn.onclick = callback;
    document.getElementById("modal-backdrop").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("modal-backdrop").classList.add("hidden");
}

function bookDoctor(id) {
    state.doctorId = id;
    state.selectedDate = null;
    state.selectedTime = null;
    state.consultation = "In-person";
    const reasonEl = document.getElementById("booking-reason");
    if (reasonEl) reasonEl.value = "";
    go("booking");
}

function confirmBooking() {
    const err = document.getElementById("booking-error");
    if (!state.selectedDate || !state.selectedTime) {
        if (err) {
            err.textContent = "Please select both a date and a time slot to continue.";
            err.classList.remove("hidden");
        }
        return;
    }
    const d = getDoctor();
    const reasonInput = document.getElementById("booking-reason");
    const appointment = {
        id: "apt-" + Date.now(),
        doctorId: d.id,
        date: state.selectedDate,
        time: state.selectedTime,
        consultation: state.consultation,
        reason: reasonInput ? reasonInput.value.trim() : "",
        status: "Confirmed",
        createdAt: new Date().toISOString()
    };
    state.appointments.unshift(appointment);
    saveStorage();
    renderAll();
    showModal(
        "Appointment confirmed!",
        `Your demo appointment with ${escapeHTML(d.name)} has been successfully booked.`,
        `<strong>${escapeHTML(dateLabel(new Date(appointment.date + "T12:00:00")))} · ${escapeHTML(appointment.time)}</strong><span>${escapeHTML(appointment.consultation)} consultation · ${money(d.fee)}</span><p style="margin:9px 0 0;color:#7b8b9b">This is a student demo. No hospital booking exists and no charges were made.</p>`,
        "View my appointments",
        () => {
            closeModal();
            go("appointments");
        }
    );
}

function articleModal(id) {
    const a = ARTICLES.find(x => x.id === id);
    if (!a) return;

    const content = `
    <div style="text-align: left; max-height: 60vh; overflow-y: auto; padding-right: 4px;">
      <img src="${a.image}" alt="" style="width: 100%; height: 160px; object-fit: cover; border-radius: 12px; margin-bottom: 12px;">
      <div style="font-size: 11px; font-weight: 700; color: #15558a; margin-bottom: 4px;">${escapeHTML(a.category)} · ${escapeHTML(a.read)}</div>
      <p style="font-size: 11px; color: #7b8b9b; margin: 0 0 12px;">By ${escapeHTML(a.author)} · ${escapeHTML(a.date)}</p>
      ${a.sections.map(s => `
        <h4 style="font-size: 13px; font-weight: 700; margin: 12px 0 4px; color: #103d65;">${escapeHTML(s.subhead)}</h4>
        <p style="font-size: 12px; line-height: 1.6; color: #486581; margin: 0 0 8px;">${s.body}</p>
      `).join("")}
      <div style="margin-top: 14px; background: #eaf5fc; padding: 10px 14px; border-radius: 8px; border-left: 3px solid #15558a;">
        <strong style="font-size: 11px; color: #103d65;">Key Takeaway:</strong>
        <p style="font-size: 11px; color: #334e68; margin: 2px 0 0;">${escapeHTML(a.takeaway)}</p>
      </div>
    </div>
  `;

    showModal(a.title, content, `<span>Educational content for student demonstration. Not formal clinical advice.</span>`, "Back to Articles");
}

function recordModal(id) {
    const r = RECORDS.find(x => x.id === id);
    if (!r) return;

    let body = "";
    if (r.findings) {
        body = `
      <div style="text-align: left; max-height: 60vh; overflow-y: auto;">
        <p style="font-size: 11px; color: #7b8b9b; margin-bottom: 10px;">Facility: <strong>${escapeHTML(r.facility)}</strong> · Consultant: <strong>${escapeHTML(r.doctor)}</strong></p>
        <table style="width: 100%; border-collapse: collapse; font-size: 11px;">
          <thead>
            <tr style="border-bottom: 1px solid #cbd5e1; text-align: left; color: #64748b;">
              <th style="padding: 6px 2px;">Test</th>
              <th style="padding: 6px 2px;">Result</th>
              <th style="padding: 6px 2px;">Reference</th>
              <th style="padding: 6px 2px;">Status</th>
            </tr>
          </thead>
          <tbody>
            ${r.findings.map(f => `
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 6px 2px; font-weight: 600;">${escapeHTML(f.test)}</td>
                <td style="padding: 6px 2px; color: #15558a; font-weight: 700;">${escapeHTML(f.value)} ${escapeHTML(f.unit)}</td>
                <td style="padding: 6px 2px; color: #64748b;">${escapeHTML(f.range)}</td>
                <td style="padding: 6px 2px;"><span style="background: #e6fffa; color: #234e52; padding: 2px 6px; border-radius: 8px; font-size: 9px;">${escapeHTML(f.flag)}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
        <p style="margin-top: 12px; font-size: 11px; background: #f8fafc; padding: 8px; border-radius: 6px; color: #475569;">
          <strong>Interpretation:</strong> ${escapeHTML(r.interpretation)}
        </p>
      </div>
    `;
    } else if (r.medications) {
        body = `
      <div style="text-align: left; max-height: 60vh; overflow-y: auto;">
        <p style="font-size: 11px; color: #7b8b9b; margin-bottom: 10px;">Doctor: <strong>${escapeHTML(r.doctor)}</strong> · Clinic: <strong>${escapeHTML(r.facility)}</strong></p>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${r.medications.map(m => `
            <div style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px 10px; background: #fff;">
              <strong style="color: #15558a; font-size: 12px;">💊 ${escapeHTML(m.name)}</strong>
              <div style="font-size: 11px; color: #475569; margin: 2px 0;">Dosage: ${escapeHTML(m.dose)} · ${escapeHTML(m.frequency)} (${escapeHTML(m.duration)})</div>
              <small style="color: #64748b;">${escapeHTML(m.instructions)}</small>
            </div>
          `).join("")}
        </div>
        <p style="margin-top: 12px; font-size: 11px; background: #f8fafc; padding: 8px; border-radius: 6px; color: #475569;">
          <strong>Physician Notes:</strong> ${escapeHTML(r.interpretation)}
        </p>
      </div>
    `;
    } else {
        body = `
      <div style="text-align: left;">
        <p style="font-size: 11px; color: #7b8b9b; margin-bottom: 8px;">Physician: <strong>${escapeHTML(r.doctor)}</strong> (${escapeHTML(r.facility)})</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
          <div style="background: #f8fafc; padding: 8px; border-radius: 6px; font-size: 11px;">Blood Pressure: <strong>${escapeHTML(r.vitals.bp)}</strong></div>
          <div style="background: #f8fafc; padding: 8px; border-radius: 6px; font-size: 11px;">Heart Rate: <strong>${escapeHTML(r.vitals.pulse)}</strong></div>
          <div style="background: #f8fafc; padding: 8px; border-radius: 6px; font-size: 11px;">BMI: <strong>${escapeHTML(r.vitals.bmi)}</strong></div>
          <div style="background: #f8fafc; padding: 8px; border-radius: 6px; font-size: 11px;">SpO2: <strong>${escapeHTML(r.vitals.spo2)}</strong></div>
        </div>
        <p style="font-size: 11px; color: #475569; background: #f8fafc; padding: 8px; border-radius: 6px;">
          <strong>Clinical Note:</strong> ${escapeHTML(r.interpretation)}
        </p>
      </div>
    `;
    }

    showModal(r.title, body, `<strong>${escapeHTML(r.kind)} · ${escapeHTML(r.date)}</strong><span>Sample record only; not a real patient document.</span>`, "Close");
}

function openEditProfile() {
    const formHtml = `
    <div style="text-align: left; display: flex; flex-direction: column; gap: 10px; margin-top: 6px;">
      <div>
        <label style="display: block; font-size: 11px; font-weight: 700; color: #334e68; margin-bottom: 3px;">Full Name</label>
        <input type="text" id="prof-name" value="${escapeHTML(state.profile.name)}" style="width: 100%; padding: 8px 10px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 12px;">
      </div>
      <div>
        <label style="display: block; font-size: 11px; font-weight: 700; color: #334e68; margin-bottom: 3px;">Email Address</label>
        <input type="email" id="prof-email" value="${escapeHTML(state.profile.email)}" style="width: 100%; padding: 8px 10px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 12px;">
      </div>
      <div>
        <label style="display: block; font-size: 11px; font-weight: 700; color: #334e68; margin-bottom: 3px;">Phone Number</label>
        <input type="tel" id="prof-phone" value="${escapeHTML(state.profile.phone)}" style="width: 100%; padding: 8px 10px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 12px;">
      </div>
      <div>
        <label style="display: block; font-size: 11px; font-weight: 700; color: #334e68; margin-bottom: 3px;">Blood Group</label>
        <select id="prof-blood" style="width: 100%; padding: 8px 10px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 12px;">
          ${["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(bg => `<option value="${bg}" ${state.profile.bloodGroup === bg ? "selected" : ""}>${bg}</option>`).join("")}
        </select>
      </div>
    </div>
  `;

    showModal("Edit Profile", formHtml, "", "Save Profile", () => {
        const nameVal = document.getElementById("prof-name")?.value.trim();
        const emailVal = document.getElementById("prof-email")?.value.trim();
        const phoneVal = document.getElementById("prof-phone")?.value.trim();
        const bloodVal = document.getElementById("prof-blood")?.value;

        if (!nameVal || !emailVal) {
            toast("Please enter a valid name and email.");
            return;
        }

        state.profile.name = nameVal;
        state.profile.email = emailVal;
        state.profile.phone = phoneVal;
        state.profile.bloodGroup = bloodVal;

        saveStorage();
        renderAll();
        closeModal();
        toast("Profile updated successfully!");
    });
}

function appointmentModal(id) {
    const a = state.appointments.find(x => x.id === id);
    if (!a) return;
    const d = getDoctor(a.doctorId);
    showModal(
        "Appointment details",
        `${escapeHTML(d.name)} · ${escapeHTML(d.specialty)}`,
        `<strong>${escapeHTML(dateLabel(new Date(a.date + "T12:00:00")))} at ${escapeHTML(a.time)}</strong><span>${escapeHTML(a.consultation)} · ${money(d.fee)} · ${escapeHTML(a.status)}</span><p style="margin:8px 0 0;color:#7b8b9b">Demo booking reference: ${escapeHTML(a.id)}</p>`,
        "Close"
    );
}

function toggleFavorite(id) {
    state.favorites = state.favorites.includes(id) ? state.favorites.filter(x => x !== id) : [...state.favorites, id];
    saveStorage();
    renderAll();
    toast(state.favorites.includes(id) ? "Doctor added to favorites" : "Doctor removed from favorites");
}

/* Event delegation */
document.addEventListener("click", e => {
    const t = e.target.closest("button,a");
    if (!t) return;

    if (t.matches("[data-go]")) {
        e.preventDefault();
        go(t.dataset.go);
        return;
    }
    if (t.matches("[data-view-doctor]")) {
        state.doctorId = t.dataset.viewDoctor;
        go("doctor-profile");
        return;
    }
    if (t.matches("[data-book-doctor]")) {
        bookDoctor(t.dataset.bookDoctor);
        return;
    }
    if (t.matches("[data-favorite]")) {
        toggleFavorite(t.dataset.favorite);
        return;
    }
    if (t.matches("[data-date]")) {
        state.selectedDate = t.dataset.date;
        renderBooking();
        return;
    }
    if (t.matches("[data-time]")) {
        state.selectedTime = t.dataset.time;
        renderBooking();
        return;
    }
    if (t.matches("[data-tab]")) {
        state.appointmentTab = t.dataset.tab;
        renderAppointments();
        return;
    }
    if (t.matches("[data-record-tab]")) {
        state.recordTab = t.dataset.recordTab;
        renderRecords();
        return;
    }
    if (t.matches("[data-category]")) {
        state.articleCategory = t.dataset.category;
        renderArticles();
        return;
    }
    if (t.matches("[data-specialty]")) {
        state.specialty = t.dataset.specialty;
        document.querySelectorAll("[data-specialty]").forEach(b => b.classList.toggle("selected", b === t));
        renderDoctors();
        return;
    }
    if (t.matches("[data-article]")) {
        articleModal(t.dataset.article);
        return;
    }
    if (t.matches("[data-record-detail]")) {
        recordModal(t.dataset.recordDetail);
        return;
    }
    if (t.matches("[data-appointment-detail]")) {
        appointmentModal(t.dataset.appointmentDetail);
        return;
    }
    if (t.matches("[data-cancel-appointment]")) {
        const id = t.dataset.cancelAppointment;
        showModal(
            "Cancel this appointment?",
            "This only changes the saved demo appointment. No hospital booking exists.",
            `<strong>Demo cancellation</strong><span>You can book another appointment any time.</span>`,
            "Cancel appointment",
            () => {
                const a = state.appointments.find(x => x.id === id);
                if (a) a.status = "Cancelled";
                saveStorage();
                closeModal();
                renderAll();
                toast("Demo appointment cancelled");
            }
        );
        return;
    }
});

document.getElementById("doctor-search")?.addEventListener("input", e => {
    state.doctorQuery = e.target.value;
    renderDoctors();
});
document.getElementById("search-button")?.addEventListener("click", () => renderDoctors());
document.getElementById("sort-doctors")?.addEventListener("change", e => {
    state.sort = e.target.value;
    renderDoctors();
});
document.getElementById("clear-search")?.addEventListener("click", () => {
    state.doctorQuery = "";
    state.specialty = "All";
    const searchInput = document.getElementById("doctor-search");
    if (searchInput) searchInput.value = "";
    document.querySelectorAll("[data-specialty]").forEach(b => b.classList.toggle("selected", b.dataset.specialty === "All"));
    renderDoctors();
});
document.getElementById("article-search")?.addEventListener("input", e => {
    state.articleQuery = e.target.value;
    renderArticles();
});

document.querySelectorAll('input[name="consult"]').forEach(r => {
    r.addEventListener("change", () => {
        state.consultation = r.value;
        renderBooking();
    });
});

document.getElementById("confirm-booking")?.addEventListener("click", confirmBooking);
document.getElementById("modal-close")?.addEventListener("click", closeModal);
document.getElementById("modal-backdrop")?.addEventListener("click", e => {
    if (e.target.id === "modal-backdrop") closeModal();
});
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
});
document.getElementById("mobile-menu")?.addEventListener("click", () => {
    document.querySelector(".sidebar")?.classList.toggle("open");
});

document.getElementById("edit-profile")?.addEventListener("click", openEditProfile);
document.getElementById("profile-details")?.addEventListener("click", openEditProfile);

document.getElementById("notifications-button")?.addEventListener("click", () => {
    showModal(
        "Notifications",
        "You are all caught up!",
        "<strong>2 Active Alerts:</strong><br>• Upcoming appointment scheduled in 2 days.<br>• Lab results for Complete Blood Count are available.",
        "Got it"
    );
});

document.getElementById("notification-settings")?.addEventListener("click", () => {
    showModal(
        "Notification settings",
        "Live notifications are simulated locally in this demo.",
        "<strong>Demo notifications are informational only.</strong>",
        "Close"
    );
});

document.getElementById("support-button")?.addEventListener("click", () => {
    showModal(
        "MEDICONNECT demo support",
        "This is a student website demonstration for college project evaluation.",
        "<strong>College Demo Scope:</strong><br>All doctor profiles, appointment schedules, and lab reports are simulated in-browser.",
        "Close"
    );
});

window.addEventListener("hashchange", () => {
    const p = location.hash.replace("#", "");
    if (p && p !== state.page) go(p);
});

const initial = location.hash.replace("#", "");
if (["home", "doctors", "profile", "appointments", "doctor-profile", "booking", "records", "articles"].includes(initial)) {
    state.page = initial;
}
go(state.page);