/* ============================================================
   👨‍👩‍👧‍👦 PAINEL DO PAPAI — SÓ EDITE ESTE ARQUIVO!
   ------------------------------------------------------------
   Como avaliar alguém:
   1. Mude "pontos" da criança (some ou subtraia você mesmo).
   2. Adicione a ação no INÍCIO da lista "acoes" dela:
        { texto: "Obedeceu na primeira vez", pontos: +2 },
        { texto: "Brigou com o irmão", pontos: -1 },
      (só as 4 primeiras aparecem no cartão)
   3. git add . && git commit -m "estrelas" && git push
   O tablet recarrega sozinho a cada 10 minutos. ✅
   ============================================================ */

const CONFIG = {

  // Frase que aparece no topo — troque quando quiser
  fraseDoDia: "Quem obedece papai e mamãe, ganha estrelas no céu e chocolate na terra! 🍫",

  // Meta padrão de estrelas (cada filho pode ter a sua em "meta")
  metaPadrao: 30,

  filhos: [
    {
      nome: "Maryam",
      nomeArabe: "مريم",
      idade: 10,
      emoji: "🦋",
      cor: "#E85D9E",          // rosa
      pontos: 7,
      meta: 30,
      premio: "Chocolate grande 🍫",
      acoes: [
        {
          texto: "Linda, acordou bem calma.",
          pontos: +0,
        },
      ]
    },
    {
      nome: "Malik",
      nomeArabe: "مالك",
      idade: 6,
      emoji: "🦁",
      cor: "#F5921B",          // laranja
      pontos: 10,
      meta: 30,
      premio: "Brinquedo surpresa 🎁",
      acoes: [
        {
          texto: "Puxou o cabelo do Ilyaas",
          pontos: +0,
        },
      ]
    },
    {
      nome: "Ilyaas",
      nomeArabe: "الياس",
      idade: 3,
      emoji: "🚀",
      cor: "#2FA866",          // verde
      pontos: 5,
      meta: 20,               // meta menor porque é pequeno
      premio: "Sorvete 🍦",
      acoes: []
    },
    {
      nome: "Tasnim",
      nomeArabe: "تسنيم",
      idade: 2,
      emoji: "🌸",
      cor: "#8E5DE8",          // roxo
      pontos: 0,
      meta: 15,               // metinha de bebê 😄
      premio: "Docinho 🧁",
      acoes: [
        {
          texto: "gritona feia. ta perdendo hasanat",
          pontos: +0,
        },
      ]
    }
  ]
};
