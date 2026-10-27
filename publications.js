// =====================================================================
// 논문 데이터 — 여기만 수정하면 됩니다. 객체 하나 = 논문 하나.
//
// 필드 설명:
//   title    : 논문 제목
//   authors  : 저자 문자열. 본인 이름은 그대로 두면 자동으로 볼드 처리됨 (ME 상수 참고)
//   venue    : 학회/저널 + 연도 표시용 (예: "NeurIPS 2026", "Preprint")
//   year     : 숫자. 연도별 그룹핑에 사용
//   desc     : (선택) 짧은 설명. AI가 아닌 연구 등 피규어 없이 글로 소개할 때 사용
//   arxiv    : (선택) arXiv URL — 있으면 [arXiv] 버튼
//   github   : (선택) GitHub URL — 있으면 [Code] 버튼
//   pdf      : (선택) PDF URL — 있으면 [PDF] 버튼
//   page     : (선택) 프로젝트 페이지 URL — 있으면 [Project] 버튼
// =====================================================================

const ME = "Jihyun Yu"; // 저자 목록에서 볼드 처리할 이름

const PUBLICATIONS = [
  {
    title: "PolarityVQA: A Diagnostic Benchmark and Reliability-Aware Protocol for Multi-Object Attribute Binding in Text-to-Image Evaluation",
    authors: "Jihyun Yu, Mingyeong Song*, Jae Yi Sung*, Soomin Kim, Wonho Bae, Mingyu Kim, Junhyug Noh",
    venue: "WACV 2027",
    year: 2027,
    page: "https://yugomee.github.io/PolarityVQA/",
    // arXiv/GitHub 링크가 공개되면 여기에 추가:
    // arxiv: "https://arxiv.org/abs/...",
    // github: "https://github.com/...",
  },
  {
    title: "SteeringTTA: Guiding Diffusion Trajectories for Robust Test-Time Adaptation",
    authors: "Jihyun Yu, Yoojin Oh, Wonho Bae, Mingyu Kim, Junhyug Noh",
    venue: "PUT Workshop @ ICML 2025",
    year: 2025,
    arxiv: "https://arxiv.org/abs/2510.14634",
    page: "https://icml.cc/virtual/2025/48067",
  },
  {
    title: "Exploring the Relationships Between Emotions and State Motivation in a Video-based Learning Environment",
    authors: "Jihyun Yu, Y. Shin, D. Kim, Il-Hyun Jo",
    venue: "Educational Technology International, 18(2), 2017",
    year: 2017,
    desc: "Used AI-based facial expression recognition to study how learners' emotions relate to their state motivation in a video-based learning environment. Six years later, I ended up researching AI for real.",
  },
  {
    title: "Development of Prediction Models Based on the Clustered Online Learners' Behavioral Patterns",
    authors: "H. Lee, H. Sung, Jihyun Yu, Yeonjeong Park, Il-Hyun Jo",
    venue: "International Academic Conference on Teaching, Learning and E-learning, 2015",
    year: 2015,
    desc: "Clustered online learners by their behavioral log patterns and built per-cluster models to predict learning outcomes — learning analytics work from before my AI research days.",
  },
];

// ============ 렌더링 (수정할 필요 없음) ============
(function renderPubs() {
  const root = document.getElementById("pub-list");
  if (!root) return;

  const byYear = {};
  for (const p of PUBLICATIONS) (byYear[p.year] ??= []).push(p);
  const years = Object.keys(byYear).sort((a, b) => b - a);

  for (const y of years) {
    const h = document.createElement("div");
    h.className = "pub-year";
    h.textContent = y;
    root.appendChild(h);

    for (const p of byYear[y]) {
      const card = document.createElement("article");
      card.className = "pub-card";

      const authorsHtml = p.authors
        .split(/,\s*/)
        .map(a => (a === ME ? `<span class="me">${a}</span>` : a))
        .join(", ");

      const links = [
        p.arxiv && `<a href="${p.arxiv}" target="_blank" rel="noopener">arXiv</a>`,
        p.github && `<a href="${p.github}" target="_blank" rel="noopener">Code</a>`,
        p.pdf && `<a href="${p.pdf}" target="_blank" rel="noopener">PDF</a>`,
        p.page && `<a href="${p.page}" target="_blank" rel="noopener">Project</a>`,
      ].filter(Boolean).join("");

      card.innerHTML = `
        <h3 class="pub-title">${p.title}</h3>
        <p class="pub-authors">${authorsHtml}</p>
        <p class="pub-venue">${p.venue}</p>
        ${p.desc ? `<p class="pub-desc">${p.desc}</p>` : ""}
        ${links ? `<div class="pub-links">${links}</div>` : ""}
      `;
      root.appendChild(card);
    }
  }
})();
