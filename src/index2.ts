

document.addEventListener("DOMContentLoaded", () => {

    let campoNome: HTMLInputElement | null = document.getElementById("nome") as HTMLInputElement | null;
    let campoIdade: HTMLInputElement | null = document.getElementById("idade") as HTMLInputElement | null;
    let btnAdicionar: HTMLButtonElement | null = document.getElementById("btnAdicionar") as HTMLButtonElement | null;

    btnAdicionar?.addEventListener("click", (event) => {
        event.preventDefault(); // Evita o envio do formulário
    fetch("http://localhost:3000/pessoas", {
        method: "POST",
        headers: {  
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: campoNome?.value,
            idade: parseInt(campoIdade?.value || "0")
        })
    })    .then(response => response.json())
    .then(data => {
        console.log("Cadastrado com Sucesso:", data);
    })
    .catch(error => {
        console.error("Erro ao enviar dados:", error);
    });
});

});
