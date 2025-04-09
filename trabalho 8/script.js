document.addEventListener("DOMContentLoaded", function () {
  // 👵👵👵 Nossas deliciosas receitas da vovó! 👵👵👵
  const receitas = [
    {
      nome: "Feijoada",
      imagem: "https://img.saborosos.com.br/imagens/feijoada-1.jpg",
      ingredientes: "Feijão preto, carne seca, costelinha, linguiça calabresa, bacon, alho, cebola, folhas de louro",
      preparo: "Cozinhe o feijão com carinho, frite as carnes até ficarem douradinhas, junte tudo no feijão e deixe apurar por um bom tempo, mexendo de vez em quando. Tempere com aquele toque especial da vovó!"
    },
    {
      nome: "Strogonoff de Frango",
      imagem: "https://www.receitasfaceisepraticas.com.br/wp-content/uploads/2020/02/s.jpg",
      ingredientes: "Frango em cubinhos, creme de leite fresco, ketchup para dar um toque adocicado, mostarda para um saborzinho especial, cebola picadinha, alho amassadinho, sal e pimenta do reino a gosto, um fiozinho de óleo para refogar.",
      preparo: "Refogue o frango com alho e cebola até ficar branquinho. Adicione o ketchup e a mostarda, misture bem. Por último, coloque o creme de leite e cozinhe em fogo baixo até engrossar, com aquele cheirinho que lembra a casa da vovó."
    },
    {
      nome: "Cachorro Quente",
      imagem: "https://tse4.mm.bing.net/th?id=OIP.NHG_lgxpYx8RXPjuKtHMTwHaFj&pid=Api&P=0&h=180",
      ingredientes: "Pão macio, salsicha de boa qualidade, molho de tomate caseiro, cebola picadinha para dar um crocante, milho verdinho, ervilha fresquinha, batata palha para finalizar.",
      preparo: "Cozinhe a salsicha no molho de tomate com a cebola, o milho e a ervilha, deixando tudo bem saboroso. Sirva no pão com bastante batata palha por cima!"
    },
    {
      nome: "Bolo de Chocolate",
      imagem: "https://vovopalmirinha.com.br/wp-content/uploads/2016/05/bolo-chocolate-simples-1.jpg",
      ingredientes: "Farinha de trigo peneirada, chocolate em pó da melhor qualidade, açúcar para adoçar a vida, ovos fresquinhos, leite morno, óleo suave, fermento para crescer com alegria, e uma cobertura de chocolate de dar água na boca!",
      preparo: "Misture todos os ingredientes secos primeiro, depois adicione os molhados com carinho. Leve ao forno pré-aquecido por uns 40 minutinhos, ou até dourar. Depois de frio, cubra com aquela cobertura especial."
    },
    {
      nome: "Bolo de Cenoura",
      imagem: "https://assets.unileversolutions.com/recipes-v2/214580.jpg",
      ingredientes: "Cenouras fresquinhas raladas, ovos caipiras, óleo de girassol, açúcar cristal, farinha de trigo, fermento em pó, e uma cobertura de chocolate cremosa.",
      preparo: "Bata no liquidificador a cenoura, os ovos e o óleo até ficar uma mistura homogênea. Em uma tigela, misture os secos e depois adicione a mistura do liquidificador. Asse em forno médio por cerca de 40 minutos. Cubra com chocolate e aproveite!"
    },
    {
      nome: "Bolo de Fubá",
      imagem: "https://www.gabriellfreitass.com.br/wp-content/uploads/2020/04/Image-2-2048x1536.jpeg",
      ingredientes: "Fubá mimosa, farinha de trigo, açúcar refinado, ovos grandes, leite integral, óleo, fermento químico.",
      preparo: "Misture todos os ingredientes em uma tigela com amor e delicadeza até obter uma massa lisinha. Despeje em uma forma untada e enfarinhada e leve ao forno para assar até ficar douradinho e com aquele cheirinho gostoso de bolo da vovó."
    },
    {
      nome: "Torta de Frango",
      imagem: "https://www.rondoniaovivo.com/imagensNoticias/torta.jpg?id=258678",
      ingredientes: "Frango desfiado e temperado com carinho, massa de torta caseira (ou comprada, sem problemas!), milho cozido, ervilha em lata, requeijão cremoso, e temperinhos frescos como cheiro-verde.",
      preparo: "Refogue o frango desfiado com os temperos da sua preferência. Forre uma forma com parte da massa, coloque o recheio de frango misturado com milho, ervilha e requeijão. Cubra com o restante da massa e leve ao forno para assar até ficar dourada e irresistível."
    }
  ];

  // Função mágica para mostrar as receitas na tela
  function exibirReceitas(lista) {
    const container = document.getElementById("recipeContainer");
    // Limpa o que já estava lá para mostrar as novas receitas
    container.innerHTML = "";
    // Para cada receita da nossa lista...
    lista.forEach(receita => {
      // Criamos um "cartãozinho" para a receita
      const card = document.createElement("div");
      card.className = "recipe-card";
      // Colocamos a imagem e o nome da receita no cartão
      card.innerHTML = `
        <img src="${receita.imagem}" alt="${receita.nome}" class="recipe-img">
        <h2>${receita.nome}</h2>
      `;
      // Quando alguém clica no cartão...
      card.addEventListener("click", () => {
        // Mostramos os ingredientes e o modo de preparo em um alerta simpático
        alert(`🍽 Ingredientes:\n${receita.ingredientes}\n\n👨‍🍳 Modo de Preparo:\n${receita.preparo}`);
      });
      // Adicionamos o cartão da receita ao nosso container principal
      container.appendChild(card);
    });
  }

  // Pegamos a barra de pesquisa
  const searchBar = document.getElementById("searchBar");
  // Ficamos de olho quando alguém digita algo na barra de pesquisa
  searchBar.addEventListener("input", () => {
    // Pegamos o que foi digitado e transformamos em letras minúsculas para facilitar a busca
    const termo = searchBar.value.toLowerCase();
    // Filtramos nossas receitas, procurando por aquelas que têm o termo de busca no nome
    const filtradas = receitas.filter(r => r.nome.toLowerCase().includes(termo));
    // Mostramos apenas as receitas que encontramos
    exibirReceitas(filtradas);
    // Rolamos suavemente para o topo da página para mostrar os resultados
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Para começar, mostramos todas as receitas!
  exibirReceitas(receitas);
});

// Quiz de Feedback
const quizBtn = document.getElementById("quizBtn");
const quizForm = document.getElementById("quizForm");

quizBtn.addEventListener("click", () => {
  quizForm.style.display = quizForm.style.display === "none" ? "block" : "none";
});

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("🎉 Obrigado pelo seu feedback! Ele é muito importante para a vovó 👵❤️");
  quizForm.reset();
  quizForm.style.display = "none";
});

