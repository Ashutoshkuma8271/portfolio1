/**
 * ZEENAT KURESHI - Luxury Web Platform Application Logic
 * Supports smooth scroll-spy, adaptive navbar interactions, responsive mobile drawer,
 * VIP lead qualification, YouTube modal player, and real-time CMS simulator.
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollSpyAndNavbar();
  initModals();
  initForms();
  initCMSDemo();
  initVideoPlayer();
});

// Scroll-Spy & Sticky Navbar
function initScrollSpyAndNavbar() {
  const navbar = document.getElementById('siteNavbar');
  const navLinks = document.querySelectorAll('.navbar-links .nav-item-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggle = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  // Handle Navbar background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll-Spy
    let currentSectionId = '';
    const scrollPos = window.scrollY + 130;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  // Mobile Menu Toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileDrawer.classList.toggle('open');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileDrawer.classList.remove('open');
      }
    });
  }
}

// Global function to close mobile menu
function closeMobileNav() {
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileDrawer) {
    mobileDrawer.classList.remove('open');
  }
}

// Modals System
function initModals() {
  const triggers = document.querySelectorAll('[data-modal-open]');
  const closeButtons = document.querySelectorAll('[data-modal-close]');
  const overlayModals = document.querySelectorAll('.modal-backdrop-wrap');

  triggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileNav();
      const modalId = btn.getAttribute('data-modal-open');
      const targetModal = document.getElementById(modalId);
      if (targetModal) {
        targetModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      overlayModals.forEach(m => m.classList.remove('active'));
      document.body.style.overflow = 'auto';
    });
  });

  overlayModals.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });
}

function closeAllModals() {
  document.querySelectorAll('.modal-backdrop-wrap').forEach(m => m.classList.remove('active'));
  document.body.style.overflow = 'auto';
}

// Interactive Forms & Feedback
function initForms() {
  // VIP Investment Form
  const vipForm = document.getElementById('vipInquiryForm');
  if (vipForm) {
    vipForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('vipName')?.value || 'VIP Client';
      const ticket = document.getElementById('vipTicket')?.value || 'Not Specified';
      const region = document.getElementById('vipRegion')?.value || 'GCC - India';
      const scope = document.getElementById('vipScope')?.value || 'Strategic Trade';

      showToast(`VIP Inquiry Received: Thank you, ${name}. Our Executive Secretariat will coordinate with you.`);
      vipForm.reset();
      closeAllModals();

      // Open WhatsApp pre-filled chat option
      const message = `Hello Zeenat Kureshi Secretariat, I am ${name} seeking advisory for ${scope} (Ticket Size: ${ticket}, Region: ${region}).`;
      const whatsappUrl = `https://wa.me/971500000000?text=${encodeURIComponent(message)}`;
      console.log('WhatsApp Lead Ready:', whatsappUrl);
    });
  }

  // General Contact Form
  const contactForm = document.getElementById('generalContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const sender = document.getElementById('contactName')?.value || 'Partner';
      showToast(`Message Transmitted: Thank you, ${sender}. Your communication is prioritized.`);
      contactForm.reset();
    });
  }

  // Women Cell Membership Form
  const womenForm = document.getElementById('womenCellForm');
  if (womenForm) {
    womenForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Application Submitted: Welcome to the All India Jamiatul Quresh Women Cell initiatives.');
      womenForm.reset();
      closeAllModals();
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Subscribed: You will receive diplomatic releases and cinema dispatches.');
      newsletterForm.reset();
    });
  }
}

// Interactive Video Player Modal
function initVideoPlayer() {
  const videoTriggers = document.querySelectorAll('[data-video-title]');
  const videoModal = document.getElementById('videoModal');
  const videoTitleEl = document.getElementById('modalVideoTitle');
  const videoIframe = document.getElementById('modalVideoIframe');

  videoTriggers.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-video-title') || 'Featured Interview';
      const videoSrc = card.getAttribute('data-video-src') || 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ';

      if (videoTitleEl) videoTitleEl.innerText = title;
      if (videoIframe) videoIframe.src = videoSrc;
      if (videoModal) {
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Stop video playback when closing
  document.querySelectorAll('#videoModal [data-modal-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (videoIframe) videoIframe.src = '';
    });
  });
}

// Admin CMS Simulator
function initCMSDemo() {
  const cmsForm = document.getElementById('cmsPublishForm');
  const pressFeed = document.getElementById('pressDynamicFeed');

  if (cmsForm && pressFeed) {
    cmsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('cmsTitle').value;
      const category = document.getElementById('cmsCategory').value;
      const snippet = document.getElementById('cmsSnippet').value;

      const newCard = document.createElement('div');
      newCard.className = 'media-press-card';
      newCard.innerHTML = `
        <div class="media-card-content" style="padding-top: 24px;">
          <div>
            <div class="gold-badge" style="margin-bottom: 12px;">${category} • Just Published</div>
            <h4 style="font-size: 1.15rem; color: #fff; margin-bottom: 8px;">${title}</h4>
            <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 14px;">${snippet}</p>
          </div>
          <span style="color: var(--gold-glow); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700;">Live via Executive CMS &bull; Synced</span>
        </div>
      `;

      pressFeed.prepend(newCard);
      showToast(`CMS Live Update: "${title}" broadcasted successfully.`);
      cmsForm.reset();
      closeAllModals();
    });
  }
}

// Toast Notifications
function showToast(message) {
  let container = document.getElementById('toastStack');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastStack';
    container.className = 'toast-stack';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `<strong>VIP Notification:</strong> ${message}`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}
