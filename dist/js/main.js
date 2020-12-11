function toggleSidebar() {
  const userDropdown = document.getElementById('js--user-dropdown');
  const sidebar = document.getElementById('js--sidebar');
  sidebar.classList.toggle('translate-x-0');
  sidebar.classList.toggle('-translate-x-full');
  userDropdown.classList.toggle('translate-x-0');
  userDropdown.classList.toggle('-translate-x-full');

  const sidebarContentOverlay = document.getElementById(
    'js--sidebar-content-overlay',
  );
  sidebarContentOverlay.classList.toggle('hidden');
}
