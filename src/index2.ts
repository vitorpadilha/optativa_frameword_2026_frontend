import { Pessoa } from "./pessoa.js";

document.addEventListener("DOMContentLoaded", () => {
    let p: Pessoa = new Pessoa("João", 30);
    let divApp: HTMLDivElement | null = document.getElementById("app") as HTMLDivElement | null;

    divApp!.innerHTML += `<p>${p.saudacao()}</p>`;
    

});
