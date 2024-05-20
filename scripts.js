function submitForm() {
  const notification = document.getElementById('notification');
  notification.innerText = 'Message sent!';
  notification.classList.add('show'); // Add a class to show the notification
  setTimeout(() => {
    notification.innerText = '';
    notification.classList.remove('show'); // Remove the class to hide the notification
  }, 3000); // Clear the notification after 3 seconds
  return false; // Prevent the form from actually submitting
}

const images = document.querySelectorAll('#gallery img');
let currentImageIndex = 0;

function showImage(index) {
  images.forEach((img, idx) => {
    if (idx === index) {
      img.style.opacity = 1;
      img.style.animation = 'fadeIn 0.5s ease forwards';
      img.style.display = 'block'; // Set display to block
      img.style.margin = 'auto'; // Center the image horizontally
    } else {
      img.style.opacity = 0;
      img.style.animation = 'reverse';
      img.style.display = 'none'; // Hide other images
    }
  });
}


function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

// Show the first image initially
showImage(currentImageIndex);

