/* ==========================================================================
   IQRA Bilingual Academy — Schedule Data
   --------------------------------------------------------------------------
   To edit a schedule: find its object below and change the "periods" array.
   Each period needs: type, name, start, end.
     type  = "class" | "break" | "lunch" | "prayer"
     start/end = "H:MM AM/PM" text (used for display AND for the "happening
                 now" highlight on the Daily Schedule tab)
   Add a brand-new schedule (e.g. a Ramadan schedule) by copying one of the
   objects below, giving it a new key, and adding a matching tab button in
   index.html with data-schedule="yourKey".
   ========================================================================== */

const SCHEDULES = {
  regular: {
    label: "Daily Schedule",
    labelAr: "الجدول اليومي",
    subtitle: "Regular School Day",
    audience: "All Students, Grades K–8",
    status: "official",
    note: "In effect every regular school day, 8:00 AM – 4:30 PM.",
    periods: [
      { type: "class",  name: "Period 1",     start: "8:00 AM",  end: "8:50 AM" },
      { type: "class",  name: "Period 2",     start: "8:55 AM",  end: "9:45 AM" },
      { type: "break",  name: "Break",        start: "9:50 AM",  end: "10:10 AM" },
      { type: "class",  name: "Period 3",     start: "10:15 AM", end: "11:05 AM" },
      { type: "class",  name: "Period 4",     start: "11:10 AM", end: "12:00 PM" },
      { type: "class",  name: "Period 5",     start: "12:05 PM", end: "12:55 PM" },
      { type: "lunch",  name: "Lunch Break",  start: "1:00 PM",  end: "2:00 PM" },
      { type: "prayer", name: "Prayer Break", start: "2:00 PM",  end: "2:30 PM" },
      { type: "class",  name: "Period 6",     start: "2:35 PM",  end: "3:30 PM" },
      { type: "class",  name: "Period 7",     start: "3:35 PM",  end: "4:30 PM" },
    ],
  },

  pd: {
    label: "Professional Development Day",
    labelAr: "يوم التطوير المهني",
    subtitle: "Staff In-Service · No Students",
    audience: "Faculty & Staff Only",
    status: "sample",
    note: "Occurs monthly on the 3rd Monday. Session titles/times below are a sample — update per PD day. No PD Day in December 2026 (winter break) or January 2027: the 3rd Monday (Jan 18) falls on Martin Luther King Jr. Day.",
    dates: [
      "Mon, Aug 17, 2026",
      "Mon, Sep 21, 2026",
      "Mon, Oct 19, 2026",
      "Mon, Nov 16, 2026",
      "Mon, Feb 15, 2027",
      "Mon, Mar 15, 2027",
      "Mon, Apr 19, 2027",
      "Mon, May 17, 2027",
      "Mon, Jun 21, 2027",
    ],
    periods: [
      { type: "class", name: "Staff Check-In",                            start: "8:00 AM",  end: "8:30 AM" },
      { type: "class", name: "Islamic Studies & Qur'an Curriculum",       start: "8:30 AM",  end: "10:00 AM" },
      { type: "break", name: "Break",                                    start: "10:00 AM", end: "10:15 AM" },
      { type: "class", name: "Data-Driven Instruction Workshop",         start: "10:15 AM", end: "11:45 AM" },
      { type: "lunch", name: "Lunch",                                    start: "11:45 AM", end: "12:45 PM" },
      { type: "class", name: "Classroom Management & Student Wellbeing", start: "12:45 PM", end: "2:15 PM" },
      { type: "break", name: "Break",                                    start: "2:15 PM",  end: "2:30 PM" },
      { type: "class", name: "Grade-Level & Department Collaboration",   start: "2:30 PM",  end: "3:30 PM" },
      { type: "class", name: "Wrap-Up & Dismissal",                      start: "3:30 PM",  end: "4:00 PM" },
    ],
  },

  spring: {
    label: "Spring Break Classes",
    labelAr: "دروس عطلة الربيع",
    subtitle: "Optional Enrichment Program · 9:00 AM – 2:00 PM",
    audience: "Enrolled Students Only",
    status: "official",
    note: "Runs 9:00 AM – 2:00 PM each day during Spring Break week (see dates above).",
    dates: ["Mon, Mar 22, 2027 – Fri, Mar 26, 2027"],
    periods: [
      { type: "class", name: "Session 1",          start: "9:00 AM",  end: "9:50 AM" },
      { type: "class", name: "Session 2",          start: "9:55 AM",  end: "10:45 AM" },
      { type: "break", name: "Snack & Recess",     start: "10:45 AM", end: "11:00 AM" },
      { type: "class", name: "Session 3",          start: "11:00 AM", end: "11:50 AM" },
      { type: "class", name: "Session 4",          start: "11:55 AM", end: "12:45 PM" },
      { type: "lunch", name: "Lunch Break",        start: "12:45 PM", end: "1:30 PM" },
      { type: "class", name: "Closing Session",    start: "1:30 PM",  end: "1:50 PM" },
      { type: "class", name: "Dismissal / Pickup", start: "1:50 PM",  end: "2:00 PM" },
    ],
  },

  summer: {
    label: "Summer School",
    labelAr: "المدرسة الصيفية",
    subtitle: "Summer Session · Full Day",
    audience: "Enrolled Students Only",
    status: "official",
    note: "Full day, 8:30 AM – 3:30 PM, mirroring the regular school day's period/break/lunch/prayer pattern.",
    dates: ["Mon, Jul 5, 2027 – Fri, Aug 13, 2027"],
    periods: [
      { type: "class",  name: "Period 1",           start: "8:30 AM",  end: "9:20 AM" },
      { type: "class",  name: "Period 2",           start: "9:25 AM",  end: "10:15 AM" },
      { type: "break",  name: "Break",              start: "10:15 AM", end: "10:30 AM" },
      { type: "class",  name: "Period 3",           start: "10:30 AM", end: "11:20 AM" },
      { type: "class",  name: "Period 4",           start: "11:25 AM", end: "12:15 PM" },
      { type: "lunch",  name: "Lunch Break",        start: "12:15 PM", end: "1:00 PM" },
      { type: "prayer", name: "Prayer Break",       start: "1:00 PM",  end: "1:30 PM" },
      { type: "class",  name: "Period 5",           start: "1:35 PM",  end: "2:25 PM" },
      { type: "class",  name: "Period 6",           start: "2:30 PM",  end: "3:20 PM" },
      { type: "class",  name: "Dismissal / Pickup", start: "3:20 PM",  end: "3:30 PM" },
    ],
  },
};

const TYPE_LABELS = {
  class: "Class",
  break: "Break",
  lunch: "Lunch",
  prayer: "Prayer",
};

/* ---- icon markup (inline SVG, matches the tab icon set) ------------- */

const PANEL_ICONS = {
  regular:
    '<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15" rx="2"/><line x1="3.5" y1="9.5" x2="20.5" y2="9.5"/><line x1="8" y1="3" x2="8" y2="6.5"/><line x1="16" y1="3" x2="16" y2="6.5"/></svg>',
  pd:
    '<svg viewBox="0 0 24 24"><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.2 1 2.5h6c0-1.3.3-1.8 1-2.5A6 6 0 0 0 12 3Z"/></svg>',
  spring:
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2.2"/><circle cx="12" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="12" r="3"/></svg>',
  summer:
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5"/><line x1="12" y1="1.5" x2="12" y2="4.5"/><line x1="12" y1="19.5" x2="12" y2="22.5"/><line x1="1.5" y1="12" x2="4.5" y2="12"/><line x1="19.5" y1="12" x2="22.5" y2="12"/><line x1="4.6" y1="4.6" x2="6.7" y2="6.7"/><line x1="17.3" y1="17.3" x2="19.4" y2="19.4"/><line x1="4.6" y1="19.4" x2="6.7" y2="17.3"/><line x1="17.3" y1="6.7" x2="19.4" y2="4.6"/></svg>',
};

const TYPE_ICONS = {
  class:
    '<svg viewBox="0 0 24 24"><path d="M12 6.5c-1.8-1.4-4.2-2-7-2v13c2.8 0 5.2.6 7 2 1.8-1.4 4.2-2 7-2v-13c-2.8 0-5.2.6-7 2Z"/><line x1="12" y1="6.5" x2="12" y2="19.5"/></svg>',
  break:
    '<svg viewBox="0 0 24 24"><path d="M5 9h11v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Z"/><path d="M16 10.5h1.5a2.2 2.2 0 0 1 0 4.4H16"/><line x1="7" y1="4.5" x2="7" y2="7"/><line x1="10.5" y1="3.5" x2="10.5" y2="7"/></svg>',
  lunch:
    '<svg viewBox="0 0 24 24"><path d="M7 3v6a2 2 0 0 0 2 2v10"/><path d="M7 3v6"/><path d="M9 3v6"/><path d="M17 3c-1.7 0-3 2-3 5s1.3 5 3 5"/><path d="M17 3v18"/></svg>',
  prayer:
    '<svg viewBox="0 0 24 24"><path d="M15.5 3.5a7.5 7.5 0 1 0 5 12.9A7.5 7.5 0 0 1 15.5 3.5Z"/><path d="M19.5 3.5l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6z"/></svg>',
};

/* ---- helpers ------------------------------------------------------- */

function parseTimeToMinutes(str) {
  const m = str.trim().match(/^(\d{1,2}):(\d{2})\s*([AP]M)$/i);
  if (!m) return null;
  let [, h, min, ap] = m;
  h = parseInt(h, 10);
  min = parseInt(min, 10);
  if (ap.toUpperCase() === "PM" && h !== 12) h += 12;
  if (ap.toUpperCase() === "AM" && h === 12) h = 0;
  return h * 60 + min;
}

function formatDuration(mins) {
  if (mins == null) return "";
  if (mins < 60) return `${mins} min`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m === 0 ? `${h} hr` : `${h} hr ${m} min`;
}

function nowMinutes() {
  const d = new Date();
  return d.getHours() * 60 + d.getMinutes();
}

/* ---- rendering ------------------------------------------------------- */

function renderSchedule(key) {
  const data = SCHEDULES[key];
  if (!data) return;

  document.getElementById("panel-icon").innerHTML = PANEL_ICONS[key] || "";
  document.getElementById("panel-title").textContent = data.label;
  document.getElementById("panel-title-ar").textContent = data.labelAr || "";
  document.getElementById("panel-subtitle").textContent = data.subtitle || "";
  document.getElementById("panel-audience").textContent = data.audience || "";
  document.getElementById("panel-note").textContent = data.note || "";

  const badge = document.getElementById("panel-status");
  if (data.status === "sample") {
    badge.textContent = "Sample template — please review & customize";
    badge.hidden = false;
  } else {
    badge.hidden = true;
  }

  const datesWrap = document.getElementById("panel-dates");
  datesWrap.innerHTML = "";
  if (data.dates && data.dates.length) {
    datesWrap.hidden = false;
    data.dates.forEach((d) => {
      const chip = document.createElement("span");
      chip.className = "date-chip";
      chip.textContent = d;
      datesWrap.appendChild(chip);
    });
  } else {
    datesWrap.hidden = true;
  }

  const tbody = document.getElementById("schedule-body");
  tbody.innerHTML = "";

  const nowMin = nowMinutes();
  const today = new Date().getDay(); // 0 = Sun, 6 = Sat
  const isSchoolDay = today >= 0 && today <= 6; // highlight regardless; only meaningful for "regular"

  data.periods.forEach((p) => {
    const startMin = parseTimeToMinutes(p.start);
    const endMin = parseTimeToMinutes(p.end);
    const duration = startMin != null && endMin != null ? endMin - startMin : null;

    const tr = document.createElement("tr");
    tr.className = `row-${p.type}`;

    const isNow =
      key === "regular" &&
      startMin != null &&
      endMin != null &&
      nowMin >= startMin &&
      nowMin < endMin;
    if (isNow) tr.classList.add("row-now");

    tr.innerHTML = `
      <td class="cell-type"><span class="type-icon type-${p.type}">${TYPE_ICONS[p.type]}</span>${TYPE_LABELS[p.type]}</td>
      <td class="cell-name">${p.name}${isNow ? '<span class="now-badge">Now</span>' : ""}</td>
      <td class="cell-time">${p.start} – ${p.end}</td>
      <td class="cell-duration">${formatDuration(duration)}</td>
    `;
    tbody.appendChild(tr);
  });
}

function setActiveTab(key) {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    const isActive = btn.dataset.schedule === key;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
  });
  renderSchedule(key);
  window.location.hash = key;
}

function init() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach((btn) => {
    btn.addEventListener("click", () => setActiveTab(btn.dataset.schedule));
  });

  document.getElementById("print-btn").addEventListener("click", () => {
    window.print();
  });

  window.addEventListener("hashchange", () => {
    const key = window.location.hash.replace("#", "");
    if (SCHEDULES[key]) setActiveTab(key);
  });

  const hashKey = window.location.hash.replace("#", "");
  const initialKey = SCHEDULES[hashKey] ? hashKey : "regular";
  setActiveTab(initialKey);

  const clockEl = document.getElementById("live-clock");
  function tick() {
    const d = new Date();
    clockEl.textContent = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    // Re-render active panel every minute so the "Now" highlight stays accurate.
    if (d.getSeconds() === 0) {
      const activeKey = document.querySelector(".tab-btn.active")?.dataset.schedule;
      if (activeKey) renderSchedule(activeKey);
    }
  }
  tick();
  setInterval(tick, 1000);
}

document.addEventListener("DOMContentLoaded", init);
