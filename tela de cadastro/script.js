const nome = document.getElementById("nome");
const cpf = document.getElementById("cpf");
const email = document.getElementById("email");
const botao = document.getElementById("btnCadastrar");
const modal = document.getElementById("modalSucesso");
const fecharModal = document.getElementById("fecharModal");

function verificarCadastro() {
    if (nome.value.trim() !== "" && cpf.value.trim() !== "" && email.value.trim() !== "") {
        modal.classList.remove("hidden");
    } else {
        alert("Preencha todos os campos antes de continuar.");
    }
}

botao.addEventListener("click", verificarCadastro);
fecharModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});
