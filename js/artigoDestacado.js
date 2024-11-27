document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const artigo = urlParams.get("artigo");

    if (artigo) {
        const artigoElement = document.querySelector(`.artigo-content-${artigo}`);
        if (artigoElement) {
            artigoElement.scrollIntoView({ behavior: "smooth" });
            artigoElement.classList.add("destaque"); 
        }
    }
});
