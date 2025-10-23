
// transizioni


window.addEventListener('load', () => {
  const cards = document.querySelectorAll('.game-card');
  cards.forEach(card => {
    card.classList.add('visible'); // aggiunge la classe che fa partire la transizione
  });
});


let sidebarOpen = false;

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebarOpen) {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }
  sidebarOpen = !sidebarOpen;
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";
  sidebarOpen = false;
}