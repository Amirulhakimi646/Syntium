// JavaScript for interactive elements

document.addEventListener('DOMContentLoaded', function() {
    const deviceItems = document.querySelectorAll('.device-item');
  
    deviceItems.forEach(item => {
      item.addEventListener('click', function() {
        // Remove active class from all items
        deviceItems.forEach(item => {
          item.classList.remove('active');
        });
  
        // Add active class to the clicked item
        this.classList.add('active');
      });
    });
  });
  