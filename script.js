/**
 * EXECUTIVE PORTFOLIO JAVASCRIPT — AVINASH VERMA
 * Clean, standard, dependency-free vanilla JS
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic Current Year
  const yearElement = document.querySelector("#current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  // 3. Mobile Navigation Menu Toggle
  const mobileToggle = document.querySelector("#mobile-toggle");
  const navMenu = document.querySelector("#nav-menu");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
      mobileToggle.setAttribute("aria-expanded", String(!isExpanded));
      navMenu.classList.toggle("is-open", !isExpanded);
    });

    // Close mobile nav when clicking any link
    navMenu.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        mobileToggle.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("is-open");
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        navMenu.classList.contains("is-open") &&
        !navMenu.contains(e.target) &&
        !mobileToggle.contains(e.target)
      ) {
        mobileToggle.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("is-open");
      }
    });
  }

  // 4. Print CV Action
  const printBtn = document.querySelector("#print-cv-btn");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // 5. Active Navigation Link on Scroll (IntersectionObserver)
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if ("IntersectionObserver" in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (href === `#${currentId}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // 6. Skill Category Filtering
  const filterButtons = document.querySelectorAll(".filter-btn");
  const skillCategories = document.querySelectorAll(".skill-category-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedCategory = btn.getAttribute("data-filter");

      filterButtons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      skillCategories.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        if (selectedCategory === "all" || cardCategory === selectedCategory) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  // 7. Copy Email Address with Instant Tooltip Feedback
  const copyEmailBtn = document.querySelector("#copy-email-btn");
  const copyTooltip = document.querySelector("#copy-tooltip");
  const emailToCopy = "avivrma95@gmail.com";

  if (copyEmailBtn && copyTooltip) {
    copyEmailBtn.addEventListener("click", async () => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(emailToCopy);
        } else {
          // Fallback textarea method
          const tempInput = document.createElement("textarea");
          tempInput.value = emailToCopy;
          tempInput.style.position = "fixed";
          tempInput.style.opacity = "0";
          document.body.appendChild(tempInput);
          tempInput.focus();
          tempInput.select();
          document.execCommand("copy");
          document.body.removeChild(tempInput);
        }

        copyTooltip.textContent = "Copied!";
        copyTooltip.classList.add("show");
        setTimeout(() => {
          copyTooltip.classList.remove("show");
          setTimeout(() => {
            copyTooltip.textContent = "Copy";
          }, 200);
        }, 2200);
      } catch (err) {
        copyTooltip.textContent = "Press Ctrl+C";
        copyTooltip.classList.add("show");
        setTimeout(() => {
          copyTooltip.classList.remove("show");
        }, 2000);
      }
    });
  }

  // 8. Formal Contact Form Handler with Validation & Mailto Handshake
  const contactForm = document.querySelector("#contact-form");
  const formStatus = document.querySelector("#form-status");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Clear previous error messages
      document.querySelectorAll(".field-error").forEach((el) => (el.textContent = ""));
      if (formStatus) {
        formStatus.className = "form-status";
        formStatus.style.display = "none";
      }

      const nameInput = document.querySelector("#name");
      const emailInput = document.querySelector("#email");
      const orgInput = document.querySelector("#organization");
      const subjectInput = document.querySelector("#subject");
      const messageInput = document.querySelector("#message");
      const submitBtn = document.querySelector("#submit-btn");

      let isValid = true;

      // Validation
      if (!nameInput.value.trim()) {
        document.querySelector("#name-error").textContent = "Please provide your full name.";
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim()) {
        document.querySelector("#email-error").textContent = "Please provide your work email address.";
        isValid = false;
      } else if (!emailRegex.test(emailInput.value.trim())) {
        document.querySelector("#email-error").textContent = "Please enter a valid email address.";
        isValid = false;
      }

      if (!subjectInput.value) {
        document.querySelector("#subject-error").textContent = "Please select the nature of your inquiry.";
        isValid = false;
      }

      if (!messageInput.value.trim()) {
        document.querySelector("#message-error").textContent = "Please outline your message brief.";
        isValid = false;
      }

      if (!isValid) return;

      // Disable button during transmission simulation
      submitBtn.disabled = true;
      const originalBtnHTML = submitBtn.innerHTML;
      submitBtn.innerHTML = `<span>Processing Transmission...</span>`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;

        // Formal confirmation
        if (formStatus) {
          formStatus.className = "form-status success";
          formStatus.innerHTML = `
            <strong>Inquiry Transmitted Successfully.</strong><br/>
            Thank you, ${escapeHtml(nameInput.value.trim())}. Your message regarding "${escapeHtml(subjectInput.value)}" has been logged. Preparing direct mail client...
          `;
          formStatus.style.display = "block";
        }

        // Open default mail client with formatted email body
        const mailSubject = encodeURIComponent(`[Portfolio Inquiry] ${subjectInput.value} - ${nameInput.value.trim()}`);
        const mailBody = encodeURIComponent(
          `Hello Avinash,\n\nName: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\nOrganization: ${orgInput ? orgInput.value.trim() : "N/A"}\nInquiry Type: ${subjectInput.value}\n\nMessage:\n${messageInput.value.trim()}\n\nBest regards,\n${nameInput.value.trim()}`
        );
        window.location.href = `mailto:avivrma95@gmail.com?subject=${mailSubject}&body=${mailBody}`;

        contactForm.reset();
      }, 700);
    });
  }

  // Utility: HTML Escaping
  function escapeHtml(text) {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
  }
});
