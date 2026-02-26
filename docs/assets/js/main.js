/* ============================================================================
   ParentalAssist - Main JavaScript
   Site functionality including navigation, interactivity, and general utilities
   ============================================================================ */

// ============================================================================
// HAMBURGER MENU FUNCTIONALITY (Mobile Navigation)
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
      });
    });
  }
});

// ============================================================================
// LOAD VIDEOS ON HOME PAGE
// ============================================================================

function loadHomePageVideos() {
  const videoGrid = document.getElementById('videoGrid');
  
  if (!videoGrid) return; // Only run on home page

  fetch('content/data/videos.json')
    .then(response => response.json())
    .then(data => {
      const lessons = data.lessons.slice(0, 6); // Get first 6 for homepage

      videoGrid.innerHTML = '';

      lessons.forEach(lesson => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <div class="card-image" style="background: linear-gradient(135deg, ${lesson.gradient.split(',')[0]} 0%, ${lesson.gradient.split(',')[1] || lesson.gradient} 100%);">
          </div>
          <div class="card-header">
            <h3 class="card-title">${lesson.title}</h3>
          </div>
          <p class="card-text">${lesson.summary}</p>
          <div class="card-meta">
            <span>${lesson.duration}</span>
            <a href="pages/lesson.html?id=${lesson.id}" style="color: var(--primary-blue); font-weight: 600;">Watch →</a>
          </div>
        `;
        videoGrid.appendChild(card);
      });
    })
    .catch(error => console.error('Error loading videos:', error));
}

// Run on home page
if (document.getElementById('videoGrid')) {
  document.addEventListener('DOMContentLoaded', loadHomePageVideos);
}

// ============================================================================
// FORM SUBMISSION HANDLING (Netlify Forms)
// ============================================================================

function handleFormSubmit(event) {
  if (event.target.name === 'signup' || event.target.name === 'contact' || event.target.name === 'lesson-signup') {
    // Netlify will handle the submission
    // Add any custom tracking or analytics here
    console.log('Form submitted:', event.target.name);
  }
}

document.addEventListener('submit', handleFormSubmit);

// ============================================================================
// SCROLL ANIMATIONS (Optional - for future enhancements)
// ============================================================================

function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.card, .summary-box').forEach(element => {
    observer.observe(element);
  });
}

// Optional: Uncomment to enable scroll animations
// document.addEventListener('DOMContentLoaded', observeElements);

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Capitalize first letter of a word
 */
function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

/**
 * Format date to readable string
 */
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}

/**
 * Get URL parameter by name
 */
function getUrlParameter(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

/**
 * Smooth scroll to element
 */
function smoothScroll(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// ============================================================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================================================

// Add keyboard navigation support
document.addEventListener('keydown', function(event) {
  // Close mobile menu on ESC key
  const navMenu = document.getElementById('navMenu');
  if (event.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
  }

  // Smooth scroll to signup form on Ctrl/Cmd + Shift + S
  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.code === 'KeyS') {
    smoothScroll('signup-form');
  }
});

// ============================================================================
// GOOGLE ANALYTICS SETUP (Optional)
// ============================================================================

// Uncomment and add your Google Analytics ID when ready
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'YOUR_ANALYTICS_ID');
*/

// ============================================================================
// CONSENT & PRIVACY
// ============================================================================

// Simple cookie consent banner (optional)
function initCookieConsent() {
  const consentKey = 'pa-cookie-consent';
  const consentGiven = localStorage.getItem(consentKey);

  if (!consentGiven) {
    // Add cookie consent banner if needed
    // This is a placeholder for future implementation
  }
}

// document.addEventListener('DOMContentLoaded', initCookieConsent);

// ============================================================================
// ERROR LOGGING (for debugging)
// ============================================================================

window.addEventListener('error', function(event) {
  console.error('Global error:', event.error);
  // In production, you might send this to a logging service
});

window.addEventListener('unhandledrejection', function(event) {
  console.error('Unhandled promise rejection:', event.reason);
  // In production, you might send this to a logging service
});

// ============================================================================
// PERFORMANCE MONITORING (Optional)
// ============================================================================

if (window.performance && window.performance.navigation.type === 0) {
  // Page was navigated to (not reloaded)
  // Log performance metrics if needed
}

// ============================================================================
// INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
  console.log('ParentalAssist site loaded');
  // Any global initialization code here
});
