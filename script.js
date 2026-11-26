const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
}
const translations = {
  en: {
    navAbout:"About",navSkills:"Skills",navProjects:"Projects",navCredentials:"Credentials",navResume:"Resume",navContact:"Contact",
    heroKicker:"Curious by nature. Technical by practice.",
    heroLead:"I like understanding how things work — then building something with what I learn.",
    heroText:"An Information Technology diploma student exploring software development, computer systems, networking, AI and game development. Currently building <strong>HALOFALL</strong> with Unity and C#.",
    heroExplore:'Explore my work <span>↘</span>',heroResume:'View resumes <span>↓</span>',
    heroFootnote:'<span class="mini-spark">✳</span> Learning by building, testing and breaking things (carefully).',
    aboutHeading:'A little about me<span>.</span>',
    aboutStatement:'I’m interested in the <em>why</em> behind technology — not just making something work, but understanding how it works.',
    aboutBody:"My studies and personal projects let me move between software, hardware, networking and creative development. I enjoy experimenting, troubleshooting and turning ideas into working projects.",
    skillsHeading:'Things I work with<span>.</span>',
    skillsIntro:"A practical skill set built through diploma coursework, personal practice and project development.",
    projectsHeading:'Project in progress<span>.</span>',
    projectSubtitle:"A 2D top-down survival roguelite.",
    projectBody:"HALOFALL explores survival pressure through a central mechanic: the player’s halo represents both health and visibility. As it fades, the visible world shrinks — creating a constant trade-off between fighting and staying alive.",
    projectNote:"Gameplay screenshots and main menu will be added after the build is ready.",
    credentialsHeading:'Certificates &amp; credentials<span>.</span>',
    credentialsIntro:'A record of completed learning and participation. Select any card to preview the certificate; use “Open PDF” for the original document.',
    resumeHeading:'Choose the right version<span>.</span>',
    resumeIntro:"Two formats are available. Use the ATS version for online job portals and application systems; use the designed version when sharing your portfolio directly.",
    atsTitle:"ATS-friendly resume",atsBody:"Single-column layout with standard headings and selectable text. No photo, tables or decorative columns.",
    downloadPdf:'Download PDF <span>↓</span>',downloadDocx:"Download editable DOCX ↗",
    designedTitle:"Designed resume",designedBody:"A visual version that matches this portfolio. Better for direct email, networking and personal presentation than strict ATS parsing.",
    downloadDesigned:'Download designed PDF <span>↓</span>',
    resumeNote:"The website itself is responsive. The downloadable resumes remain document files so employers can save, print and process them.",
    contactHeading:'Have a project in mind?<span>.</span>',
    contactLead:"For internship opportunities, technical discussions or collaboration, feel free to reach out.",
    eyebrowPerson:"01 / THE PERSON",eyebrowToolkit:"02 / TOOLKIT",eyebrowBuild:"03 / CURRENT BUILD",
    eyebrowLog:"04 / LEARNING LOG",eyebrowResume:"05 / RESUME",eyebrowContact:"06 / SAY HELLO",
    projectCategory:"FINAL YEAR ACADEMIC PROJECT",projectStatus:"IN DEVELOPMENT",
    completionLabel:"COMPLETION CERTIFICATES",participationLabel:"PARTICIPATION",
    qualificationLabel:"PROFESSIONAL QUALIFICATION",atsLabel:"BEST FOR ONLINE APPLICATIONS",
    designedLabel:"BEST FOR DIRECT SHARING"
  },
  bm: {
    navAbout:"Mengenai",navSkills:"Kemahiran",navProjects:"Projek",navCredentials:"Sijil",navResume:"Resume",navContact:"Hubungi",
    heroKicker:"Ingin tahu secara semula jadi. Mahir melalui amalan.",
    heroLead:"Saya suka memahami cara sesuatu berfungsi — kemudian membina sesuatu menggunakan ilmu yang dipelajari.",
    heroText:"Pelajar Diploma Teknologi Maklumat yang meneroka pembangunan perisian, sistem komputer, rangkaian, AI dan pembangunan permainan. Kini membangunkan <strong>HALOFALL</strong> menggunakan Unity dan C#.",
    heroExplore:'Lihat hasil kerja <span>↘</span>',heroResume:'Lihat resume <span>↓</span>',
    heroFootnote:'<span class="mini-spark">✳</span> Belajar melalui pembinaan, pengujian dan pembaikan secara berterusan.',
    aboutHeading:'Serba sedikit tentang saya<span>.</span>',
    aboutStatement:'Saya berminat memahami <em>sebab dan cara</em> sesuatu teknologi berfungsi — bukan sekadar memastikan ia berfungsi.',
    aboutBody:"Pengajian dan projek peribadi memberi saya peluang meneroka pembangunan perisian, perkakasan, rangkaian dan pembangunan kreatif. Saya gemar mencuba, menyelesaikan masalah teknikal dan menukar idea kepada projek yang boleh digunakan.",
    skillsHeading:'Bidang dan teknologi yang saya gunakan<span>.</span>',
    skillsIntro:"Kemahiran praktikal yang dibina melalui pengajian diploma, latihan kendiri dan pembangunan projek.",
    projectsHeading:'Projek yang sedang dibangunkan<span>.</span>',
    projectSubtitle:"Permainan roguelite survival 2D dari perspektif atas.",
    projectBody:"HALOFALL meneroka tekanan untuk terus hidup melalui mekanik utama: halo pemain mewakili tahap kesihatan dan penglihatan. Apabila halo semakin pudar, kawasan dunia yang dapat dilihat turut mengecil — mewujudkan pilihan berterusan antara melawan musuh dan terus bertahan.",
    projectNote:"Tangkapan skrin permainan dan menu utama akan ditambah apabila versi permainan sedia.",
    credentialsHeading:'Sijil dan kelayakan<span>.</span>',
    credentialsIntro:'Rekod pembelajaran dan penyertaan yang telah diselesaikan. Pilih kad untuk melihat pratonton sijil; gunakan pautan “Buka PDF” untuk dokumen asal.',
    resumeHeading:'Pilih versi resume<span>.</span>',
    resumeIntro:"Dua format disediakan. Gunakan versi mesra ATS untuk portal pekerjaan dan sistem permohonan dalam talian; gunakan versi reka bentuk untuk perkongsian portfolio secara terus.",
    atsTitle:"Resume mesra ATS",atsBody:"Susun atur satu lajur dengan tajuk standard dan teks yang boleh dibaca sistem. Tiada foto, jadual atau lajur hiasan.",
    downloadPdf:'Muat turun PDF <span>↓</span>',downloadDocx:"Muat turun DOCX untuk suntingan ↗",
    designedTitle:"Resume reka bentuk",designedBody:"Versi visual yang sepadan dengan portfolio ini. Lebih sesuai untuk e-mel terus, jaringan profesional dan persembahan peribadi berbanding pemprosesan ATS.",
    downloadDesigned:'Muat turun PDF reka bentuk <span>↓</span>',
    resumeNote:"Laman web ini responsif. Resume yang dimuat turun kekal dalam format dokumen supaya majikan boleh menyimpan, mencetak dan memprosesnya.",
    contactHeading:'Ada projek yang ingin dibincangkan?<span>.</span>',
    contactLead:"Untuk peluang latihan industri, perbincangan teknikal atau kerjasama, sila hubungi saya.",
    eyebrowPerson:"01 / DIRI SAYA",eyebrowToolkit:"02 / KEMAHIRAN",eyebrowBuild:"03 / PROJEK SEMASA",
    eyebrowLog:"04 / REKOD PEMBELAJARAN",eyebrowResume:"05 / RESUME",eyebrowContact:"06 / HUBUNGI SAYA",
    projectCategory:"PROJEK AKADEMIK TAHUN AKHIR",projectStatus:"SEDANG DIBANGUNKAN",
    completionLabel:"SIJIL PENYELESAIAN",participationLabel:"PENYERTAAN",
    qualificationLabel:"KELAYAKAN PROFESIONAL",atsLabel:"SESUAI UNTUK PERMOHONAN DALAM TALIAN",
    designedLabel:"SESUAI UNTUK PERKONGSIAN TERUS"
  }
};
const languageToggle = document.getElementById("languageToggle");
function setLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang === "bm" ? "ms-MY" : "en-GB";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const value = dict[el.dataset.i18nHtml];
    if (value !== undefined) el.innerHTML = value;
  });
  if (languageToggle) {
    languageToggle.setAttribute("aria-pressed", String(lang === "bm"));
    languageToggle.setAttribute("aria-label", lang === "bm" ? "Tukar bahasa ke English UK" : "Switch language to Bahasa Melayu");
    languageToggle.innerHTML = lang === "bm"
      ? '<span>EN</span><span class="lang-divider">/</span><span class="lang-active">BM</span>'
      : '<span class="lang-active">EN</span><span class="lang-divider">/</span><span>BM</span>';
  }
  document.title = lang === "bm"
    ? "Muhammad Daniel Rahman — Portfolio Pembangun"
    : "Muhammad Daniel Rahman — Developer Portfolio";
  try { localStorage.setItem("daniel-portfolio-language", lang); } catch(e) {}
}
let initialLanguage = "en";
try { initialLanguage = localStorage.getItem("daniel-portfolio-language") || "en"; } catch(e) {}
setLanguage(initialLanguage);
languageToggle?.addEventListener("click", () => {
  const current = document.documentElement.lang === "ms-MY" ? "bm" : "en";
  setLanguage(current === "en" ? "bm" : "en");
});

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const closeModal = () => {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
  document.body.style.overflow = "";
};
document.querySelectorAll("[data-image]").forEach(button => {
  button.addEventListener("click", () => {
    modalImage.src = button.dataset.image;
    modalTitle.textContent = button.dataset.title || "Certificate preview";
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});
document.getElementById("modalClose")?.addEventListener("click", closeModal);
modal?.addEventListener("click", event => { if (event.target === modal) closeModal(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeModal(); });
document.getElementById("year").textContent = new Date().getFullYear();
