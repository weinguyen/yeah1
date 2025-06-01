// Mobile menu functionality
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileMenu = document.getElementById("mobileMenu")
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")
    })

    // Close mobile menu when clicking on a link
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active")
      })
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.remove("active")
      }
    })
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]')
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  const messageBox = document.getElementById("messageBox")
  const messageDropdown = document.getElementById("messageDropdown")
  const closeMessage = document.getElementById("closeMessage")

  if (messageBox && messageDropdown && closeMessage) {
    messageBox.addEventListener("click", () => {
      messageDropdown.classList.add("active")
    })

    closeMessage.addEventListener("click", () => {
      messageDropdown.classList.remove("active")
    })

    // Close dropdown when clicking outside
    messageDropdown.addEventListener("click", (e) => {
      if (e.target === messageDropdown) {
        messageDropdown.classList.remove("active")
      }
    })

    // Close with Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && messageDropdown.classList.contains("active")) {
        messageDropdown.classList.remove("active")
      }
    })
  }
})

function openArticle(articleId) {
  localStorage.setItem("currentArticle", articleId)
  window.location.href = "article.html"
}

function openVideo(videoId) {
  localStorage.setItem("currentVideo", videoId)
  window.location.href = "video.html"
}

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(113, 0, 209, 0.98)"
    header.style.boxShadow = "0 2px 20px rgba(113, 0, 209, 0.3)"
  } else {
    header.style.background = "var(--primary-purple)"
    header.style.boxShadow = "none"
  }
})

// Articles carousel functionality
document.addEventListener("DOMContentLoaded", () => {
  const articlesTrack = document.getElementById("articlesTrack")
  const articlesPrev = document.getElementById("articlesPrev")
  const articlesNext = document.getElementById("articlesNext")
  const articlesDots = document.getElementById("articlesDots")

  if (articlesTrack && articlesPrev && articlesNext && articlesDots) {
    const articles = articlesTrack.querySelectorAll(".article-card")
    let currentIndex = 0
    let articlesPerView = window.innerWidth > 768 ? 3 : 1 // 3 on desktop, 1 on mobile
    let maxIndex = Math.max(0, articles.length - articlesPerView)

    // Calculate article width based on screen size
    function getArticleWidth() {
      return articles[0].offsetWidth + 24
    }

    // Update responsive values
    function updateResponsiveValues() {
      articlesPerView = window.innerWidth > 768 ? 3 : 1
      maxIndex = Math.max(0, articles.length - articlesPerView)
      currentIndex = Math.min(currentIndex, maxIndex)
    }

    // Create dots
    function createDots() {
      articlesDots.innerHTML = ""
      const dotsCount = maxIndex + 1
      for (let i = 0; i <= maxIndex; i++) {
        const dot = document.createElement("div")
        dot.className = `carousel-dot ${i === currentIndex ? "active" : ""}`
        dot.addEventListener("click", () => goToSlide(i))
        articlesDots.appendChild(dot)
      }
    }

    // Update dots
    function updateDots() {
      const dots = articlesDots.querySelectorAll(".carousel-dot")
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex)
      })
    }

    // Go to specific slide
    function goToSlide(index) {
      currentIndex = Math.max(0, Math.min(index, maxIndex))
      const articleWidth = getArticleWidth()
      const translateX = -currentIndex * articleWidth
      articlesTrack.style.transform = `translateX(${translateX}px)`

      updateDots()
      updateButtons()
    }

    // Update button states
    function updateButtons() {
      articlesPrev.disabled = currentIndex === 0
      articlesNext.disabled = currentIndex === maxIndex
    }

    // Previous slide
    articlesPrev.addEventListener("click", () => {
      if (currentIndex > 0) {
        goToSlide(currentIndex - 1)
      }
    })

    // Next slide
    articlesNext.addEventListener("click", () => {
      if (currentIndex < maxIndex) {
        goToSlide(currentIndex + 1)
      }
    })

    // Handle resize
    function handleResize() {
      updateResponsiveValues()
      createDots()
      goToSlide(currentIndex)
    }

    // Initialize
    updateResponsiveValues()
    createDots()
    updateButtons()

    // Add resize listener
    window.addEventListener("resize", handleResize)

    // Remove auto-play as requested
  }
})
