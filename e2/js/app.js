//Hide divs/buy section
const compraDiv = document.querySelector('#finalizarCompra');
const bannerDiv = document.querySelector('.banner');
const menuDiv = document.querySelector('main');

// *** FETCHING JSON DATA *** //
//Home content
function homeProd() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', './content/home.json', true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      const produtos = JSON.parse(xhr.responseText);
      let output = `
      <div class = "organizar">
       <h4>Organizar por: </h4>
       <div>
          <a>Menor preco</a>
       </div>
       <div>
          <a>Maior preco</a>
       </div>
       <div>
          <a>Relevancia</a>
       </div>
       <div>
          <input type = "search" placeholder = "Pesquisar">
       </div>
    </div>
         `;

      output += `
             <div class = "item">
             <img src   = "${produtos[0].imagem}">
                <h3>${produtos[0].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[0].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[0].parcela}</p>
                </span>
                <a class = "homeBtn0" href = "#">Comprar</a>
            </div>

            <div class = "item">
            <img src   = "${produtos[1].imagem}">
                <h3>${produtos[1].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[1].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[1].parcela}</p>
                </span>
                <a class = "homeBtn1" href = "#">Comprar</a>
            </div>

            <div class = "item">
            <img src   = "${produtos[2].imagem}">
                <h3>${produtos[2].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[2].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[2].parcela}</p>
                </span>
                <a class = "homeBtn2" href = "#">Comprar</a>
            </div>

            <div class = "item">
            <img src   = "${produtos[3].imagem}">
                <h3>${produtos[3].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[3].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[3].parcela}</p>
                </span>
                <a class = "homeBtn3" href = "#">Comprar</a>
            </div>

            <div class = "item">
            <img src   = "${produtos[4].imagem}">
                <h3>${produtos[4].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[4].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[4].parcela}</p>
                </span>
                <a class = "homeBtn4" href = "#">Comprar</a>
            </div>

            <div class = "item">
            <img src   = "${produtos[5].imagem}">
                <h3>${produtos[5].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[5].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[5].parcela}</p>
                </span>
                <a class = "homeBtn5" href = "#">Comprar</a>
            </div>

            <div class = "item">
            <img src   = "${produtos[6].imagem}">
                <h3>${produtos[6].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[6].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[6].parcela}</p>
                </span>
                <a class = "homeBtn6" href = "#">Comprar</a>
            </div>

            <div class = "item">
            <img src   = "${produtos[7].imagem}">
                <h3>${produtos[7].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[7].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[7].parcela}</p>
                </span>
                <a class = "homeBtn7" href = "#">Comprar</a>
            </div>

            <div class = "item">
            <img src   = "${produtos[8].imagem}">
                <h3>${produtos[8].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[8].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[8].parcela}</p>
                </span>
                <a class = "homeBtn8" href = "#">Comprar</a>
            </div>
                `;

      //Product details
      document.addEventListener('click', e => {
        if (e.target.className == 'homeBtn0') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[0].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[0].titulo}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ 2025,99</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>R$ 4.399,99 no boleto bancário</p>
                <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>   
            `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'homeBtn1') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[1].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[1].titulo}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ 2025,99</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>R$ 4.399,99 no boleto bancário</p>
                <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'homeBtn2') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[2].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[2].titulo}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ 2025,99</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>R$ 4.399,99 no boleto bancário</p>
                <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'homeBtn3') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[3].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[3].titulo}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ 2025,99</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>R$ 4.399,99 no boleto bancário</p>
                <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'homeBtn4') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[4].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[4].titulo}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ 2025,99</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>R$ 4.399,99 no boleto bancário</p>
                <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'homeBtn5') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[5].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[5].titulo}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ 2025,99</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>R$ 4.399,99 no boleto bancário</p>
                <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'homeBtn6') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[6].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[6].titulo}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ 2025,99</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>R$ 4.399,99 no boleto bancário</p>
                <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'homeBtn7') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[7].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[7].titulo}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ 2025,99</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>R$ 4.399,99 no boleto bancário</p>
                <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'homeBtn8') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[8].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[8].titulo}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ 2025,99</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>R$ 4.399,99 no boleto bancário</p>
                <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        }
      });

      document.getElementById('destaques').innerHTML = output;
    } else if (xhr.status === 404) {
      document.getElementById('destaques').innerHTML = 'Produto não encontrado';
    }
  };
  xhr.send();
}
homeProd();

//Apple data
function appleProd() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', './content/apple.json', true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      const produtos = JSON.parse(xhr.responseText);
      let output = `
      <div class = "organizar">
       <h4>Organizar por: </h4>
       <div>
          <a>Menor preco</a>
       </div>
       <div>
          <a>Maior preco</a>
       </div>
       <div>
          <a>Relevancia</a>
       </div>
       <div>
          <input type = "search" placeholder = "Pesquisar">
       </div>
    </div>
         `;

      output += `
             <div class = "item">
             <img src   = "${produtos[0].imagem}">
                <h3>${produtos[0].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[0].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[0].parcela}</p>
                </span>
                <a class = "appleBtn0" href = "#">Comprar</a>
            </div>

            <div class = "item">
            <img src   = "${produtos[1].imagem}">
                <h3>${produtos[1].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[1].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[1].parcela}</p>
                </span>
                <a class = "appleBtn1" href = "#">Comprar</a>
            </div>

            <div class = "item">
            <img src   = "${produtos[2].imagem}">
                <h3>${produtos[2].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[2].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[2].parcela}</p>
                </span>
                <a class = "appleBtn2" href = "#">Comprar</a>
            </div>

            <div class = "item">
            <img src   = "${produtos[3].imagem}">
                <h3>${produtos[3].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[3].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[3].parcela}</p>
                </span>
                <a class = "appleBtn3" href = "#">Comprar</a>
            </div>

            <div class = "item">
            <img src   = "${produtos[4].imagem}">
                <h3>${produtos[4].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[4].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[4].parcela}</p>
                </span>
                <a class = "appleBtn4" href = "#">Comprar</a>
            </div>

            <div class = "item">
            <img src   = "${produtos[5].imagem}">
                <h3>${produtos[5].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[5].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[5].parcela}</p>
                </span>
                <a class = "appleBtn5" href = "#">Comprar</a>
            </div>

            <div class = "item">
            <img src   = "${produtos[6].imagem}">
                <h3>${produtos[6].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[6].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[6].parcela}</p>
                </span>
                <a class = "appleBtn6" href = "#">Comprar</a>
            </div>

            <div class = "item">
            <img src   = "${produtos[7].imagem}">
                <h3>${produtos[7].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[7].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[7].parcela}</p>
                </span>
                <a class = "appleBtn7" href = "#">Comprar</a>
            </div>
                `;

      //Product details
      document.addEventListener('click', e => {
        if (e.target.className == 'appleBtn0') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[0].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[0].titulo}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ 2025,99</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>R$ 4.399,99 no boleto bancário</p>
                <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>   
            `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'appleBtn1') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[1].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[1].titulo}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ 2025,99</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>R$ 4.399,99 no boleto bancário</p>
                <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'appleBtn2') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[2].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[2].titulo}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ 2025,99</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>R$ 4.399,99 no boleto bancário</p>
                <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'appleBtn3') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[3].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[3].titulo}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ 2025,99</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>R$ 4.399,99 no boleto bancário</p>
                <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'appleBtn4') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[4].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[4].titulo}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ 2025,99</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>R$ 4.399,99 no boleto bancário</p>
                <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'appleBtn5') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[5].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[5].titulo}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ 2025,99</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>R$ 4.399,99 no boleto bancário</p>
                <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'appleBtn6') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[6].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[6].titulo}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ 2025,99</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>R$ 4.399,99 no boleto bancário</p>
                <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'appleBtn7') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[7].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[7].titulo}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ 2025,99</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>R$ 4.399,99 no boleto bancário</p>
                <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        }
      });

      document.getElementById('destaquesApple').innerHTML = output;
    } else if (xhr.status === 404) {
      document.getElementById('destaquesApple').innerHTML =
        'Produto não encontrado';
    }
  };
  xhr.send();
}
appleProd();

// Samsung data
function samsungProd() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', './content/samsung.json', true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      const produtos = JSON.parse(xhr.responseText);
      let output = `
      <div class = "organizar">
      <h4>Organizar por: </h4>
      <div>
          <a>Menor preco</a>
      </div>
      <div>
          <a>Maior preco</a>
      </div>
      <div>
          <a>Relevancia</a>
      </div>
      <div>
          <input type = "search" placeholder = "Pesquisar">
      </div>
  </div>
      `;
      output += `
                <div class = "item">
                <img src   = "${produtos[0].imagem}">
                <h3>${produtos[0].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[0].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[0].parcela}</p>
                  </span>
                   <a class = "samsungBtn0" href = "#">Comprar</a>
                </div>

                <div class = "item">
                <img src   = "${produtos[1].imagem}">
                <h3>${produtos[1].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[1].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[1].parcela}</p>
                  </span>
                   <a class = "samsungBtn1" href = "#">Comprar</a>
                </div>

                <div class = "item">
                <img src   = "${produtos[2].imagem}">
                <h3>${produtos[2].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[2].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[2].parcela}</p>
                  </span>
                   <a class = "samsungBtn2" href = "#">Comprar</a>
                </div>

                <div class = "item">
                <img src   = "${produtos[3].imagem}">
                <h3>${produtos[3].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[3].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[3].parcela}</p>
                  </span>
                   <a class = "samsungBtn3" href = "#">Comprar</a>
                </div>

                <div class = "item">
                <img src   = "${produtos[4].imagem}">
                <h3>${produtos[4].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[4].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[4].parcela}</p>
                  </span>
                   <a class = "samsungBtn4" href = "#">Comprar</a>
                </div>

                <div class = "item">
                <img src   = "${produtos[5].imagem}">
                <h3>${produtos[5].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[5].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[5].parcela}</p>
                  </span>
                   <a class = "samsungBtn5" href = "#">Comprar</a>
                </div>

                <div class = "item">
                <img src   = "${produtos[6].imagem}">
                <h3>${produtos[6].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[6].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[6].parcela}</p>
                  </span>
                   <a class = "samsungBtn6" href = "#">Comprar</a>
                </div>

                <div class = "item">
                <img src   = "${produtos[7].imagem}">
                <h3>${produtos[7].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[7].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[7].parcela}</p>
                  </span>
              <a class = "samsungBtn7" href = "#">Comprar</a>
             </div>
             `;

      //Product details
      document.addEventListener('click', e => {
        if (e.target.className == 'samsungBtn0') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
                  <a   href  = "index.html">Voltar</a>
                  <div class = "opcoes">
                  <div>
                      <img src = "${produtos[0].imagem}">
                  </div>
                  <div class = "detalhes-pag">
                      <h1>${produtos[0].titulo}</h1>
                      <div class = "precodet">
                          <p>vendido e entregue por
                              Logo.com
                          </p>
                          <h2>R$ 2025,99</h2>
                          <p>à vista no cartão</p>
                      </div>
                      <div class = "buttonsPag">
                          <button>Comprar</button>
                          <button>Adicionar ao carrinho</button>
                      </div>
                      <br>
                      <p>R$ 4.399,99 no boleto bancário</p>
                      <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                      <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                      <div class = "frete">
                          <p>Calcular o frete: </p>
                          <input type = "text">
                          <button>OK</button>
                      </div>
                  </div>
              </div>   
                  `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'samsungBtn1') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
                  <a   href  = "index.html">Voltar</a>
                  <div class = "opcoes">
                  <div>
                      <img src = "${produtos[1].imagem}">
                  </div>
                  <div class = "detalhes-pag">
                      <h1>${produtos[1].titulo}</h1>
                      <div class = "precodet">
                          <p>vendido e entregue por
                              Logo.com
                          </p>
                          <h2>R$ 2025,99</h2>
                          <p>à vista no cartão</p>
                      </div>
                      <div class = "buttonsPag">
                          <button>Comprar</button>
                          <button>Adicionar ao carrinho</button>
                      </div>
                      <br>
                      <p>R$ 4.399,99 no boleto bancário</p>
                      <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                      <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                      <div class = "frete">
                          <p>Calcular o frete: </p>
                          <input type = "text">
                          <button>OK</button>
                      </div>
                  </div>
              </div>
              `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'samsungBtn2') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
                  <a   href  = "index.html">Voltar</a>
                  <div class = "opcoes">
                  <div>
                      <img src = "${produtos[2].imagem}">
                  </div>
                  <div class = "detalhes-pag">
                      <h1>${produtos[2].titulo}</h1>
                      <div class = "precodet">
                          <p>vendido e entregue por
                              Logo.com
                          </p>
                          <h2>R$ 2025,99</h2>
                          <p>à vista no cartão</p>
                      </div>
                      <div class = "buttonsPag">
                          <button>Comprar</button>
                          <button>Adicionar ao carrinho</button>
                      </div>
                      <br>
                      <p>R$ 4.399,99 no boleto bancário</p>
                      <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                      <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                      <div class = "frete">
                          <p>Calcular o frete: </p>
                          <input type = "text">
                          <button>OK</button>
                      </div>
                  </div>
              </div>
              `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'samsungBtn3') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
                  <a   href  = "index.html">Voltar</a>
                  <div class = "opcoes">
                  <div>
                      <img src = "${produtos[3].imagem}">
                  </div>
                  <div class = "detalhes-pag">
                      <h1>${produtos[3].titulo}</h1>
                      <div class = "precodet">
                          <p>vendido e entregue por
                              Logo.com
                          </p>
                          <h2>R$ 2025,99</h2>
                          <p>à vista no cartão</p>
                      </div>
                      <div class = "buttonsPag">
                          <button>Comprar</button>
                          <button>Adicionar ao carrinho</button>
                      </div>
                      <br>
                      <p>R$ 4.399,99 no boleto bancário</p>
                      <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                      <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                      <div class = "frete">
                          <p>Calcular o frete: </p>
                          <input type = "text">
                          <button>OK</button>
                      </div>
                  </div>
              </div>
              `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'samsungBtn4') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
                  <a   href  = "index.html">Voltar</a>
                  <div class = "opcoes">
                  <div>
                      <img src = "${produtos[4].imagem}">
                  </div>
                  <div class = "detalhes-pag">
                      <h1>${produtos[4].titulo}</h1>
                      <div class = "precodet">
                          <p>vendido e entregue por
                              Logo.com
                          </p>
                          <h2>R$ 2025,99</h2>
                          <p>à vista no cartão</p>
                      </div>
                      <div class = "buttonsPag">
                          <button>Comprar</button>
                          <button>Adicionar ao carrinho</button>
                      </div>
                      <br>
                      <p>R$ 4.399,99 no boleto bancário</p>
                      <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                      <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                      <div class = "frete">
                          <p>Calcular o frete: </p>
                          <input type = "text">
                          <button>OK</button>
                      </div>
                  </div>
              </div>
              `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'samsungBtn5') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
                  <a   href  = "index.html">Voltar</a>
                  <div class = "opcoes">
                  <div>
                      <img src = "${produtos[5].imagem}">
                  </div>
                  <div class = "detalhes-pag">
                      <h1>${produtos[5].titulo}</h1>
                      <div class = "precodet">
                          <p>vendido e entregue por
                              Logo.com
                          </p>
                          <h2>R$ 2025,99</h2>
                          <p>à vista no cartão</p>
                      </div>
                      <div class = "buttonsPag">
                          <button>Comprar</button>
                          <button>Adicionar ao carrinho</button>
                      </div>
                      <br>
                      <p>R$ 4.399,99 no boleto bancário</p>
                      <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                      <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                      <div class = "frete">
                          <p>Calcular o frete: </p>
                          <input type = "text">
                          <button>OK</button>
                      </div>
                  </div>
              </div>
              `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'samsungBtn6') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
                  <a   href  = "index.html">Voltar</a>
                  <div class = "opcoes">
                  <div>
                      <img src = "${produtos[6].imagem}">
                  </div>
                  <div class = "detalhes-pag">
                      <h1>${produtos[6].titulo}</h1>
                      <div class = "precodet">
                          <p>vendido e entregue por
                              Logo.com
                          </p>
                          <h2>R$ 2025,99</h2>
                          <p>à vista no cartão</p>
                      </div>
                      <div class = "buttonsPag">
                          <button>Comprar</button>
                          <button>Adicionar ao carrinho</button>
                      </div>
                      <br>
                      <p>R$ 4.399,99 no boleto bancário</p>
                      <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                      <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                      <div class = "frete">
                          <p>Calcular o frete: </p>
                          <input type = "text">
                          <button>OK</button>
                      </div>
                  </div>
              </div>
              `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'samsungBtn7') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
                  <a   href  = "index.html">Voltar</a>
                  <div class = "opcoes">
                  <div>
                      <img src = "${produtos[7].imagem}">
                  </div>
                  <div class = "detalhes-pag">
                      <h1>${produtos[7].titulo}</h1>
                      <div class = "precodet">
                          <p>vendido e entregue por
                              Logo.com
                          </p>
                          <h2>R$ 2025,99</h2>
                          <p>à vista no cartão</p>
                      </div>
                      <div class = "buttonsPag">
                          <button>Comprar</button>
                          <button>Adicionar ao carrinho</button>
                      </div>
                      <br>
                      <p>R$ 4.399,99 no boleto bancário</p>
                      <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
                      <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
                      <div class = "frete">
                          <p>Calcular o frete: </p>
                          <input type = "text">
                          <button>OK</button>
                      </div>
                  </div>
              </div>
              `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        }
      });

      document.getElementById('destaquesSam').innerHTML = output;
    } else if (xhr.status === 404) {
      document.getElementById('destaquesSam').innerHTML =
        'Produto não encontrado';
    }
  };
  xhr.send();
}
samsungProd();

// // Motorola data
function motoProd() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', './content/motorola.json', true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      const produtos = JSON.parse(xhr.responseText);
      let output = `
      <div class = "organizar">
      <h4>Organizar por: </h4>
      <div>
          <a>Menor preco</a>
      </div>
      <div>
          <a>Maior preco</a>
      </div>
      <div>
          <a>Relevancia</a>
      </div>
      <div>
          <input type = "search" placeholder = "Pesquisar">
      </div>
  </div>
      `;

      output += `
      <div class = "item">
      <img src   = "${produtos[0].imagem}">
      <h3>${produtos[0].titulo}</h3>
      <span class = "preco">
          <p>${produtos[0].preco}</p>
      </span>
      <span class = "parcela">
          <p>${produtos[0].parcela}</p>
        </span>
         <a class = "motoBtn0" href = "#">Comprar</a>
      </div>

      <div class = "item">
      <img src   = "${produtos[1].imagem}">
      <h3>${produtos[1].titulo}</h3>
      <span class = "preco">
          <p>${produtos[1].preco}</p>
      </span>
      <span class = "parcela">
          <p>${produtos[1].parcela}</p>
        </span>
         <a class = "motoBtn1" href = "#">Comprar</a>
      </div>

      <div class = "item">
      <img src   = "${produtos[2].imagem}">
      <h3>${produtos[2].titulo}</h3>
      <span class = "preco">
          <p>${produtos[2].preco}</p>
      </span>
      <span class = "parcela">
          <p>${produtos[2].parcela}</p>
        </span>
         <a class = "motoBtn2" href = "#">Comprar</a>
      </div>

      <div class = "item">
      <img src   = "${produtos[3].imagem}">
      <h3>${produtos[3].titulo}</h3>
      <span class = "preco">
          <p>${produtos[3].preco}</p>
      </span>
      <span class = "parcela">
          <p>${produtos[3].parcela}</p>
        </span>
         <a class = "motoBtn3" href = "#">Comprar</a>
      </div>

      <div class = "item">
      <img src   = "${produtos[4].imagem}">
      <h3>${produtos[4].titulo}</h3>
      <span class = "preco">
          <p>${produtos[4].preco}</p>
      </span>
      <span class = "parcela">
          <p>${produtos[4].parcela}</p>
        </span>
         <a class = "motoBtn4" href = "#">Comprar</a>
      </div>

      <div class = "item">
      <img src   = "${produtos[5].imagem}">
      <h3>${produtos[5].titulo}</h3>
      <span class = "preco">
          <p>${produtos[5].preco}</p>
      </span>
      <span class = "parcela">
          <p>${produtos[5].parcela}</p>
        </span>
         <a class = "motoBtn5" href = "#">Comprar</a>
      </div>

      <div class = "item">
      <img src   = "${produtos[6].imagem}">
      <h3>${produtos[6].titulo}</h3>
      <span class = "preco">
          <p>${produtos[6].preco}</p>
      </span>
      <span class = "parcela">
          <p>${produtos[6].parcela}</p>
        </span>
         <a class = "motoBtn6" href = "#">Comprar</a>
      </div>

      <div class = "item">
      <img src   = "${produtos[7].imagem}">
      <h3>${produtos[7].titulo}</h3>
      <span class = "preco">
          <p>${produtos[7].preco}</p>
      </span>
      <span class = "parcela">
          <p>${produtos[7].parcela}</p>
        </span>
    <a class = "motoBtn7" href = "#">Comprar</a>
   </div>
   `;

      //Product details
      document.addEventListener('click', e => {
        if (e.target.className == 'motoBtn0') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
        <a   href  = "index.html">Voltar</a>
        <div class = "opcoes">
        <div>
            <img src = "${produtos[0].imagem}">
        </div>
        <div class = "detalhes-pag">
            <h1>${produtos[0].titulo}</h1>
            <div class = "precodet">
                <p>vendido e entregue por
                    Logo.com
                </p>
                <h2>R$ 2025,99</h2>
                <p>à vista no cartão</p>
            </div>
            <div class = "buttonsPag">
                <button>Comprar</button>
                <button>Adicionar ao carrinho</button>
            </div>
            <br>
            <p>R$ 4.399,99 no boleto bancário</p>
            <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
            <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
            <div class = "frete">
                <p>Calcular o frete: </p>
                <input type = "text">
                <button>OK</button>
            </div>
        </div>
    </div>   
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'motoBtn1') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
        <a   href  = "index.html">Voltar</a>
        <div class = "opcoes">
        <div>
            <img src = "${produtos[1].imagem}">
        </div>
        <div class = "detalhes-pag">
            <h1>${produtos[1].titulo}</h1>
            <div class = "precodet">
                <p>vendido e entregue por
                    Logo.com
                </p>
                <h2>R$ 2025,99</h2>
                <p>à vista no cartão</p>
            </div>
            <div class = "buttonsPag">
                <button>Comprar</button>
                <button>Adicionar ao carrinho</button>
            </div>
            <br>
            <p>R$ 4.399,99 no boleto bancário</p>
            <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
            <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
            <div class = "frete">
                <p>Calcular o frete: </p>
                <input type = "text">
                <button>OK</button>
            </div>
        </div>
    </div>
    `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'motoBtn2') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
        <a   href  = "index.html">Voltar</a>
        <div class = "opcoes">
        <div>
            <img src = "${produtos[2].imagem}">
        </div>
        <div class = "detalhes-pag">
            <h1>${produtos[2].titulo}</h1>
            <div class = "precodet">
                <p>vendido e entregue por
                    Logo.com
                </p>
                <h2>R$ 2025,99</h2>
                <p>à vista no cartão</p>
            </div>
            <div class = "buttonsPag">
                <button>Comprar</button>
                <button>Adicionar ao carrinho</button>
            </div>
            <br>
            <p>R$ 4.399,99 no boleto bancário</p>
            <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
            <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
            <div class = "frete">
                <p>Calcular o frete: </p>
                <input type = "text">
                <button>OK</button>
            </div>
        </div>
    </div>
    `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'motoBtn3') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
        <a   href  = "index.html">Voltar</a>
        <div class = "opcoes">
        <div>
            <img src = "${produtos[3].imagem}">
        </div>
        <div class = "detalhes-pag">
            <h1>${produtos[3].titulo}</h1>
            <div class = "precodet">
                <p>vendido e entregue por
                    Logo.com
                </p>
                <h2>R$ 2025,99</h2>
                <p>à vista no cartão</p>
            </div>
            <div class = "buttonsPag">
                <button>Comprar</button>
                <button>Adicionar ao carrinho</button>
            </div>
            <br>
            <p>R$ 4.399,99 no boleto bancário</p>
            <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
            <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
            <div class = "frete">
                <p>Calcular o frete: </p>
                <input type = "text">
                <button>OK</button>
            </div>
        </div>
    </div>
    `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'motoBtn4') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
        <a   href  = "index.html">Voltar</a>
        <div class = "opcoes">
        <div>
            <img src = "${produtos[4].imagem}">
        </div>
        <div class = "detalhes-pag">
            <h1>${produtos[4].titulo}</h1>
            <div class = "precodet">
                <p>vendido e entregue por
                    Logo.com
                </p>
                <h2>R$ 2025,99</h2>
                <p>à vista no cartão</p>
            </div>
            <div class = "buttonsPag">
                <button>Comprar</button>
                <button>Adicionar ao carrinho</button>
            </div>
            <br>
            <p>R$ 4.399,99 no boleto bancário</p>
            <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
            <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
            <div class = "frete">
                <p>Calcular o frete: </p>
                <input type = "text">
                <button>OK</button>
            </div>
        </div>
    </div>
    `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'motoBtn5') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
        <a   href  = "index.html">Voltar</a>
        <div class = "opcoes">
        <div>
            <img src = "${produtos[5].imagem}">
        </div>
        <div class = "detalhes-pag">
            <h1>${produtos[5].titulo}</h1>
            <div class = "precodet">
                <p>vendido e entregue por
                    Logo.com
                </p>
                <h2>R$ 2025,99</h2>
                <p>à vista no cartão</p>
            </div>
            <div class = "buttonsPag">
                <button>Comprar</button>
                <button>Adicionar ao carrinho</button>
            </div>
            <br>
            <p>R$ 4.399,99 no boleto bancário</p>
            <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
            <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
            <div class = "frete">
                <p>Calcular o frete: </p>
                <input type = "text">
                <button>OK</button>
            </div>
        </div>
    </div>
    `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'motoBtn6') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
        <a   href  = "index.html">Voltar</a>
        <div class = "opcoes">
        <div>
            <img src = "${produtos[6].imagem}">
        </div>
        <div class = "detalhes-pag">
            <h1>${produtos[6].titulo}</h1>
            <div class = "precodet">
                <p>vendido e entregue por
                    Logo.com
                </p>
                <h2>R$ 2025,99</h2>
                <p>à vista no cartão</p>
            </div>
            <div class = "buttonsPag">
                <button>Comprar</button>
                <button>Adicionar ao carrinho</button>
            </div>
            <br>
            <p>R$ 4.399,99 no boleto bancário</p>
            <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
            <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
            <div class = "frete">
                <p>Calcular o frete: </p>
                <input type = "text">
                <button>OK</button>
            </div>
        </div>
    </div>
    `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'motoBtn7') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
        <a   href  = "index.html">Voltar</a>
        <div class = "opcoes">
        <div>
            <img src = "${produtos[7].imagem}">
        </div>
        <div class = "detalhes-pag">
            <h1>${produtos[7].titulo}</h1>
            <div class = "precodet">
                <p>vendido e entregue por
                    Logo.com
                </p>
                <h2>R$ 2025,99</h2>
                <p>à vista no cartão</p>
            </div>
            <div class = "buttonsPag">
                <button>Comprar</button>
                <button>Adicionar ao carrinho</button>
            </div>
            <br>
            <p>R$ 4.399,99 no boleto bancário</p>
            <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
            <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
            <div class = "frete">
                <p>Calcular o frete: </p>
                <input type = "text">
                <button>OK</button>
            </div>
        </div>
    </div>
    `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        }
      });

      document.getElementById('destaquesMoto').innerHTML = output;
    } else if (xhr.status === 404) {
      document.getElementById('destaquesMoto').innerHTML =
        'Produto não encontrado';
    }
  };
  xhr.send();
}
motoProd();

// Asus data
function asusProd() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', './content/asus.json', true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      const produtosAsus = JSON.parse(xhr.responseText);
      let output = `
      <div class = "organizar">
      <h4>Organizar por: </h4>
      <div>
          <a>Menor preco</a>
      </div>
      <div>
          <a>Maior preco</a>
      </div>
      <div>
          <a>Relevancia</a>
      </div>
      <div>
          <input type = "search" placeholder = "Pesquisar">
      </div>
  </div>
      `;

      output += `
      <div class = "item">
      <img src   = "${produtosAsus[0].imagem}">
      <h3>${produtosAsus[0].titulo}</h3>
      <span class = "preco">
          <p>${produtosAsus[0].preco}</p>
      </span>
      <span class = "parcela">
          <p>${produtosAsus[0].parcela}</p>
        </span>
         <a class = "asusBtn0" href = "#">Comprar</a>
      </div>

      <div class = "item">
      <img src   = "${produtosAsus[1].imagem}">
      <h3>${produtosAsus[1].titulo}</h3>
      <span class = "preco">
          <p>${produtosAsus[1].preco}</p>
      </span>
      <span class = "parcela">
          <p>${produtosAsus[1].parcela}</p>
        </span>
         <a class = "asusBtn1" href = "#">Comprar</a>
      </div>

      <div class = "item">
      <img src   = "${produtosAsus[2].imagem}">
      <h3>${produtosAsus[2].titulo}</h3>
      <span class = "preco">
          <p>${produtosAsus[2].preco}</p>
      </span>
      <span class = "parcela">
          <p>${produtosAsus[2].parcela}</p>
        </span>
         <a class = "asusBtn2" href = "#">Comprar</a>
      </div>

      <div class = "item">
      <img src   = "${produtosAsus[3].imagem}">
      <h3>${produtosAsus[3].titulo}</h3>
      <span class = "preco">
          <p>${produtosAsus[3].preco}</p>
      </span>
      <span class = "parcela">
          <p>${produtosAsus[3].parcela}</p>
      </span>
      <a class = "asusBtn3" href = "#">Comprar</a>
      </div>
   `;

      //Product details
      document.addEventListener('click', e => {
        if (e.target.className == 'asusBtn0') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
        <a   href  = "index.html">Voltar</a>
        <div class = "opcoes">
        <div>
            <img src = "${produtosAsus[0].imagem}">
        </div>
        <div class = "detalhes-pag">
            <h1>${produtosAsus[0].titulo}</h1>
            <div class = "precodet">
                <p>vendido e entregue por
                    Logo.com
                </p>
                <h2>R$ 2025,99</h2>
                <p>à vista no cartão</p>
            </div>
            <div class = "buttonsPag">
                <button>Comprar</button>
                <button>Adicionar ao carrinho</button>
            </div>
            <br>
            <p>R$ 4.399,99 no boleto bancário</p>
            <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
            <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
            <div class = "frete">
                <p>Calcular o frete: </p>
                <input type = "text">
                <button>OK</button>
            </div>
        </div>
    </div>   
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'asusBtn1') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
        <a   href  = "index.html">Voltar</a>
        <div class = "opcoes">
        <div>
            <img src = "${produtosAsus[1].imagem}">
        </div>
        <div class = "detalhes-pag">
            <h1>${produtosAsus[1].titulo}</h1>
            <div class = "precodet">
                <p>vendido e entregue por
                    Logo.com
                </p>
                <h2>R$ 2025,99</h2>
                <p>à vista no cartão</p>
            </div>
            <div class = "buttonsPag">
                <button>Comprar</button>
                <button>Adicionar ao carrinho</button>
            </div>
            <br>
            <p>R$ 4.399,99 no boleto bancário</p>
            <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
            <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
            <div class = "frete">
                <p>Calcular o frete: </p>
                <input type = "text">
                <button>OK</button>
            </div>
        </div>
    </div>
    `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'asusBtn2') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
        <a   href  = "index.html">Voltar</a>
        <div class = "opcoes">
        <div>
            <img src = "${produtosAsus[2].imagem}">
        </div>
        <div class = "detalhes-pag">
            <h1>${produtosAsus[2].titulo}</h1>
            <div class = "precodet">
                <p>vendido e entregue por
                    Logo.com
                </p>
                <h2>R$ 2025,99</h2>
                <p>à vista no cartão</p>
            </div>
            <div class = "buttonsPag">
                <button>Comprar</button>
                <button>Adicionar ao carrinho</button>
            </div>
            <br>
            <p>R$ 4.399,99 no boleto bancário</p>
            <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
            <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
            <div class = "frete">
                <p>Calcular o frete: </p>
                <input type = "text">
                <button>OK</button>
            </div>
        </div>
    </div>
    `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'asusBtn3') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'flex';

          let saida = `
        <a   href  = "index.html">Voltar</a>
        <div class = "opcoes">
        <div>
            <img src = "${produtosAsus[3].imagem}">
        </div>
        <div class = "detalhes-pag">
            <h1>${produtosAsus[3].titulo}</h1>
            <div class = "precodet">
                <p>vendido e entregue por
                    Logo.com
                </p>
                <h2>R$ 2025,99</h2>
                <p>à vista no cartão</p>
            </div>
            <div class = "buttonsPag">
                <button>Comprar</button>
                <button>Adicionar ao carrinho</button>
            </div>
            <br>
            <p>R$ 4.399,99 no boleto bancário</p>
            <p>R$ 4.399,99 no cartão de crédito em até 10x de R$ 439,99 s/ juros</p>
            <p>R$ 3.959,99 no cartão em até 12x de R$ 329,99 s/ juros</p>
            <div class = "frete">
                <p>Calcular o frete: </p>
                <input type = "text">
                <button>OK</button>
            </div>
        </div>
    </div>
    `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        }
      });

      document.getElementById('destaquesAsus').innerHTML = output;
    } else if (xhr.status === 404) {
      document.getElementById('destaquesAsus').innerHTML =
        'Produto não encontrado';
    }
  };
  xhr.send();
}
asusProd();

// Modal
const modalButton = document.querySelectorAll('[data-modal-target]');
const closeModalBtn = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

modalButton.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalBtn.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  });
});

const openModal = modal => {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
};

const closeModal = modal => {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
};

// Sticky Nav
const navBar = document.getElementsByClassName('topo-nav');
window.onscroll = function sticky() {
  if (window.pageYOffset > navBar[0].offsetTop) {
    navBar[0].classList.add('sticky-nav');
  } else {
    navBar[0].classList.remove('sticky-nav');
  }
};

// Login transition
const loginDiv = document.querySelector('.login-form');
const registrarDiv = document.querySelector('.registrar-form');
const recuperarDiv = document.querySelector('.recuperar-senha');
const voltarLink = document.querySelectorAll('.voltarLink');

document.querySelector('#registrarLink').addEventListener('click', () => {
  document.querySelector('.title').innerHTML = 'Cadastro';
  loginDiv.style.display = 'none';
  registrarDiv.style.display = 'flex';
});

document.querySelector('#recuperarLink').addEventListener('click', () => {
  document.querySelector('.title').innerHTML = 'Recuperar senha';
  loginDiv.style.display = 'none';
  recuperarDiv.style.display = 'flex';
});

voltarLink.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.title').innerHTML = 'Login';
    registrarDiv.style.display = 'none';
    recuperarDiv.style.display = 'none';
    loginDiv.style.display = 'flex';
  });
});
