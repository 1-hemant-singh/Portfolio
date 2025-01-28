window.onload = function () {
  const menuIcon = document.getElementById('menu-icon');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('close-btn');

  function toggleMenu() {
      sidebar.classList.toggle('active');
      menuIcon.classList.toggle('hidden');
      overlay.classList.toggle('active');
      closeBtn.classList.toggle('hidden');
      document.getElementById('sidebar').style.zIndex="1001";
  }

  function hideSidebar() {
      sidebar.classList.remove('active');
      menuIcon.classList.remove('hidden');
      overlay.classList.remove('active');
      closeBtn.classList.add('hidden');
      document.getElementById('sidebar').style.zIndex="-1000";

  }

  menuIcon.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', hideSidebar);
  overlay.addEventListener('click', hideSidebar);
};