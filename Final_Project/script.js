let darkmode = localStorage.getItem("darkmode");
const html = document.getElementById("html");
const colorToggle = document.getElementById("colorToggle");

const enableDarkmode = () => {
    html.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("darkmode", "active");
};
const disableDarkmode = () => {
    html.setAttribute("data-bs-theme", "light");
    localStorage.setItem("darkmode", null)
};

if (darkmode === "active") {
    colorToggle.checked = true;
    enableDarkmode();
}

colorToggle.addEventListener("change", () => {
    colorToggle.checked ? enableDarkmode() : disableDarkmode();
});