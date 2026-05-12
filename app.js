const state = {
  section: "home",
  category: portfolioCategories[0].key,
  lightboxImages: [],
  lightboxIndex: 0,
  hobbyLightboxItems: [],
  hobbySceneReady: false,
  hobbySceneTicking: false,
  articles: {},
  autoScrollStops: [],
  route: {
    points: [],
    length: 0,
    ticking: false,
    resizeTimer: 0
  }
};

const sectionButtons = document.querySelectorAll("[data-section]");
const sectionJumpButtons = document.querySelectorAll("[data-section-jump]");
const sectionPanels = document.querySelectorAll("[data-section-panel]");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const header = document.querySelector(".site-header");
const toast = document.querySelector(".toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function updateSectionState(section) {
  state.section = section;
  sectionButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.section === section);
  });
  sectionJumpButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.sectionJump === section);
  });
}

function setSection(section, shouldScroll = true) {
  updateSectionState(section);
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");

  if (shouldScroll) {
    scrollToSection(section);
  }
}

function scrollToSection(sectionOrElement) {
  const target = typeof sectionOrElement === "string" ? document.getElementById(sectionOrElement) : sectionOrElement;
  if (!target) return;

  const headerHeight = header.getBoundingClientRect().height;
  const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 18;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

function openPortfolioCategory(category, targetId = "") {
  state.category = category;
  renderPortfolio();
  scheduleRouteRefresh();
  updateSectionState("portfolio");
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  window.requestAnimationFrame(() => {
    const target =
      (targetId ? document.getElementById(targetId) : null) ||
      document.getElementById(`portfolio-section-${category}`) ||
      document.getElementById("portfolio");
    scrollToSection(target);
  });
}

function portfolioLink(label, category, targetId = "") {
  return `<button class="inline-portfolio-link" type="button" data-portfolio-jump="${category}" ${
    targetId ? `data-portfolio-target="${targetId}"` : ""
  }>${label}</button>`;
}

function formatLead(text) {
  const colonIndex = text.search(/[：:]/);
  if (colonIndex > 0 && colonIndex < 26) {
    return `<strong>${text.slice(0, colonIndex + 1)}</strong>${text.slice(colonIndex + 1)}`;
  }

  const sentenceIndex = text.indexOf("。");
  if (sentenceIndex > 0 && sentenceIndex < 54) {
    return `<strong>${text.slice(0, sentenceIndex + 1)}</strong>${text.slice(sentenceIndex + 1)}`;
  }

  return text;
}

function getLeadLabel(text) {
  const colonIndex = text.search(/[：:]/);
  if (colonIndex > 0 && colonIndex < 26) {
    return text.slice(0, colonIndex);
  }

  const sentenceIndex = text.indexOf("。");
  if (sentenceIndex > 0 && sentenceIndex < 30) {
    return text.slice(0, sentenceIndex);
  }

  return text.slice(0, 18);
}

function getShortSummary(item) {
  const summary = item.shortSummary || item.result || item.coreIdea || item.description || "";
  return summary.length > 78 ? `${summary.slice(0, 78)}...` : summary;
}

function appendExperienceLink(text) {
  if (text.startsWith("文化体系建设：")) {
    return `${formatLead(text)}${portfolioLink("看看推文作品↗", "tweet")}`;
  }
  if (text.startsWith("用户与渠道运营：")) {
    return `${formatLead(text)}${portfolioLink("看看跨团队活动↗", "event")}`;
  }
  return formatLead(text);
}

function skillTagClass(item, index) {
  if (index <= 7) return "skill-blue";
  if (item === "0-1账号搭建") return "skill-fill-yellow";
  if (["用户调研", "运营数据分析", "直播策划", "Facebook运营"].includes(item)) return "skill-yellow";
  if (["项目管理", "跨团队项目"].includes(item)) return "skill-green";
  if (item === "文化活动策划执行") return "skill-pink";
  return "";
}

function renderAbout() {
  const list = document.getElementById("aboutExperienceList");
  list.innerHTML = about.experiences
    .map(
      (item) => `
        <article class="timeline-item">
          <span class="dot"></span>
          <div class="timeline-title-row">
            <h4>${item.company}</h4>
            <small>${item.date}</small>
          </div>
          <p>${item.title}</p>
        </article>
      `
    )
    .join("");

  document.getElementById("strengthList").innerHTML = about.strengths
    .map((item, index) => `<span class="tag skill-tag ${skillTagClass(item, index)}">${item}</span>`)
    .join("");

  document.getElementById("educationList").innerHTML = education
    .map(
      (item) => `
        <article class="education-card">
          <p class="card-kicker">${item.date}</p>
          <h4>${item.school}</h4>
          <p>${item.major}｜${item.result}</p>
          ${item.achievements ? `<span>${item.achievements}</span>` : ""}
        </article>
      `
    )
    .join("");
}

function renderExperience() {
  const [meituan, ...otherExperiences] = about.experiences;
  const [mingjingProject, aiProject] = about.highlights;
  const mingjingResult = mingjingProject.points[mingjingProject.points.length - 1];
  document.getElementById("experienceList").innerHTML = `
    <div class="meituan-experience-block">
      <article class="experience-card meituan-card">
        <div class="experience-card-head">
          <div>
            <p class="meituan-company-name">${meituan.company}</p>
            <h3>${meituan.title}</h3>
            <p class="experience-date">${meituan.date}</p>
          </div>
        </div>
        <p>${formatLead(meituan.summary)}</p>
        <details class="experience-disclosure">
          <summary>展开工作细节</summary>
          <ul>
            ${meituan.details.map((detail) => `<li>${appendExperienceLink(detail)}</li>`).join("")}
          </ul>
        </details>
      </article>
      <div class="meituan-project-grid">
        <section class="supplement-card mingjing-project">
          <p class="card-kicker">${mingjingProject.date}</p>
          <h4><span>美团项目一</span>${mingjingProject.title}</h4>
          <p>${formatLead(mingjingProject.points[0])}</p>
          <p class="project-result">${formatLead(mingjingResult)}</p>
          <details class="experience-disclosure compact">
            <summary>展开项目细节</summary>
            <ul>
              ${mingjingProject.points.slice(1, -1).map((point) => `<li>${formatLead(point)}</li>`).join("")}
            </ul>
          </details>
        </section>
        <section class="supplement-card ai-project">
          <p class="card-kicker">${aiProject.date}</p>
          <h4><span>美团项目二</span>${aiProject.title}</h4>
          <ul>
            ${aiProject.points.map((point) => `<li>${formatLead(point)}</li>`).join("")}
          </ul>
          ${portfolioLink("看看AI Coding作品示意↗", "ai", "portfolio")}
        </section>
      </div>
    </div>
  `;

  document.getElementById("experienceList").innerHTML += `<div class="other-experience-grid">`
    + otherExperiences
    .map(
      (item) => `
        <article class="experience-card compact-experience">
          <div class="experience-card-head">
            <div>
              <p class="other-company-name">${item.company}</p>
              <h3>${item.title}</h3>
              <p class="experience-date">${item.date}</p>
            </div>
          </div>
          <ul class="visible-experience-details">
            ${item.details.map((detail) => `<li>${formatLead(detail)}</li>`).join("")}
          </ul>
          ${
            item.company === "新华社"
              ? portfolioLink("看看媒体作品集↗", "media", "portfolio")
              : portfolioLink("看看项目↗", "event", "portfolio-event-shell-marathon")
          }
        </article>
      `
    )
    .join("")
    + `</div>`;
}

function renderPortfolioTabs() {
  const tabs = document.getElementById("portfolioTabs");
  tabs.innerHTML = "";
  tabs.hidden = true;
}

function imageStyle(image) {
  const rules = [];
  if (image.position) rules.push(`object-position: ${image.position}`);
  if (image.fit) rules.push(`object-fit: ${image.fit}`);
  return rules.length ? ` style="${rules.join("; ")}"` : "";
}

function renderImageButton(item, image, index, className) {
  return `
    <button class="${className} image-button" type="button" data-lightbox-id="${item.id}" data-image-index="${index}" aria-label="放大图片：${image.alt}">
      <img src="${image.src}" alt="${image.alt}" loading="lazy"${imageStyle(image)} />
    </button>
  `;
}

function renderAiImageLayout(item) {
  if (item.imageLayout === "award-pair") {
    const [certificateImage, pluginImage, petImage] = item.images;
    return `
      <div class="ai-award-pair-detail">
        ${renderImageButton(item, certificateImage, 0, "ai-award-pair-image ai-award-certificate")}
        <div class="ai-award-side-stack">
          ${petImage ? renderImageButton(item, petImage, 2, "ai-award-pair-image ai-award-landscape") : ""}
          ${pluginImage ? renderImageButton(item, pluginImage, 1, "ai-award-pair-image ai-award-landscape") : ""}
        </div>
      </div>
    `;
  }

  const headIndex = Number.isInteger(item.previewImageIndex)
    ? item.previewImageIndex
    : item.imageLayout === "award-pair"
      ? 1
      : -1;
  const hasHead = headIndex >= 0 && headIndex < item.images.length;

  if (hasHead) {
    const headImage = item.images[headIndex];
    const detailImages = item.images
      .map((image, index) => ({ image, index }))
      .filter((entry) => entry.index !== headIndex);

    return `
      <div class="ai-showcase-image-layout">
        ${renderImageButton(item, headImage, headIndex, "ai-showcase-cover")}
        ${
          detailImages.length
            ? `<div class="ai-showcase-thumbnails">
                ${detailImages.map((entry) => renderImageButton(item, entry.image, entry.index, "ai-showcase-thumb")).join("")}
              </div>`
            : ""
        }
      </div>
    `;
  }

  return `
    <div class="ai-compact-image-layout">
      ${item.images.map((image, index) => renderImageButton(item, image, index, "ai-showcase-thumb")).join("")}
    </div>
  `;
}

function renderImageStrip(item) {
  if (!item.images?.length) {
    return "";
  }

  if (item.imageLayout === "hero-grid") {
    const [heroImage, ...gridImages] = item.images;
    return `
      <div class="media-hero-grid">
        <button class="media-hero-image image-button" type="button" data-lightbox-id="${item.id}" data-image-index="0" aria-label="放大图片：${heroImage.alt}">
          <img src="${heroImage.src}" alt="${heroImage.alt}" loading="lazy"${imageStyle(heroImage)} />
        </button>
        <div class="media-hero-thumbs">
          ${gridImages
            .map(
              (image, index) => `
                <button class="media-grid-image image-button" type="button" data-lightbox-id="${item.id}" data-image-index="${index + 1}" aria-label="放大图片：${image.alt}">
                  <img src="${image.src}" alt="${image.alt}" loading="lazy"${imageStyle(image)} />
                </button>
              `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  if (item.imageLayout === "grid" || item.imageLayout === "feature-grid") {
    return `
      <div class="media-grid-layout ${item.imageLayout === "feature-grid" ? "feature-grid" : ""}">
        ${item.images
          .map(
            (image, index) => `
              <button class="media-grid-image image-button" type="button" data-lightbox-id="${item.id}" data-image-index="${index}" aria-label="放大图片：${image.alt}">
                <img src="${image.src}" alt="${image.alt}" loading="lazy"${imageStyle(image)} />
              </button>
            `
          )
          .join("")}
      </div>
    `;
  }

  if ((item.category === "tweet" || item.category === "event") && item.images.length > 1) {
    const [cover, ...contentImages] = item.images;
    return `
      <div class="showcase-image-layout">
        <button class="showcase-cover image-button" type="button" data-lightbox-id="${item.id}" data-image-index="0" aria-label="放大图片：${cover.alt}">
          <img src="${cover.src}" alt="${cover.alt}" loading="lazy"${imageStyle(cover)} />
        </button>
        <div class="showcase-thumbnails">
          ${contentImages
            .map(
              (image, index) => `
                <button class="showcase-thumb image-button" type="button" data-lightbox-id="${item.id}" data-image-index="${index + 1}" aria-label="放大图片：${image.alt}">
                  <img src="${image.src}" alt="${image.alt}" loading="lazy"${imageStyle(image)} />
                </button>
              `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  if (item.category === "event" && item.images.length === 1) {
    const [image] = item.images;
    return `
      <div class="single-image-layout">
        <button class="single-image image-button" type="button" data-lightbox-id="${item.id}" data-image-index="0" aria-label="放大图片：${image.alt}">
          <img src="${image.src}" alt="${image.alt}" loading="lazy"${imageStyle(image)} />
        </button>
      </div>
    `;
  }

  if (item.category === "ai") {
    return renderAiImageLayout(item);
  }

  return `
    <div class="image-strip ${item.imageType === "vertical" ? "vertical" : "landscape"} ${item.imageFit === "contain" ? "contain" : ""}">
      ${item.images
        .map(
          (image, index) => `
            <button class="image-button" type="button" data-lightbox-id="${item.id}" data-image-index="${index}" aria-label="放大图片：${image.alt}">
              <img src="${image.src}" alt="${image.alt}" loading="lazy"${imageStyle(image)} />
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderAutoScrollLinks(item) {
  if (item.id !== "media-acg-feature" || !item.links?.length) {
    return "";
  }

  return `
    <div class="auto-link-panel">
      <div class="auto-link-heading">
        <p>部分推文作品</p>
        <span>${item.links.length} 篇</span>
      </div>
      <div class="auto-link-window" data-auto-scroll>
        <div class="auto-link-track">
          ${item.links
            .map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">🔗 ${link.label}</a>`)
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function setupAutoScrollers() {
  state.autoScrollStops.forEach((stop) => stop());
  state.autoScrollStops = [];

  document.querySelectorAll("[data-auto-scroll]").forEach((container) => {
    const track = container.querySelector(".auto-link-track");
    if (!track || track.dataset.cloned === "true") return;

    const clone = document.createElement("div");
    clone.className = "auto-link-clone";
    clone.setAttribute("aria-hidden", "true");
    clone.innerHTML = track.innerHTML;
    clone.querySelectorAll("a").forEach((link) => {
      link.tabIndex = -1;
    });
    track.appendChild(clone);
    track.dataset.cloned = "true";

    let hovered = false;
    let paused = false;
    let resumeTimer;
    const pause = () => {
      paused = true;
      window.clearTimeout(resumeTimer);
    };
    const resumeSoon = () => {
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        if (!hovered) {
          paused = false;
        }
      }, 1600);
    };

    container.addEventListener("mouseenter", () => {
      hovered = true;
      pause();
    });
    container.addEventListener("mouseleave", () => {
      hovered = false;
      paused = false;
    });
    container.addEventListener("touchstart", pause, { passive: true });
    container.addEventListener("touchend", resumeSoon, { passive: true });
    container.addEventListener("wheel", pause, { passive: true });
    container.addEventListener("focusin", pause);
    container.addEventListener("focusout", () => {
      if (!hovered) {
        paused = false;
      }
    });

    let frameId;
    let active = true;
    const step = () => {
      if (!active) return;
      if (!paused && container.scrollHeight > container.clientHeight) {
        container.scrollTop += 0.32;
        if (container.scrollTop >= container.scrollHeight / 2) {
          container.scrollTop = 0;
        }
      }
      frameId = requestAnimationFrame(step);
    };
    frameId = requestAnimationFrame(step);
    state.autoScrollStops.push(() => {
      active = false;
      cancelAnimationFrame(frameId);
      window.clearTimeout(resumeTimer);
    });
  });
}

function renderMediaFocus(item) {
  const outcome = item.result && !item.hideResult ? item.result : item.coreIdea || item.excerpt || "";

  return `
    <div class="media-focus">
      <p>${item.description}${outcome ? ` ${outcome}` : ""}</p>
    </div>
  `;
}

function renderPortfolioPreviewImage(item, className = "portfolio-preview-image") {
  const image = item.images?.[item.previewImageIndex || 0];
  if (!image) {
    return `<div class="${className} placeholder-preview"></div>`;
  }

  return `
    <div class="${className}">
      <img src="${image.src}" alt="${image.alt}" loading="lazy"${imageStyle(image)} />
    </div>
  `;
}

function renderFeaturedMediaPreview(item) {
  if (!item.images?.length) {
    return `<div class="featured-media-preview placeholder-preview"></div>`;
  }

  if (item.imageLayout === "hero-grid") {
    const [heroImage, ...gridImages] = item.images;
    return `
      <div class="featured-media-preview featured-hero-grid-preview">
        <div class="featured-hero-preview">
          <img src="${heroImage.src}" alt="${heroImage.alt}" loading="lazy"${imageStyle(heroImage)} />
        </div>
        <div class="featured-hero-thumb-grid">
          ${gridImages
            .map((image) => `<img src="${image.src}" alt="${image.alt}" loading="lazy"${imageStyle(image)} />`)
            .join("")}
        </div>
      </div>
    `;
  }

  if (item.imageLayout === "grid" || item.imageLayout === "feature-grid") {
    return `
      <div class="featured-media-preview featured-grid-preview ${item.imageLayout === "feature-grid" ? "feature-grid" : ""}">
        ${item.images
          .map((image) => `<img src="${image.src}" alt="${image.alt}" loading="lazy"${imageStyle(image)} />`)
          .join("")}
      </div>
    `;
  }

  if (item.imageLayout === "award-pair") {
    return `
      <div class="featured-media-preview featured-award-pair-preview">
        ${item.images
          .slice(0, 2)
          .map(
            (image, index) => `
              <figure class="award-pair-frame ${index === 0 ? "certificate-frame" : "plugin-frame"}">
                <img src="${image.src}" alt="${image.alt}" loading="lazy"${imageStyle(image)} />
              </figure>
            `
          )
          .join("")}
      </div>
    `;
  }

  const [cover, ...contentImages] = item.images;
  return `
    <div class="featured-media-preview">
      <div class="featured-cover-preview">
        <img src="${cover.src}" alt="${cover.alt}" loading="lazy"${imageStyle(cover)} />
      </div>
      ${
        contentImages.length
          ? `<div class="featured-thumb-row">
              ${contentImages.map((image) => `<img src="${image.src}" alt="${image.alt}" loading="lazy"${imageStyle(image)} />`).join("")}
            </div>`
          : ""
      }
    </div>
  `;
}

function registerArticleButtons(item) {
  return (item.pdfs || [])
    .map((pdf, index) => {
      const articleId = `${item.id}-${pdf.id || index}`;
      state.articles[articleId] = pdf;
      return `<button class="pdf-open-button" type="button" data-article-id="${articleId}">${pdf.title}</button>`;
    })
    .join("");
}

function renderPortfolioDetailBody(item) {
  return `
    ${renderImageStrip(item)}
    <div class="portfolio-detail-body">
      <div class="card-topline">
        <span>${portfolioCategories.find((category) => category.key === item.category)?.label || item.category}</span>
        ${item.source ? `<span>${item.source}</span>` : ""}
      </div>
      ${
        item.links?.length && item.title === "新华社英语人物专访稿"
          ? `<div class="title-link-row">${item.links
              .map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">🔗 ${link.label}</a>`)
              .join("")}</div>`
          : ""
      }
      ${
        item.category === "media"
          ? renderMediaFocus(item)
          : item.category === "ai"
            ? `<p class="ai-detail-narrative">${item.detailNarrative || item.description}</p>`
            : `<p>${item.description}</p>`
      }
      ${
        item.links?.length && item.title === "新华社《Show Me China》海外账号运营及节目创作"
          ? `<div class="work-link-panel">
              <p>部分作品链接</p>
              ${item.links.map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">🔗 ${link.label}</a>`).join("")}
            </div>`
          : ""
      }
      ${renderAutoScrollLinks(item)}
      ${
        item.category !== "media" && item.category !== "ai"
          ? `<dl class="meta-list">
              <div>
                <dt>我的角色</dt>
                <dd>${item.role}</dd>
              </div>
              ${
                !item.hideCoreIdea && item.coreIdea
                  ? `<div>
                      <dt>核心思路</dt>
                      <dd>${item.coreIdea}</dd>
                    </div>`
                  : ""
              }
              ${
                item.result && !item.hideResult
                  ? `<div>
                      <dt>成果</dt>
                      <dd>${item.result}</dd>
                    </div>`
                  : ""
              }
            </dl>`
          : ""
      }
      ${
        item.pdfs?.length
          ? `<div class="pdf-button-panel">
              <p>阅读完整文章</p>
              ${registerArticleButtons(item)}
            </div>`
          : ""
      }
      ${item.excerpt && item.category !== "media" && item.category !== "ai" ? `<blockquote>${item.excerpt}</blockquote>` : ""}
      ${
        item.links?.length && item.category !== "media"
          ? `<div class="link-row">${item.links
              .map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
              .join("")}</div>`
          : ""
      }
    </div>
  `;
}

function renderPortfolioSection(category, index) {
  const filtered = portfolioItems.filter((item) => item.category === category.key);
  if (!filtered.length) return "";

  const featured = filtered.find((item) => item.featured) || filtered[0];
  const rest = filtered.filter((item) => item.id !== featured.id);

  return `
    <article
      class="portfolio-category-panel"
      id="portfolio-section-${category.key}"
      style="--panel-index: ${index}; --panel-count: ${portfolioCategories.length};"
    >
      <div class="portfolio-panel-head">
        <div>
          <h3>${category.label}</h3>
        </div>
        <span>${String(index + 1).padStart(2, "0")} / ${String(portfolioCategories.length).padStart(2, "0")}</span>
      </div>
      <div class="portfolio-curation">
        <button class="portfolio-featured-card" id="portfolio-${featured.id}" type="button" data-portfolio-detail="${featured.id}">
          ${renderFeaturedMediaPreview(featured)}
          <span class="featured-badge">${category.label} 精选</span>
          <div class="portfolio-featured-copy">
            <p>${featured.source || category.label}</p>
            <h3>${featured.title}</h3>
            <span>${getShortSummary(featured)}</span>
            <small>查看详情</small>
          </div>
        </button>
        <div class="portfolio-mini-grid">
          ${rest
            .map(
              (item) => `
                <button class="portfolio-mini-card" id="portfolio-${item.id}" type="button" data-portfolio-detail="${item.id}">
                  ${renderPortfolioPreviewImage(item)}
                  <div>
                    <p>${item.source || category.label}</p>
                    <h3>${item.title}</h3>
                    <span>${getShortSummary(item)}</span>
                  </div>
                </button>
              `
            )
            .join("")}
        </div>
      </div>
    </article>
  `;
}

function renderPortfolio() {
  renderPortfolioTabs();
  const portfolioGrid = document.getElementById("portfolioGrid");
  state.articles = {};
  portfolioGrid.classList.remove("masonry");
  portfolioGrid.innerHTML = `
    <div class="portfolio-stack">
      ${portfolioCategories.map(renderPortfolioSection).join("")}
    </div>
  `;
  setupAutoScrollers();
}

function renderSkills() {
  const skillGrid = document.getElementById("skillGrid");
  const motion = [
    { startX: -16, startY: -14, rotate: -18, endX: -420, endY: -238 },
    { startX: 18, startY: -18, rotate: 14, endX: 378, endY: -230 },
    { startX: -6, startY: 12, rotate: -7, endX: -412, endY: 124 },
    { startX: 18, startY: 14, rotate: 19, endX: 400, endY: 122 },
    { startX: 4, startY: 22, rotate: 4, endX: 8, endY: 276 }
  ];

  state.hobbyLightboxItems = hobbies.cards
    .filter((item) => item.images?.length)
    .map((item) => ({ id: item.id, images: item.images }));

  skillGrid.className = "offwork-stage";
  skillGrid.innerHTML = `
    <div class="offwork-sticky" data-hobby-scene>
      <div class="offwork-title-layer" aria-hidden="true">
        <p>
          <strong>What I DO</strong>
          <span>at off-work time</span>
        </p>
      </div>
      <div class="offwork-card-layer" aria-label="爱好卡片">
        ${hobbies.cards
          .map((item, index) => {
            const cardMotion = motion[index];
            return `
              <button
                class="offwork-card offwork-card-${index}"
                type="button"
                data-hobby-detail="${item.id}"
                data-start-x="${cardMotion.startX}"
                data-start-y="${cardMotion.startY}"
                data-end-x="${cardMotion.endX}"
                data-end-y="${cardMotion.endY}"
                data-rotate="${cardMotion.rotate}"
                aria-label="查看${item.title}"
              >
                <img src="${item.cover}" alt="${item.title}" loading="lazy" />
                <span class="offwork-card-overlay"></span>
                <span class="offwork-browser-bar" aria-hidden="true">
                  <span></span><span></span><span></span>
                </span>
                <span class="offwork-card-copy">
                  <small>${item.label}</small>
                  <strong>${item.title}</strong>
                  <em>${item.metric}</em>
                  <b>${item.theme}</b>
                </span>
              </button>
            `;
          })
          .join("")}
      </div>
      <div class="offwork-status">
        <span>Let's connect!</span>
      </div>
    </div>
  `;
  updateHobbyScene();
  if (!state.hobbySceneReady) {
    window.addEventListener("scroll", scheduleHobbySceneUpdate, { passive: true });
    window.addEventListener("resize", scheduleHobbySceneUpdate);
    state.hobbySceneReady = true;
  }
}

function getHobbyImageOrientation(image) {
  const src = image.src.toLowerCase();
  if (src.includes("japanese") || src.includes("marathon-01") || src.includes("marathon-02")) return "portrait";
  return "landscape";
}

function openHobbyDetail(itemId) {
  const item = hobbies.cards.find((entry) => entry.id === itemId);
  if (!item) return;

  document.getElementById("portfolioDetailTitle").textContent = item.title;
  if (item.video) {
    document.querySelector(".portfolio-detail-content").innerHTML = `
      <div class="hobby-video-detail">
        <video controls autoplay playsinline>
          <source src="${item.video.src}" type="${item.video.type}" />
        </video>
      </div>
    `;
  } else {
    const orientations = item.images.map(getHobbyImageOrientation);
    const isAllLandscape = orientations.every((orientation) => orientation === "landscape");
    const isAllPortrait = orientations.every((orientation) => orientation === "portrait");
    const layoutClass = isAllLandscape ? "all-landscape" : isAllPortrait ? "all-portrait" : "mixed";
    document.querySelector(".portfolio-detail-content").innerHTML = `
      <div class="hobby-gallery-detail ${layoutClass}">
        ${item.images
          .map(
            (image) => `
              <figure>
                <img src="${image.src}" alt="${image.alt}" loading="lazy" />
              </figure>
            `
          )
          .join("")}
      </div>
    `;
  }
  document.querySelector(".portfolio-detail-modal").hidden = false;
  document.body.classList.add("locked");
}

function updateHobbyScene() {
  const stage = document.querySelector(".offwork-stage");
  const scene = document.querySelector("[data-hobby-scene]");
  if (!stage || !scene) return;

  const rect = stage.getBoundingClientRect();
  const range = Math.max(1, stage.offsetHeight - window.innerHeight);
  const progress = Math.min(1, Math.max(0, -rect.top / range));
  const eased = progress * progress * (3 - 2 * progress);
  scene.style.setProperty("--text-opacity", eased.toFixed(3));
  scene.style.setProperty("--text-scale", (0.5 + eased * 0.5).toFixed(3));

  scene.querySelectorAll(".offwork-card").forEach((card) => {
    const startX = Number(card.dataset.startX);
    const startY = Number(card.dataset.startY);
    const endX = Number(card.dataset.endX);
    const endY = Number(card.dataset.endY);
    const rotate = Number(card.dataset.rotate);
    card.style.setProperty("--tx", `${startX + (endX - startX) * eased}px`);
    card.style.setProperty("--ty", `${startY + (endY - startY) * eased}px`);
    card.style.setProperty("--rot", `${rotate}deg`);
    card.style.setProperty("--card-scale", (1 - eased * 0.2).toFixed(3));
  });
}

function scheduleHobbySceneUpdate() {
  if (state.hobbySceneTicking) return;
  state.hobbySceneTicking = true;
  window.requestAnimationFrame(() => {
    updateHobbyScene();
    state.hobbySceneTicking = false;
  });
}

function renderContact() {
  const phone = document.getElementById("contactPhone");
  const email = document.getElementById("contactEmail");
  if (phone) phone.textContent = profile.phone;
  if (email) {
    email.textContent = profile.email;
    email.href = `mailto:${profile.email}`;
  }

  document.querySelectorAll('a[download]').forEach((link) => {
    link.href = profile.resumeUrl;
  });
}

function openPortfolioDetail(itemId) {
  const item = portfolioItems.find((entry) => entry.id === itemId);
  if (!item) return;

  document.getElementById("portfolioDetailTitle").textContent = item.title;
  document.querySelector(".portfolio-detail-content").innerHTML = renderPortfolioDetailBody(item);
  document.querySelector(".portfolio-detail-modal").hidden = false;
  document.body.classList.add("locked");
  setupAutoScrollers();
}

function closePortfolioDetail() {
  document.querySelector(".portfolio-detail-modal").hidden = true;
  document.querySelector(".portfolio-detail-content").innerHTML = "";
  document.body.classList.remove("locked");
  setupAutoScrollers();
}

function openLightbox(itemId, index) {
  const item =
    portfolioItems.find((entry) => entry.id === itemId) ||
    state.hobbyLightboxItems.find((entry) => entry.id === itemId);
  if (!item) return;
  state.lightboxImages = item.images;
  state.lightboxIndex = index;
  updateLightbox();
  document.querySelector(".lightbox").hidden = false;
  document.body.classList.add("locked");
}

function closeLightbox() {
  document.querySelector(".lightbox").hidden = true;
  if (document.querySelector(".portfolio-detail-modal").hidden && document.querySelector(".article-modal").hidden) {
    document.body.classList.remove("locked");
  }
}

function updateLightbox() {
  const image = state.lightboxImages[state.lightboxIndex];
  document.querySelector(".lightbox-image").src = image.src;
  document.querySelector(".lightbox-image").alt = image.alt;
  document.querySelector(".lightbox-count").textContent = `${state.lightboxIndex + 1} / ${state.lightboxImages.length}`;
}

function stepLightbox(direction) {
  const total = state.lightboxImages.length;
  state.lightboxIndex = (state.lightboxIndex + direction + total) % total;
  updateLightbox();
}

function openArticleModal(articleId) {
  const article = state.articles[articleId];
  if (!article) return;

  const modal = document.querySelector(".article-modal");
  const pageList = document.querySelector(".article-pages");
  const absoluteUrl = new URL(article.url, window.location.href).href;
  document.getElementById("articleTitle").textContent = article.title;
  document.querySelector(".article-open-link").href = absoluteUrl;
  pageList.innerHTML = (article.pages || [])
    .map(
      (page, index) => `
        <figure class="article-page">
          <img src="${page}" alt="${article.title} 第${index + 1}页" loading="${index === 0 ? "eager" : "lazy"}" />
          <figcaption>${index + 1} / ${article.pages.length}</figcaption>
        </figure>
      `
    )
    .join("");
  pageList.scrollTop = 0;
  modal.hidden = false;
  document.body.classList.add("locked");
}

function closeArticleModal() {
  const modal = document.querySelector(".article-modal");
  modal.hidden = true;
  document.querySelector(".article-pages").innerHTML = "";
  document.querySelector(".article-open-link").href = "#";
  if (document.querySelector(".portfolio-detail-modal").hidden && document.querySelector(".lightbox").hidden) {
    document.body.classList.remove("locked");
  }
}

function setupSectionObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      const current = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (current) {
        updateSectionState(current.target.id);
      }
    },
    {
      root: null,
      rootMargin: "-38% 0px -52% 0px",
      threshold: [0.08, 0.18, 0.32, 0.5]
    }
  );

  sectionPanels.forEach((panel) => observer.observe(panel));
}

function setupHeaderScrollState() {
  const updateHeader = () => {
    header.classList.toggle("compact", window.scrollY > 24);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

function getRouteTitle(panel) {
  return panel.id === "home" ? panel.querySelector("h1") : panel.querySelector(".section-head h2");
}

function routePointForElement(element, index) {
  const rect = element.getBoundingClientRect();
  const y = rect.top + window.scrollY + rect.height * 0.54;
  const baseX = rect.left + window.scrollX - 54;
  const offset = index % 2 === 0 ? -42 : 42;
  return {
    id: element.closest("[data-section-panel]")?.id || "",
    x: Math.max(34, Math.min(document.documentElement.clientWidth - 34, baseX + offset)),
    y
  };
}

function buildRoutePath(points) {
  if (points.length < 2) return "";

  const controlScale = 0.34;
  return points.slice(0, -1).reduce((path, point, index) => {
    const previous = points[index - 1] || point;
    const next = points[index + 1];
    const afterNext = points[index + 2] || next;
    const sway = index % 2 === 0 ? 46 : -46;
    const c1 = {
      x: point.x + (next.x - previous.x) * controlScale + sway,
      y: point.y + (next.y - previous.y) * controlScale
    };
    const c2 = {
      x: next.x - (afterNext.x - point.x) * controlScale + sway,
      y: next.y - (afterNext.y - point.y) * controlScale
    };
    return `${path} C ${c1.x.toFixed(1)} ${c1.y.toFixed(1)}, ${c2.x.toFixed(1)} ${c2.y.toFixed(1)}, ${next.x.toFixed(1)} ${next.y.toFixed(1)}`;
  }, `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`);
}

function updateRouteDot(section = state.section) {
  if (!routeDot || !state.route.points.length) return;
  const point = state.route.points.find((entry) => entry.id === section) || state.route.points[0];
  routeDot.setAttribute("cx", point.x);
  routeDot.setAttribute("cy", point.y);
  routeDot.classList.add("ready");
}

function updateRouteProgress() {
  if (!routeProgress || !state.route.length) return;

  const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
  routeProgress.style.strokeDashoffset = String(state.route.length * (1 - progress));
}

function refreshRouteLine() {
  return;

  const pageWidth = Math.max(document.documentElement.scrollWidth, window.innerWidth);
  const pageHeight = Math.max(document.documentElement.scrollHeight, window.innerHeight);
  routeLayer.setAttribute("viewBox", `0 0 ${pageWidth} ${pageHeight}`);
  routeLayer.style.height = `${pageHeight}px`;

  state.route.points = Array.from(sectionPanels)
    .map(getRouteTitle)
    .filter(Boolean)
    .map(routePointForElement);

  const path = buildRoutePath(state.route.points);
  routeBase.setAttribute("d", path);
  routeProgress.setAttribute("d", path);

  state.route.length = path ? routeProgress.getTotalLength() : 0;
  routeProgress.style.strokeDasharray = String(state.route.length);
  updateRouteProgress();
  updateRouteDot();
}

function scheduleRouteRefresh() {
  window.clearTimeout(state.route.resizeTimer);
  state.route.resizeTimer = window.setTimeout(refreshRouteLine, 80);
}

function scheduleRouteProgress() {
  if (state.route.ticking) return;
  state.route.ticking = true;
  window.requestAnimationFrame(() => {
    updateRouteProgress();
    state.route.ticking = false;
  });
}

function setupRouteLine() {
  return;
}

function wireEvents() {
  sectionButtons.forEach((button) => {
    button.addEventListener("click", () => setSection(button.dataset.section));
  });

  sectionJumpButtons.forEach((button) => {
    button.addEventListener("click", () => setSection(button.dataset.sectionJump));
  });

  document.querySelectorAll("[data-portfolio-jump]").forEach((button) => {
    button.addEventListener("click", () =>
      openPortfolioCategory(button.dataset.portfolioJump, button.dataset.portfolioTarget || "")
    );
  });

  document.querySelector(".brand").addEventListener("click", (event) => {
    event.preventDefault();
    setSection("home");
  });

  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    const tabButton = event.target.closest("[data-category]");
    if (tabButton) {
      state.category = tabButton.dataset.category;
      renderPortfolio();
      scheduleRouteRefresh();
    }

    const detailButton = event.target.closest("[data-portfolio-detail]");
    if (detailButton) {
      openPortfolioDetail(detailButton.dataset.portfolioDetail);
      return;
    }

    const imageButton = event.target.closest("[data-lightbox-id]");
    if (imageButton) {
      openLightbox(imageButton.dataset.lightboxId, Number(imageButton.dataset.imageIndex));
      return;
    }

    const hobbyDetailButton = event.target.closest("[data-hobby-detail]");
    if (hobbyDetailButton) {
      openHobbyDetail(hobbyDetailButton.dataset.hobbyDetail);
      return;
    }

    const pdfButton = event.target.closest("[data-article-id]");
    if (pdfButton) {
      openArticleModal(pdfButton.dataset.articleId);
    }
  });

  document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  document.querySelector(".lightbox-prev").addEventListener("click", () => stepLightbox(-1));
  document.querySelector(".lightbox-next").addEventListener("click", () => stepLightbox(1));
  document.querySelector(".lightbox").addEventListener("click", (event) => {
    if (event.target.classList.contains("lightbox")) {
      closeLightbox();
    }
  });
  document.querySelector(".article-close").addEventListener("click", closeArticleModal);
  document.querySelector(".article-modal").addEventListener("click", (event) => {
    if (event.target.classList.contains("article-modal")) {
      closeArticleModal();
    }
  });
  document.querySelector(".portfolio-detail-close").addEventListener("click", closePortfolioDetail);
  document.querySelector(".portfolio-detail-modal").addEventListener("click", (event) => {
    if (event.target.classList.contains("portfolio-detail-modal")) {
      closePortfolioDetail();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!document.querySelector(".portfolio-detail-modal").hidden && event.key === "Escape") {
      closePortfolioDetail();
      return;
    }
    if (!document.querySelector(".article-modal").hidden && event.key === "Escape") {
      closeArticleModal();
      return;
    }
    if (document.querySelector(".lightbox").hidden) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") stepLightbox(-1);
    if (event.key === "ArrowRight") stepLightbox(1);
  });

  document.querySelectorAll('a[download]').forEach((link) => {
    link.addEventListener("click", async (event) => {
      if (window.location.protocol === "file:") {
        return;
      }

      try {
        const response = await fetch(link.href, { method: "HEAD" });
        if (!response.ok) {
          event.preventDefault();
          showToast("请先将简历 PDF 命名为 resume.pdf 并放入 assets 文件夹。");
        }
      } catch {
        event.preventDefault();
        showToast("请先将简历 PDF 命名为 resume.pdf 并放入 assets 文件夹。");
      }
    });
  });
}

renderAbout();
renderExperience();
renderPortfolio();
renderSkills();
renderContact();
updateSectionState("home");
setupSectionObserver();
setupHeaderScrollState();
setupRouteLine();
wireEvents();
