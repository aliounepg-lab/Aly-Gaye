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
      { type: "class", name: "Staff Check-In",                 start: "8:00 AM",  end: "8:30 AM" },
      { type: "class", name: "Session 1",                      start: "8:30 AM",  end: "10:00 AM" },
      { type: "break", name: "Break",                          start: "10:00 AM", end: "10:15 AM" },
      { type: "class", name: "Session 2",                      start: "10:15 AM", end: "11:45 AM" },
      { type: "lunch", name: "Lunch",                           start: "11:45 AM", end: "12:45 PM" },
      { type: "class", name: "Session 3",                      start: "12:45 PM", end: "2:15 PM" },
      { type: "break", name: "Break",                          start: "2:15 PM",  end: "2:30 PM" },
      { type: "class", name: "Session 4 / Department Meetings", start: "2:30 PM",  end: "3:30 PM" },
      { type: "class", name: "Wrap-Up & Dismissal",             start: "3:30 PM",  end: "4:00 PM" },
    ],
  },

  spring: {
    label: "Spring Break Classes",
    labelAr: "دروس عطلة الربيع",
    subtitle: "Optional Enrichment Program · Half Day",
    audience: "Enrolled Students Only",
    status: "sample",
    note: "Dates confirmed below. Daily schedule (sessions/times) is still a sample — confirm grade groupings and activities before publishing.",
    dates: ["Mon, Mar 22, 2027 – Fri, Mar 26, 2027"],
    periods: [
      { type: "class", name: "Drop-Off / Arrival", start: "8:45 AM",  end: "9:00 AM" },
      { type: "class", name: "Session 1",          start: "9:00 AM",  end: "9:50 AM" },
      { type: "class", name: "Session 2",          start: "9:55 AM",  end: "10:45 AM" },
      { type: "break", name: "Snack & Recess",     start: "10:45 AM", end: "11:00 AM" },
      { type: "class", name: "Session 3",          start: "11:00 AM", end: "11:50 AM" },
      { type: "class", name: "Session 4",          start: "11:55 AM", end: "12:30 PM" },
      { type: "class", name: "Dismissal / Pickup", start: "12:30 PM", end: "12:45 PM" },
    ],
  },

  summer: {
    label: "Summer School",
    labelAr: "المدرسة الصيفية",
    subtitle: "Summer Session · Half-Day Program",
    audience: "Enrolled Students Only",
    status: "sample",
    note: "Sample template — adjust to the approved summer session calendar and course blocks.",
    periods: [
      { type: "class", name: "Drop-Off / Arrival", start: "8:15 AM",  end: "8:30 AM" },
      { type: "class", name: "Period 1",           start: "8:30 AM",  end: "9:20 AM" },
      { type: "class", name: "Period 2",           start: "9:25 AM",  end: "10:15 AM" },
      { type: "break", name: "Break",              start: "10:15 AM", end: "10:30 AM" },
      { type: "class", name: "Period 3",           start: "10:30 AM", end: "11:20 AM" },
      { type: "class", name: "Period 4",           start: "11:25 AM", end: "12:15 PM" },
      { type: "class", name: "Dismissal / Pickup", start: "12:15 PM", end: "12:30 PM" },
    ],
  },
};

const TYPE_LABELS = {
  class: "Class",
  break: "Break",
  lunch: "Lunch",
  prayer: "Prayer",
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
      <td class="cell-type"><span class="dot dot-${p.type}"></span>${TYPE_LABELS[p.type]}</td>
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
