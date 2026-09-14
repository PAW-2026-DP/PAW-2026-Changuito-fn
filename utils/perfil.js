const tabs = new URLSearchParams(window.location.search);
const activeTab = tabs.get("tab") || "direcciones";

document.querySelectorAll("[data-perfil-tab]").forEach((section) => {
  section.hidden = section.dataset.perfilTab !== activeTab;
});

document.querySelectorAll("[data-tab-link]").forEach((link) => {
  const isActive = link.dataset.tabLink === activeTab;
  link.setAttribute("aria-current", isActive ? "true" : "false");
});
