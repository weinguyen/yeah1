// Debounce utility function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle utility function
function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Cache DOM elements to avoid repeated queries
const DOMCache = {
  mobileMenuBtn: null,
  mobileMenu: null,
  mobileNavLinks: null,
  header: null,
  navLinks: null,
  messageBox: null,
  messageDropdown: null,
  closeMessage: null,
  articlesTrack: null,
  articlesPrev: null,
  articlesNext: null,
  articlesDots: null,

  init() {
    this.mobileMenuBtn = document.getElementById("mobileMenuBtn");
    this.mobileMenu = document.getElementById("mobileMenu");
    this.mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
    this.header = document.querySelector(".header");
    this.navLinks = document.querySelectorAll('a[href^="#"]');
    this.messageBox = document.getElementById("messageBox");
    this.messageDropdown = document.getElementById("messageDropdown");
    this.closeMessage = document.getElementById("closeMessage");
    this.articlesTrack = document.getElementById("articlesTrack");
    this.articlesPrev = document.getElementById("articlesPrev");
    this.articlesNext = document.getElementById("articlesNext");
    this.articlesDots = document.getElementById("articlesDots");
  }
};

// Mobile menu functionality - optimized
function initMobileMenu() {
  const { mobileMenuBtn, mobileMenu, mobileNavLinks } = DOMCache;

  if (!mobileMenuBtn || !mobileMenu) return;

  // Use event delegation for better performance
  mobileMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle("active");
  });

  // Single event listener with delegation instead of multiple listeners
  mobileMenu.addEventListener("click", (e) => {
    if (e.target.classList.contains("mobile-nav-link")) {
      mobileMenu.classList.remove("active");
    }
  });

  // Optimized outside click handler
  document.addEventListener("click", (e) => {
    if (mobileMenu.classList.contains("active") &&
      !mobileMenu.contains(e.target) &&
      !mobileMenuBtn.contains(e.target)) {
      mobileMenu.classList.remove("active");
    }
  }, { passive: true });
}

// Smooth scrolling - optimized
function initSmoothScrolling() {
  const { navLinks } = DOMCache;

  // Use event delegation on document instead of individual listeners
  document.addEventListener("click", (e) => {
    if (e.target.matches('a[href^="#"]')) {
      e.preventDefault();
      const targetId = e.target.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
}

// Message dropdown - optimized
function initMessageDropdown() {
  const { messageBox, messageDropdown, closeMessage } = DOMCache;

  if (!messageBox || !messageDropdown || !closeMessage) return;

  messageBox.addEventListener("click", () => {
    messageDropdown.classList.add("active");
  });

  closeMessage.addEventListener("click", () => {
    messageDropdown.classList.remove("active");
  });

  // Combined event listeners
  document.addEventListener("click", (e) => {
    if (messageDropdown.classList.contains("active") && e.target === messageDropdown) {
      messageDropdown.classList.remove("active");
    }
  }, { passive: true });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && messageDropdown.classList.contains("active")) {
      messageDropdown.classList.remove("active");
    }
  }, { passive: true });
}
let scrollTicking = false;

// Optimized scroll handler with throttling
const handleScroll = throttle(() => {
  const { header } = DOMCache;
  if (!header) return;

  const isScrolled = window.scrollY > 100;

  // Batch DOM updates with requestAnimationFrame
  if (!scrollTicking) {
    requestAnimationFrame(() => {
      // Use CSS classes instead of inline styles
      if (isScrolled) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      scrollTicking = false;
    });
    scrollTicking = true;
  }
}, 100); // ~60fps

// Articles carousel - heavily optimized
function initArticlesCarousel() {
  const { articlesTrack, articlesPrev, articlesNext, articlesDots } = DOMCache;

  if (!articlesTrack || !articlesPrev || !articlesNext || !articlesDots) return;

  const articles = articlesTrack.querySelectorAll(".article-card");
  if (articles.length === 0) return;

  let currentIndex = 0;
  let articlesPerView = window.innerWidth > 768 ? 3 : 1;
  let maxIndex = Math.max(0, articles.length - articlesPerView);
  let articleWidth = 0;

  // Cache article width calculation
  function calculateArticleWidth() {
    const firstArticle = articles[0];
    if (firstArticle) {
      const computedStyle = window.getComputedStyle(firstArticle);
      const margin = parseFloat(computedStyle.marginRight) || 24;
      articleWidth = firstArticle.offsetWidth + margin;
    }
  }

  // Optimized responsive update
  function updateResponsiveValues() {
    const newArticlesPerView = window.innerWidth > 768 ? 3 : 1;
    if (newArticlesPerView !== articlesPerView) {
      articlesPerView = newArticlesPerView;
      maxIndex = Math.max(0, articles.length - articlesPerView);
      currentIndex = Math.min(currentIndex, maxIndex);
      calculateArticleWidth();
    }
  }

  // Optimized dots creation with fragment
  function createDots() {
    const fragment = document.createDocumentFragment();
    const dotsCount = maxIndex + 1;

    // Clear existing dots
    articlesDots.innerHTML = "";

    for (let i = 0; i <= maxIndex; i++) {
      const dot = document.createElement("div");
      dot.className = `carousel-dot ${i === currentIndex ? "active" : ""}`;
      dot.dataset.index = i;
      fragment.appendChild(dot);
    }

    articlesDots.appendChild(fragment);
  }

  // Event delegation for dots
  articlesDots.addEventListener("click", (e) => {
    if (e.target.classList.contains("carousel-dot")) {
      const index = parseInt(e.target.dataset.index);
      goToSlide(index);
    }
  });

  // Optimized dots update
  function updateDots() {
    const dots = articlesDots.querySelectorAll(".carousel-dot");
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  // Optimized slide transition with transform3d for hardware acceleration
  function goToSlide(index) {
    const newIndex = Math.max(0, Math.min(index, maxIndex));
    if (newIndex === currentIndex) return;

    currentIndex = newIndex;
    const translateX = -currentIndex * articleWidth;

    // Use transform3d for hardware acceleration
    articlesTrack.style.transform = `translate3d(${translateX}px, 0, 0)`;

    updateDots();
    updateButtons();
  }

  // Optimized button state update
  function updateButtons() {
    articlesPrev.disabled = currentIndex === 0;
    articlesNext.disabled = currentIndex === maxIndex;

    // Use class toggles instead of disabled attribute for better styling
    articlesPrev.classList.toggle('disabled', currentIndex === 0);
    articlesNext.classList.toggle('disabled', currentIndex === maxIndex);
  }

  // Navigation handlers
  articlesPrev.addEventListener("click", () => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  });

  articlesNext.addEventListener("click", () => {
    if (currentIndex < maxIndex) {
      goToSlide(currentIndex + 1);
    }
  });

  // Debounced resize handler
  const handleResize = debounce(() => {
    updateResponsiveValues();
    calculateArticleWidth();
    createDots();
    goToSlide(currentIndex);
  }, 250);

  // Initialize
  calculateArticleWidth();
  updateResponsiveValues();
  createDots();
  updateButtons();

  // Add resize listener
  window.addEventListener("resize", handleResize, { passive: true });

  // Return cleanup function
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}

// Optimized article and video functions
function openArticle(articleId) {
  try {
    localStorage.setItem("currentArticle", articleId);
    window.location.href = "article.html";
  } catch (error) {
    console.error("Failed to save article ID:", error);
    window.location.href = "article.html";
  }
}

function openVideo(videoId) {
  try {
    localStorage.setItem("currentVideo", videoId);
    window.location.href = "video.html";
  } catch (error) {
    console.error("Failed to save video ID:", error);
    window.location.href = "video.html";
  }
}

// Main initialization with error handling
document.addEventListener("DOMContentLoaded", () => {
  try {
    // Initialize DOM cache first
    DOMCache.init();

    // Initialize all components
    initMobileMenu();
    initSmoothScrolling();
    initMessageDropdown();
    initArticlesCarousel();

    // Add scroll listener with passive option
    window.addEventListener("scroll", handleScroll, { passive: true });

  } catch (error) {
    console.error("Failed to initialize components:", error);
  }
});

// Cleanup on page unload
window.addEventListener("beforeunload", () => {
  // Remove any remaining event listeners if needed
});