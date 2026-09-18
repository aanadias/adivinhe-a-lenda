/*PERSONAGENS COM ESPÉCIE, IMAGENS E DICAS*/
const personagens = [
    { 
        nome: "Saci", 
        regiao: "Sul/Sudeste", 
        habitat: "Mata", 
        especie: "Humanoide", 
        dica: "Possui apenas uma perna e adora fazer travessuras com moinhos de vento.",
        imagem: "https://colecionadordesacis.com.br/wp-content/uploads/2016/05/saci-giulia-bokel.jpg?w=900" 
    },
    { 
        nome: "Curupira", 
        regiao: "Norte", 
        habitat: "Mata Fechada", 
        especie: "Humanoide", 
        dica: "Tem os pés voltados para trás para despistar caçadores na floresta.",
        imagem: "https://media.licdn.com/dms/image/v2/C4D12AQF_SAcDOrz0PQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520184429260?e=2147483647&v=beta&t=4ckAcBaSe6Jyo1zX_NKd0aUqCHU3yUpZ-C6uNU6nkXA" 
    },
    { 
        nome: "Iara", 
        regiao: "Norte", 
        habitat: "Rios", 
        especie: "Híbrido", 
        dica: "Sereia que atrai os homens para o fundo dos rios com seu canto hipnotizante.",
        imagem: "https://segredosdomundo.r7.com/wp-content/uploads/2020/10/lenda-da-iara-quem-foi-a-famosa-sereia-do-folclore-brasileiro.jpg" 
    },
    { 
        nome: "Boitatá", 
        regiao: "Nacional", 
        habitat: "Campos", 
        especie: "Monstro", 
        dica: "Uma cobra gigantesca de fogo com múltiplos olhos que protege a natureza.",
        imagem: "https://i.pinimg.com/736x/76/fe/ea/76feea5db057821216faff284faae7b5.jpg" 
    },
    { 
        nome: "Cuca", 
        regiao: "Sudeste", 
        habitat: "Cavernas", 
        especie: "Híbrido", 
        dica: "Bruxa com corpo de jacaré que pega as crianças desobedientes.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF84J4dmThINOR7crKZdd8lzCOB15e9QCskWVIU6bs3wXWZphARU3B2-A4&s=10" 
    },
    { 
        nome: "Boto cor de rosa", 
        regiao: "Norte", 
        habitat: "Rios", 
        especie: "Metamorfo", 
        dica: "Transforma-se em um homem elegante vestindo chapéu para encantar moças.",
        imagem: "https://i1.sndcdn.com/avatars-EMIXLiOCQ0IRd6O8-KJgFcg-t500x500.jpg" 
    },
    { 
        nome: "Caipora", 
        regiao: "Nacional", 
        habitat: "Mata", 
        especie: "Humanoide", 
        dica: "Pequeno ser de pele escura e cabelos vermelhos que cavalga um queixada.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_fRuzk16__9gCQdVyaSMTrvL0kgUaSveD-nkR05OHZlhknAjs4pg6EBY&s=10" 
    },
    { 
        nome: "Mula sem cabeça", 
        regiao: "Nordeste/Sudeste", 
        habitat: "Campos", 
        especie: "Monstro", 
        dica: "Uma criatura que solta chamas no lugar da cabeça e galopa nas madrugadas.",
        imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjt9-4eetqnIN93k-fHU2zD5yDxH4qsuUpb5TM1UP-yLxvXr2az-yz8zius3xl_xWYX7Z2K7Peg4b3T6NvcXol6WrS485idU3O5wIAj6JVHiUUZI5zdgzOxuU5vt6xUeYh4yBYPcYwFxdfh/s1600/Mula-sem-Cabe%C3%A7a.jpg" 
    },
    { 
        nome: "Lobisomem", 
        regiao: "Nacional", 
        habitat: "Interior", 
        especie: "Metamorfo", 
        dica: "Homem que se transforma em uma besta fera nas noites de lua cheia.",
        imagem: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2020/07/licantropia.jpg" 
    },
    { 
        nome: "Matinta Pereira", 
        regiao: "Norte", 
        habitat: "Florestas", 
        especie: "Metamorfo", 
        dica: "Uma bruxa que se transforma em pássaro e dá um assobio agudo e estarrecedor.",
        imagem: "https://s2-g1.glbimg.com/nU8RfVQUA5lojT2sGAgawlBKoLU=/0x0:610x398/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/4/k/DBeaNpRce9TT3n93gmfw/matinta-perera-2.webp" 
    },
    { 
        nome: "Mapinguari", 
        regiao: "Norte", 
        habitat: "Mata Fechada", 
        especie: "Monstro", 
        dica: "Gigante cabeludo com um olho só na testa e uma boca no umbigo.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3WJaMqyG4bVNwxfcaMZvfeu43eneU7lgMXc7AAVXKBIggNtrM00UV2uo&s=10" 
    },
    { 
        nome: "Corpo-seco", 
        regiao: "Sudeste", 
        habitat: "Cemitérios", 
        especie: "Morto-Vivo", 
        dica: "Tão perverso em vida que nem Deus e nem o Diabo quiseram aceitar seu corpo.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHCC2Rfdn5vMoeYzumMEIAfut-2DLjRcCbj8oEoZMpwdD_oKDV6cmT9w&s=10" 
    },
    { 
        nome: "Caboclo D'Água", 
        regiao: "Centro Oeste/Nordeste", 
        habitat: "Rios", 
        especie: "Humanoide", 
        dica: "Monstro pequeno e musculoso que vira os barcos dos pescadores no Rio São Francisco.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUT2jw7sjTb7HCDWokKmk9KCALZ__ynf8mIaRT8_b6ozsiZR9Fgu1k7o0Q&s=10" 
    },
    { 
        nome: "Capelobo", 
        regiao: "Norte/Nordeste", 
        habitat: "Mata Fechada", 
        especie: "Híbrido", 
        dica: "Possui corpo humano e cabeça de tamanduá-bandeira.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4FHh_TCn0erUZeAmZN9MVWLJMZa0fWh0Bc0WwgVTlLn-2EjYI1RU6-0&s=10" 
    },
    { 
        nome: "Encourado", 
        regiao: "Nordeste", 
        habitat: "Sertão", 
        especie: "Fantasma", 
        dica: "Conhecido como vampiro brasileiro",
        imagem: "https://static.wikia.nocookie.net/mitologia-lendas-urbanas/images/b/b9/Encourado_02.jpg/revision/latest/thumbnail/width/360/height/360?cb=20200804021246&path-prefix=pt-br" 
    },
    { 
        nome: "Pisadeira", 
        regiao: "Sudeste", 
        habitat: "Casas", 
        especie: "Humanoide", 
        dica: "Velha esquelética de unhas compridas que pisa no peito de quem dorme de barriga cheia.",
        imagem: "https://uploads.spiritfanfiction.com/historias/capas/202308/pisadeira-25045340-050820232212.jpg" 
    },
    { 
        nome: "Perna Cabeluda", 
        regiao: "Nordeste", 
        habitat: "Ruas Escuras", 
        especie: "Monstro", 
        dica: "Uma perna gigante e muito cabeluda que corre dando saltos atrás de libertinos.",
        imagem: "https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2025/10/3010-a-perna-cabeluda-03-arte.jpg" 
    },
    { 
        nome: "Mãe do Ouro", 
        regiao: "Sudeste", 
        habitat: "Montanhas", 
        especie: "Espírito", 
        dica: "Esfera luminosa reluzente que indica os locais exatos das minas de ouro.",
        imagem: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/11/mae-de-ouro.jpg?w=1200&h=1200&crop=1" 
    },
    { 
        nome: "Bumba meu boi", 
        regiao: "Norte/Nordeste", 
        habitat: "Festas", 
        especie: "Manifestação", 
        dica: "Boi mágico que ressuscita para dançar nos festejos populares.",
        imagem: "https://alente.com.br/wp-content/uploads/2017/06/sao-luis-20-Large.jpg" 
    },
    { 
        nome: "Serpente Encantada", 
        regiao: "Nordeste", 
        habitat: "Subsolo", 
        especie: "Monstro", 
        dica: "Cobra colossal adormecida embaixo da ilha de São Luís que cresce sem parar.",
        imagem: "https://s2-g1.glbimg.com/n2sRRp6jxYUTNWDwO1i-MN6AcWs=/0x0:1280x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/A/1/x2AEkWT0SAPl99ax3sqQ/whatsapp-image-2025-10-27-at-14.17.35.jpeg" 
    },
    { 
        nome: "Ana Jansen", 
        regiao: "Nordeste", 
        habitat: "Cidades", 
        especie: "Fantasma", 
        dica: "Conduz uma carruagem fantasma assombrada pelas ruas de paralelepípedo.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/2/29/Ana_Joaquina_Jansen_Pereira%2C_grande_dona_de_terras_maranhense._Fotografia_retirada_do_acervo_pessoal_da_fam%C3%ADlia.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original" 
    },
    { 
        nome: "Bicho Papão", 
        regiao: "Nacional", 
        habitat: "Quartos", 
        especie: "Monstro", 
        dica: "Monstro lendário que se esconde embaixo das camas das crianças desobedientes.",
        imagem: "https://static.wikia.nocookie.net/ordemparanormal/images/d/d1/Arte_do_Bicho-Pap%C3%A3o_em_Livro_de_Regras.jpg/revision/latest?cb=20240829163310&path-prefix=pt-br" 
    },
    { 
        nome: "Cabra Cabriola", 
        regiao: "Nordeste", 
        habitat: "Ambiente rural/urbano", 
        especie: "Monstro", 
        dica: "É uma criatura que invade as casas à noite para assustar e devorar crianças desobedientes.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrZ-o44T6i77aLAgR0v0_Mm6FOKPNX13ayswXCo41feB3IYrz8LcLuibOH&s=10" 
    },
    { 
        nome: "Labatut", 
        regiao: "Nordeste", 
        habitat: "Sertão", 
        especie: "Monstro", 
        dica: "Monstro que retrata a extrema crueldade de um militar na época do Brasil Império.",
        imagem: "https://i.pinimg.com/564x/41/72/6a/41726ab4ac48b2430432c1c4cf73bda4.jpg" 
    },
    { 
        nome: "Gorjala", 
        regiao: "Nordeste", 
        habitat: "Sertão", 
        especie: "Humanoide", 
        dica: "Inspirado em antigas lendas europeias de ciclopes e trazido pelos colonizadores portugueses.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZHTBxDY-eWh7LFc9QQAIITmLU9FVQbk1v6LXPLRE3TeYDY-2Yy9XcUI&s=10" 
    }
];

/*ESCOLHER PERSONAGENS*/
let personagemEscolhido;

function escolherPersonagem() {
    const numeroAleatorio = Math.floor(Math.random() * personagens.length);
    personagemEscolhido = personagens[numeroAleatorio];
    console.log("Escolhido:", personagemEscolhido.nome);
    
    const elementoDica = document.querySelector("#dica");
    if (elementoDica) {
        elementoDica.textContent = "Comece chutando qualquer personagem";
    }
}

/*ELEMENTOS DO DOM*/
const campoResposta = document.querySelector("#resposta");
const btnEnviar = document.querySelector("#btnEnviar");
const barraProgresso = document.querySelector(".barra-progresso");
const contadorTentativas = document.querySelector(".barra-progresso span");
const mensagens = document.querySelector("#mensagens");
const sugestoes = document.querySelector("#sugestoes");

let tentativas = 10;

function perderTentativa() {
    tentativas--;

    contadorTentativas.textContent = `${tentativas}/10`;
    barraProgresso.style.width = `${tentativas * 10}%`;

    if (tentativas === 5) {
        const elementoDica = document.querySelector("#dica");
        if (elementoDica) {
            elementoDica.textContent = personagemEscolhido.dica;
        }
    }

    if (tentativas <= 0) {
        perdeuJogo();
    }
}

/*VERIFICAR RESPOSTA*/
function verificarResposta() {
    const chuteTexto = campoResposta.value.trim();
    if (chuteTexto === "") return;

    const chuteObjeto = personagens.find(
        p => p.nome.toLowerCase() === chuteTexto.toLowerCase()
    );

    if (!chuteObjeto) {
        alert("Personagem não encontrado na lista!");
        return;
    }

    if (chuteObjeto.nome === personagemEscolhido.nome) {
        ganharJogo();
    } else {
        perderTentativa();
        if (tentativas > 0) {
            adicionarHistoricoChute(chuteObjeto);
        }
    }

    campoResposta.value = "";
    sugestoes.innerHTML = "";
}

/* HISTÓRICO DE ERROS COM ESPÉCIE */
function adicionarHistoricoChute(chute) {
    const cardHtml = `
        <div class="cartao-personagem">
            <div class="cartao-conteudo">
                <img src="${chute.imagem}" alt="${chute.nome}" class="imagem-personagem">
                
                <div class="info-personagem">
                    <h2>${chute.nome}</h2>
                    
                    <div class="secao-atributo">
                        <span class="titulo-attr">Região</span>
                        <div class="tag-container">
                            <span class="tag ${chute.regiao === personagemEscolhido.regiao ? 'acerto' : 'erro'}">
                                ${chute.regiao === personagemEscolhido.regiao ? '✓' : '✕'} ${chute.regiao}
                            </span>
                        </div>
                    </div>

                    <div class="secao-atributo">
                        <span class="titulo-attr">Habitat</span>
                        <div class="tag-container">
                            <span class="tag ${chute.habitat === personagemEscolhido.habitat ? 'acerto' : 'erro'}">
                                ${chute.habitat === personagemEscolhido.habitat ? '✓' : '✕'} ${chute.habitat}
                            </span>
                        </div>
                    </div>

                    <div class="secao-atributo">
                        <span class="titulo-attr">Espécie</span>
                        <div class="tag-container">
                            <span class="tag ${chute.especie === personagemEscolhido.especie ? 'acerto' : 'erro'}">
                                ${chute.especie === personagemEscolhido.especie ? '✓' : '✕'} ${chute.especie}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    mensagens.insertAdjacentHTML("afterbegin", cardHtml);
}

/*QUANDO ACERTAR*/
function ganharJogo() {
    mensagens.innerHTML = `
        <div class="cartao-personagem">
            <div class="cartao-conteudo">
                <img src="${personagemEscolhido.imagem}" alt="${personagemEscolhido.nome}" class="imagem-personagem">
                <div class="info-personagem">
                    <h1 style="color: #2ecc71; font-size: 1.2rem; margin: 0;">ENCONTRADO!</h1>
                    <h2>${personagemEscolhido.nome}</h2>
                    <p style="color: #aaa; font-style: italic; margin-bottom: 10px;">"Você encontrou o personagem!"</p>

                    <div class="tag-container">
                        <span class="tag acerto">✓ Personagem Correto</span>
                    </div>

                    <button id="novoJogo">Jogar Novamente</button>
                </div>
            </div>
        </div>
    `;

    btnEnviar.disabled = true;
    campoResposta.disabled = true;
}

/*QUANDO ERRAR*/
function perdeuJogo() {
    mensagens.innerHTML = `
        <div class="cartao-personagem">
            <div class="cartao-conteudo">
                <img src="${personagemEscolhido.imagem}" alt="${personagemEscolhido.nome}" class="imagem-personagem">
                <div class="info-personagem">
                    <h2 style="color: #ff6b6b;">Falhou!</h2>
                    <p>Você gastou todas as suas tentativas. O personagem era: <strong>${personagemEscolhido.nome}</strong></p>
                    <button id="novoJogo">Tentar novamente</button>
                </div>
            </div>
        </div>
    `;

    btnEnviar.disabled = true;
    campoResposta.disabled = true;
}

/*NOVO JOGO*/
function novoJogo() {
    tentativas = 10;

    contadorTentativas.textContent = "10/10";
    barraProgresso.style.width = "100%";
    campoResposta.value = "";
    
    campoResposta.disabled = false;
    btnEnviar.disabled = false; 

    mensagens.innerHTML = "";

    escolherPersonagem();
}

/*DICAS*/
function mostrarSugestões() {
    const texto = campoResposta.value.toLowerCase();
    sugestoes.innerHTML = "";

    if (texto === "") {
        return;
    }

    const resultados = personagens.filter(personagem => 
        personagem.nome.toLowerCase().includes(texto)
    );

    resultados.forEach(personagem => {
        const opcao = document.createElement("div");
        opcao.textContent = personagem.nome;
        opcao.addEventListener("click", () => {
            campoResposta.value = personagem.nome;
            sugestoes.innerHTML = "";
        });

        sugestoes.appendChild(opcao);
    });
}

campoResposta.addEventListener("input", mostrarSugestões);

/*BOTÃO DE ENVIAR*/
btnEnviar.addEventListener("click", verificarResposta);

/* ENVIAR RESPOSTA COM A TECLA ENTER */
campoResposta.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        evento.preventDefault();
        verificarResposta();
    }
});

/*BOTÃO DE NOVO JOGO*/
mensagens.addEventListener("click", (evento) => {
    if (evento.target.id === "novoJogo") {
        novoJogo();
    }
});

/*INICIAR JOGO*/
escolherPersonagem();
