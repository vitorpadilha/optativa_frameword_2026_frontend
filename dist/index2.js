import { Pessoa } from "./pessoa.js";
document.addEventListener("DOMContentLoaded", () => {
    let p = new Pessoa("João", 30);
    let divApp = document.getElementById("app");
    divApp.innerHTML += `<p>${p.saudacao()}</p>`;
});
//# sourceMappingURL=index2.js.map