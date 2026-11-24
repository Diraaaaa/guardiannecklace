// Navigation between pages
function navigateTo(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  
  // Show selected page
  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.classList.add('active');
  }
  
  // Update bottom nav active state
  updateBottomNav(pageId);
}

// Update bottom navigation active state
function updateBottomNav(pageId) {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => item.classList.remove('active'));
  
  // Map pages to nav items
  const navMapping = {
    'homePage': 0,
    'trackingPage': 1,
    'historyPage': 2,
    'notificationsPage': 3,
    'settingsPage': 4,
    'deviceStatusPage': 4
  };
  
  const activeIndex = navMapping[pageId];
  if (activeIndex !== undefined) {
    const allNavItems = Array.from(document.querySelectorAll('.nav-item'));
    const activePage = document.querySelector('.page.active');
    if (activePage) {
      const pageNavItems = activePage.querySelectorAll('.nav-item');
      if (pageNavItems[activeIndex]) {
        pageNavItems[activeIndex].classList.add('active');
      }
    }
  }
}

// Show emergency modal
function showEmergencyModal() {
  const modal = document.getElementById('emergencyModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// Close emergency modal
function closeEmergencyModal() {
  const modal = document.getElementById('emergencyModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
  const modal = document.getElementById('emergencyModal');
  if (modal && event.target === modal) {
    closeEmergencyModal();
  }
});

// Simulate emergency alert (for demo purposes)
function simulateEmergencyAlert() {
  setTimeout(() => {
    showEmergencyModal();
  }, 5000);
}

// Auto-update last update time
function updateLastUpdateTime() {
  const timeElements = document.querySelectorAll('.stat-value');
  timeElements.forEach(el => {
    if (el.textContent.includes('menit yang lalu')) {
      // Keep it at "2 menit yang lalu" for demo
    }
  });
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  // Start on login page
  navigateTo('loginPage');
  
  // Update time periodically
  setInterval(updateLastUpdateTime, 60000);
  
  // Uncomment to test emergency modal
  // simulateEmergencyAlert();
});