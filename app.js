// app.js

// projects
const projects = [
  {
    id: "p1",
    title: "5' AIM-120 Missile Replica",
    subtitle: "CAD → build → finish → embedded controls",
    date: "2025-10",
    featured: true,
    image: "./img/projects/aim120.jpg",
    tags: ["Mechatronics", "CAD", "3D Printing", "Soldering", "Electronics", "Microcontrollers"],
    tools: ["Fusion360 and Bambu Studio", "Arduino", "Servos and I/O devices", "Mounting Hardware", "Paints & Decals"],
    gallery: [
      { src: "./img/projects/aim120-1.jpg", alt: "Assembly", caption: "" },
      { src: "./img/projects/aim120-2.jpg", alt: "Electronics", caption: "" },
      { src: "./img/projects/aim120-3.jpg", alt: "Assembly", caption: "" },
      { src: "./img/projects/aim120-4.jpg", alt: "Electronics", caption: "" },
      { src: "./img/projects/aim120-5.jpg", alt: "Assembly", caption: "" },
      { src: "./img/projects/aim120-6.jpg", alt: "Assembly", caption: "" },

    ],
    summary:
      "Modeled and built an AIM-120 replica, finished it with paint/decals, and integrated a fin actuation + screen system with custom wiring and code.",
    bullets: [
      "Modeled and printed modular body components and fins in Fusion 360",
      "Installed internal hardware: actuated fins, mounting, and an onboard display",
      "Painted, decalled, and finished the exterior for a realistic look",
      "Wired and soldered the electronics, then coded fin motion + screen behavior"
    ],
    //links: [{ label: "Gallery", href: "#" }]
  },

  {
    id: "p2",
    title: "6S Analog FPV Quad",
    subtitle: "Custom build → config & tuning → flight",
    date: "2025-06",
    featured: false,
    image: "./img/projects/fpv.jpg",
    gallery: ["./img/projects/fpv.jpg", "./img/projects/fpv1.jpg", "./img/projects/fpv3.jpg", "./img/projects/fpv4.jpg", "./img/projects/fpv5.jpg"],
    tags: ["Drones", "FPV", "Electronics", "Aerodynamics", "High Performance", "Soldering", "RC Aircraft"],
    tools: ["BetaFlight Config", "Electronics", "Soldering", "Flight Sim"],
    summary: "Custom-built high-performance FPV quad. Wired electronics, soldered, assembled, and fine tuned.",
    bullets: [
      "Integrated analog FPV camera, TX/RX ELRS logic, 6S battery, 55A flight stack and 1950kv motors",
      "Clean soldering and wiring for signal integrity and durability",
      "Trained in flight simulator to hone skills before real-world flights"
    ],
    links: [
      { label: "Youtube", href: "https://www.youtube.com/watch?v=segEhO_YfDE" },
      { label: "Build Guide (Git)", href: "https://github.com/aidandug/5in-fpv-quad" }
    ]
  },

  {
    id: "p3",
    title: "Carbon Planes (High-Speed RC)",
    subtitle: "Lightweight composite airframes + modular parts",
    date: "2021-03",
    featured: true,
    image: "./img/projects/cplanes.jpg",
    tags: ["RC Aircraft", "High Performance", "Aerodynamics"],
    tools: ["Carbon composite", "High-Speed RC", "Flight tuning"],
    gallery: ["./img/projects/cplanes.jpg", "./img/projects/cplanes1.jpg", "./img/projects/cplanes2.jpg"],
    summary:
      "Advanced from foam aircraft to high-performance carbon planes with composite bodies and interchangeable parts for performance optimization.",
    bullets: [
      "Refined control at higher speed regimes with tighter setup discipline",
      "Leveraged modular parts to iterate configuration quickly",
      "Built familiarity with composite construction and stiffness-to-weight benefits"
    ],
       links: [
    //  { label: "Gallery", href: "#" },
    //  { label: "Writeup", href: "#" }
    ]
  },

  {
    id: "p4",
    title: "Foam Wing",
    subtitle: "Crash-tolerant trainer builds for speed control",
    date: "2020-06",
    featured: true,
    image: "./img/projects/fplanes.jpg",
    tags: ["RC Aircraft", "Aerodynamics"],
    gallery: ["./img/projects/fplanes.jpg", "./img/projects/fplanes2.jpg", "./img/projects/fplanes1.jpg"],
    tools: ["Foam board", "LEDs", "Single prop", "3S Li-Po", "RC setup/tuning practice"],
    summary: "Built foam wings as a durable platform to learn high-speed flight control, setup tuning, and rapid repair.",
    bullets: [
      "Learned CG/throws/rates tuning for stability at speed",
      "Optimized durability for repeated crashes and quick rebuilds",
      "Built practical intuition for aero + vehicle setup tradeoffs"
    ],
    links: [
      //{ label: "Gallery", href: "#" },
      //{ label: "Writeup", href: "#" }
    ]
  },

  {
    id: "p5",
    title: "Microcontroller Projects",
    subtitle: "Small embedded systems with displays and user input",
    date: "2025-03",
    featured: false,
    image: "./img/projects/lcd.jpg",
    tags: ["Mechatronics", "CAD", "3D Printing", "Soldering", "Electronics", "Microcontrollers"],
    gallery: ["./img/projects/lcd.jpg", "./img/projects/lcd1.jpg", "./img/projects/lcd2.jpg"],
    tools: ["Arduino Uno", "ESP32", "Breadboards", "TFT LCD", "16x2 LCD", "Buttons", "Diodes", "WiFi APIs"],
    summary: "Built multiple small embedded projects focused on basic electronics, user interfaces, and real-time data on LCD screens.",
    bullets: [
      "Menu-driven interfaces using buttons and character/TFT LCDs",
      "ESP32 WiFi to pull and display live data from APIs",
      "Breadboard prototyping with discrete components",
      "Debugged wiring, power, and logic issues across iterations"
    ],
    links: [
      //{ label: "Gallery", href: "#" },
      {  label: "Youtube", href: "https://www.youtube.com/watch?v=UWNBKuJdgTA"},
      { label: "Build Guide (Git)", href: "https://github.com/aidandug/spotify-now-playing"}

    ]
  },

  {
    id: "p6",
    title: "Racing Simulator",
    subtitle: "Immersive vehicle dynamics, haptics, and VR integration",
    date: "2022-09",
    featured: false,
    image: "./img/projects/sim.jpg",
    tags: ["Simulation", "Vehicle Dynamics", "Electronics", "Microcontrollers"],
    tools: ["Direct Drive Wheel (Fanatec)", "Buttkickers", "VR Headset", "Belt Tensioners", "Pedals", "Custom Controls"],
    summary: "Configured a high-immersion sim rig with haptics, direct-drive force feedback, VR, airflow, and modular controls.",
    gallery: ["./img/projects/sim.jpg", "./img/projects/sim1.jpg", "./img/projects/sim2.jpg", "./img/projects/sim3.jpg", "./img/projects/sim4.jpg"],
    bullets: [
      "Haptics tuned for curbs, road texture, and drivetrain cues",
      "Direct-drive wheel + pedals + belt tensioners configured per car",
      "Interchangeable wheels and labeled controls for VR use",
      "Built around iRacing with repeatable setup + telemetry habits"
    ],
    links: [
      //{ label: "Gallery", href: "#" },
      //{ label: "Setup Details", href: "#" }
    ]
  },

  {
    id: "p7",
    title: "Suspension Geometry Research (SAE Development Team)",
    subtitle: "Wishbone geometry, roll center, and vehicle dynamics",
    date: "2023-3",
    featured: true,
    image: "./img/projects/geometry.jpg",
    tags: ["Vehicle Dynamics", "Suspension", "SAE", "CAD", "Simulation"],
    gallery: ["./img/projects/geometry.jpg", "./img/projects/geometry1.gif"],
    tools: ["SolidWorks", "Kinematics", "Simulation", "Technical Literature"],
    summary:
      "Modeled and researched suspension geometry to understand how control arm layout, roll center, and anti-dive/lift angles affect handling.",
    bullets: [
      "Modeled double wishbone geometry in SolidWorks; studied kinematic trends",
      "Roll center height vs jacking forces and cornering stability",
      "Anti-dive/anti-lift angle effects on braking/accel behavior",
      "Control arm length tradeoffs for camber gain under roll/braking",
      "Applied takeaways during coilover install + setup on personal car"
    ],
    //links: [{ label: "Reference", href: "#" }]
  }
];

// state
const state = {
  q: "",
  activeTags: new Set(),
  sort: "newest"
};

// dom
const grid = document.getElementById("grid");
const count = document.getElementById("count");
const chips = document.getElementById("chips");
const qInput = document.getElementById("q");
const sortSelect = document.getElementById("sort");

// modal dom
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalSummary = document.getElementById("modalSummary");
const modalBullets = document.getElementById("modalBullets");
const modalDate = document.getElementById("modalDate");
const modalTools = document.getElementById("modalTools");
const modalTags = document.getElementById("modalTags");
const modalLinks = document.getElementById("modalLinks");
const modalGallery = document.getElementById("modalGallery");

// year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

function escapeHtml(s){
  return String(s)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function uniqTags(items){
  const s = new Set();
  items.forEach(p => (p.tags || []).forEach(t => s.add(t)));
  return Array.from(s).sort((a,b)=>a.localeCompare(b));
}

// handles YYYY or YYYY-MM
function dateKey(d){
  const parts = String(d).split("-");
  const y = Number(parts[0]) || 0;
  const m = Number(parts[1]) || 0;
  return y * 100 + m;
}

function matchesQuery(p, q){
  if(!q) return true;
  const hay = [
    p.title, p.subtitle, p.summary,
    (p.tags || []).join(" "),
    (p.tools || []).join(" ")
  ].join(" ").toLowerCase();
  return hay.includes(q.toLowerCase());
}

function matchesTags(p, active){
  if(active.size === 0) return true;
  return (p.tags || []).some(t => active.has(t));
}

function sortProjects(items, mode){
  const copy = [...items];

  if(mode === "featured"){
    copy.sort((a,b)=>{
      const fa = a.featured ? 1 : 0;
      const fb = b.featured ? 1 : 0;
      if(fb !== fa) return fb - fa;
      return dateKey(b.date) - dateKey(a.date);
    });
    return copy;
  }

  if(mode === "oldest"){
    copy.sort((a,b)=> dateKey(a.date) - dateKey(b.date));
    return copy;
  }

  copy.sort((a,b)=> dateKey(b.date) - dateKey(a.date));
  return copy;
}

function projectCard(p){
  const el = document.createElement("article");
  el.className = "card";
  el.setAttribute("role","listitem");

  el.innerHTML = `
    <div class="card__thumb" aria-hidden="true">
      ${p.image ? `<img src="${p.image}" alt="${escapeHtml(p.title)}" loading="lazy" />` : ""}
    </div>
    <div class="card__body">
      <div class="card__top">
        <div>
          <div class="card__title">${escapeHtml(p.title)}</div>
          <div class="muted" style="font-size:13px;margin-top:4px;">${escapeHtml(p.subtitle)}</div>
        </div>
        <div class="card__date">${escapeHtml(p.date)}</div>
      </div>
      <p class="card__desc">${escapeHtml(p.summary)}</p>
      <div class="tags">
        ${(p.tags || []).map(t=>`<span class="tag">${escapeHtml(t)}</span>`).join("")}
      </div>
    </div>
    <div class="card__footer">
      <div class="linkrow">
        ${(p.links || []).slice(0,2).map(l=>`
          <a class="link" href="${l.href}" target="_blank" rel="noreferrer">${escapeHtml(l.label)}</a>
        `).join("")}
      </div>
      <button class="more" type="button" data-open="${p.id}">Details</button>
    </div>
  `;
  return el;
}

function renderChips(){
  if(!chips) return;

  const tags = uniqTags(projects);
  chips.innerHTML = "";

  const all = document.createElement("button");
  all.className = "chip";
  all.type = "button";
  all.textContent = "All";
  all.setAttribute("aria-pressed", state.activeTags.size === 0 ? "true" : "false");
  all.addEventListener("click", ()=>{
    state.activeTags.clear();
    renderChips();
    render();
  });
  chips.appendChild(all);

  tags.forEach(t=>{
    const b = document.createElement("button");
    b.className = "chip";
    b.type = "button";
    b.textContent = t;
    b.setAttribute("aria-pressed", state.activeTags.has(t) ? "true" : "false");
    b.addEventListener("click", ()=>{
      if(state.activeTags.has(t)) state.activeTags.delete(t);
      else state.activeTags.add(t);
      renderChips();
      render();
    });
    chips.appendChild(b);
  });
}

function render(){
  if(!grid || !count) return;

  const filtered = projects
    .filter(p => matchesQuery(p, state.q))
    .filter(p => matchesTags(p, state.activeTags));

  const sorted = sortProjects(filtered, state.sort);

  count.textContent = `${sorted.length} project${sorted.length === 1 ? "" : "s"}`;

  grid.innerHTML = "";
  sorted.forEach(p => grid.appendChild(projectCard(p)));

  grid.querySelectorAll("[data-open]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const id = btn.getAttribute("data-open");
      const p = projects.find(x=>x.id === id);
      if(p) openModal(p);
    });
  });
}

function openModal(p){
  if(!modal) return;

  modalTitle.textContent = p.title || "";
  modalSubtitle.textContent = p.subtitle || "";
  modalSummary.textContent = p.summary || "";
  modalDate.textContent = p.date || "";
  modalTools.textContent = (p.tools || []).join(", ");
  modalTags.textContent = (p.tags || []).join(", ");

  modalBullets.innerHTML = "";
  (p.bullets || []).forEach(b=>{
    const li = document.createElement("li");
    li.textContent = b;
    modalBullets.appendChild(li);
  });

  modalLinks.innerHTML = "";
  (p.links || []).forEach(l=>{
    const a = document.createElement("a");
    a.className = "pill";
    a.href = l.href;
    a.target = "_blank";
    a.rel = "noreferrer";
    a.textContent = l.label;
    modalLinks.appendChild(a);
  });

  // gallery (masonry)
  if(modalGallery){
    const items = p.gallery || [];
    modalGallery.innerHTML = "";

    if(items.length === 0){
      modalGallery.style.display = "none";
    } else {
      modalGallery.style.display = "block";
      items.forEach(item=>{
        const src = typeof item === "string" ? item : item.src;
        const alt = typeof item === "string" ? `${p.title} photo` : (item.alt || `${p.title} photo`);
        const cap = typeof item === "string" ? "" : (item.caption || "");

        const wrap = document.createElement("div");
        wrap.className = "masonry__item";
        wrap.innerHTML = `
          <img src="${src}" alt="${escapeHtml(alt)}" loading="lazy" />
          ${cap ? `<div class="masonry__cap">${escapeHtml(cap)}</div>` : ""}
        `;
        modalGallery.appendChild(wrap);
      });
    }
  }

  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  if(!modal) return;
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}

if(modal){
  modal.addEventListener("click", (e)=>{
    const t = e.target;
    if(t && t.getAttribute && t.getAttribute("data-close") === "true") closeModal();
  });
}

document.addEventListener("keydown",(e)=>{
  if(e.key === "Escape" && modal && modal.getAttribute("aria-hidden")==="false") closeModal();
});

if(qInput){
  qInput.addEventListener("input", (e)=>{
    state.q = e.target.value.trim();
    render();
  });
}

if(sortSelect){
  sortSelect.addEventListener("change",(e)=>{
    state.sort = e.target.value;
    render();
  });
}

// boot
renderChips();
render();


