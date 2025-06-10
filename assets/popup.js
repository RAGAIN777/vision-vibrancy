document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const popup = document.getElementById('popup');
    if (popup) popup.style.display = 'block';
  }, 10000);

  document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
  });
});
