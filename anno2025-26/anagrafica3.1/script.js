let array = [];
sessionStorage.getItem(1) !== null ? array = JSON.parse(sessionStorage.getItem(1)) : array[0] = { name: "nome", memory: "memoria", OS: "Sistema Operativo" };
sessionStorage.setItem(1, JSON.stringify(array, null, 2));
function samsung() {
    sessionStorage.setItem(0, "samsung");
    location.href = "https://rubinomatteo.github.io/lavoriScuola/anno2025-26/anagrafica3.1/pagina2/index.html";
}
function apple() {
    sessionStorage.setItem(0, "apple");
    location.href = "https://rubinomatteo.github.io/lavoriScuola/anno2025-26/anagrafica3.1/pagina2/index.html";
}
function huawei() {
    sessionStorage.setItem(0, "huawei");
    location.href = "https://rubinomatteo.github.io/lavoriScuola/anno2025-26/anagrafica3.1/pagina2/index.html";
}

const subMenus = document.querySelectorAll(".sub-menu"),
    btns = document.querySelectorAll("button"),
    sidebar = document.querySelector(".sidebar"),
    headerImg = document.querySelector(".sidebar header img");

const reset = () => {
    btns.forEach(btn => btn.classList.remove("active"));
    subMenus.forEach(menu => (menu.style.height = 0));
};

const openSubmenu = element => {
    // Non permettere di aprire submenu se la sidebar è chiusa
    if (sidebar.classList.contains("collapsed")) return;

    reset();
    element.classList.add("active");
    const sibling = element.nextElementSibling;
    const ul = sibling.querySelector("ul");
    if (sibling.clientHeight == 0) {
        sibling.style.height = `${ul.clientHeight}px`;
    } else {
        sibling.style.height = 0;
        element.classList.remove("active");
    }
};
// Toggle sidebar quando clicchi sull'immagine
headerImg.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    // Mostra/nascondi carrello in base allo stato della sidebar
    if (!sidebar.classList.contains("collapsed")) {
        vediCarrello();
    } else {
        // Svuota il carrello quando la sidebar si chiude
        document.getElementById("carrello").innerHTML = "";
    }
    // Chiudi tutti i submenu quando collassi la sidebar
    if (sidebar.classList.contains("collapsed")) {
        reset();
    }
});
function vediCarrello() {
    let carrello = document.getElementById("carrello");
    carrello.innerHTML = "";
    const output = document.createElement("div");
    output.style.overflow="auto";
    output.className = "card";
    const rawData = sessionStorage.getItem("1");
    if (rawData) {
        let dataArray;
        try {
            dataArray = JSON.parse(rawData);
        } catch (e) {
            output.innerHTML = "<p style='color: red;'>Errore nel leggere il JSON</p>";
            throw e;
        }
        if (!Array.isArray(dataArray)) {
            output.innerHTML = "<p style='color: red;'>Il dato non è un array</p>";
            return;
        }
        dataArray.slice(1).forEach((item, index) => {
            let ul = document.createElement("ul");
            ul.innerHTML += `<h4 style="margin:0 0 10px; color:#555;">Elemento ${index}</h4>`;
            Object.entries(item).forEach(([key, value]) => {
                let li = document.createElement("li");
                li.innerHTML = `<strong style="color:#667eea;">${key}:</strong> ${value}`;
                ul.appendChild(li);
            });
            output.appendChild(ul);
        });
    } else {
        output.innerHTML = `<p style="color: red;">Nessun dato ricevuto</p>`;
    }
    carrello.appendChild(output);
}
