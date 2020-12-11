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

function toggleEmailList() {
  const emailList = document.getElementById('js--emailList');
  emailList.classList.toggle('hidden');
  emailList.classList.toggle('flex');

  const openEmailListButton = document.getElementById(
    'js--emailList-open-button',
  );
  openEmailListButton.classList.toggle('hidden');

  const closeEmailListButton = document.getElementById(
    'js--emailList-close-button',
  );
  closeEmailListButton.classList.toggle('hidden');
}
