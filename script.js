/* =========================
   WHATSAPP — AGENDAMENTO
========================= */
function enviarWhatsApp() {
    console.log("Função chamada"); // DEBUG

    const nome = document.getElementById("nome").value.trim();
    const crianca = document.getElementById("crianca").value.trim();
    const idade = document.getElementById("idade").value;
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Campos obrigatórios (email não é obrigatório)
    if (!nome || !crianca || !idade || !telefone) {
        alert("Por favor, preencha os campos obrigatórios.");
        return;
    }

    if (idade < 0 || idade > 99) {
        alert("A idade deve estar entre 0 e 99 anos.");
        return;
    }

    // Monta a mensagem
    const texto =
`Olá! Gostaria de agendar um atendimento.

👤 Responsável: ${nome}
🧒 Criança: ${crianca}
🎂 Idade: ${idade} anos
📞 Telefone: ${telefone}
📧 Email: ${email || "Não informado"}

💬 Mensagem:
${mensagem || "Sem mensagem adicional."}`;

    const numeroWhatsApp = "5562986213535";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
}

/* =========================
   DOM CONTENT LOADED
========================= */
document.addEventListener("DOMContentLoaded", () => {

    /* ===== FAQ — INTERAÇÃO ===== */
    const perguntas = document.querySelectorAll(".faq-pergunta");

    perguntas.forEach((botao) => {
        botao.addEventListener("click", () => {
            const item = botao.parentElement;
            const ativo = item.classList.contains("ativo");

            // Fecha todos
            document.querySelectorAll(".faq-item").forEach((el) => {
                el.classList.remove("ativo");
            });

            // Abre apenas o clicado
            if (!ativo) {
                item.classList.add("ativo");
            }
        });
    });

    /* ===== WHATSAPP — BOTÃO FIXO ===== */
    if (!document.querySelector(".whatsapp-fixo")) {
        const btnWhatsapp = document.createElement("a");
        btnWhatsapp.href = "https://wa.me/5562986213535";
        btnWhatsapp.target = "_blank";
        btnWhatsapp.classList.add("whatsapp-fixo");

        const img = document.createElement("img");
        img.src = "./imagens/whatsapp.png"; // confirme o caminho da imagem
        img.alt = "WhatsApp";

        btnWhatsapp.appendChild(img);
        document.body.appendChild(btnWhatsapp);
    }

});
