//Hide divs/buy section
const compraDiv = document.querySelector('#finalizarCompra');
const bannerDiv = document.querySelector('.banner');
const menuDiv = document.querySelector('main');
// const tableDiv = document.querySelector('.table');

// *** FETCHING JSON DATA *** //
//Home content
function homeProd() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', './content/home.json', true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      const produtos = JSON.parse(xhr.responseText);
      let output = `
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

            <div class = "item">
            <img src   = "${produtos[9].imagem}">
                <h3>${produtos[9].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[9].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[9].parcela}</p>
                </span>
                <a class = "asusBtn0" href = "#">Comprar</a>
            </div>

            <div class = "item">
            <img src   = "${produtos[10].imagem}">
                <h3>${produtos[10].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[10].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[10].parcela}</p>
                </span>
                <a class = "asusBtn1" href = "#">Comprar</a>
            </div>

            <div class = "item">
            <img src   = "${produtos[11].imagem}">
                <h3>${produtos[11].titulo}</h3>
                <span class = "preco">
                    <p>${produtos[11].preco}</p>
                </span>
                <span class = "parcela">
                    <p>${produtos[11].parcela}</p>
                </span>
                <a class = "asusBtn2" href = "#">Comprar</a>
            </div>
                `;

      //Product details
      document.addEventListener('click', e => {
        if (e.target.className == 'homeBtn0' || e.target.className == 'iphone7') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[0].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[0].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>${produtos[0].preco}</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>${produtos[0].preco} no boleto bancário</p>
                <p>${produtos[0].preco} no cartão de crédito em até 10x de R$ 139,99 s/ juros</p>
                <p>R$ 1659,99 no cartão Logo.com em até 12x de R$ 59,99 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
         </div>   

         <div class = "fichaTec">
         <table>
           <tr>
            <th>Ficha técnica</th>
           </tr>
           <tr>
             <td>Marca:</td>
             <td>${produtos[0].marca}</td>
           </tr>
           <tr>
             <td>Modelo:</td>
             <td>${produtos[0].modelo}</td>
           </tr>
           <tr>
             <td>Cor:</td>
             <td>${produtos[0].cor}</td>
           </tr>
           <tr>
             <td>Chip:</td>
             <td>${produtos[0].chip}</td>
           </tr>
           <tr>
             <td>Quantidades Chip: </td>
             <td>${produtos[0].qtd_chip}</td>
           </tr>
           <tr>
             <td>Memória:</td>
             <td>${produtos[0].memoria_interna}</td>
           </tr>
           <tr>
             <td>RAM:</td>
             <td>${produtos[0].memoria_ram}</td>
           </tr>
           <tr>
             <td>Processador:</td>
             <td>${produtos[0].processador}</td>
           </tr>
           <tr>
             <td>Sistema:</td>
             <td>${produtos[0].sistema}</td>
           </tr>
           <tr>
             <td>Versão:</td>
             <td>${produtos[0].versao}</td>
           </tr>
           <tr>
             <td>Tela:</td>
             <td>${produtos[0].tipo_tela}</td>
           </tr>
           <tr>
             <td>Tamanho:</td>
             <td>${produtos[0].tamanho_display}</td>
           </tr>
           <tr>
             <td>Resolução:</td>
             <td>${produtos[0].resolucao}</td>
           </tr>
           <tr>
             <td>Camera Traseira:</td>
             <td>${produtos[0].camera_traseira}</td>
           </tr>
           <tr>
             <td>Camera Frontal:</td>
             <td>${produtos[0].camera_frontal}</td>
           </tr>
         </table>
       </div>
            `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'homeBtn1' || e.target.className == 'iphoneX') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[1].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[1].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>${produtos[1].preco}</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>${produtos[1].preco} no boleto bancário</p>
                <p>${produtos[1].preco} no cartão de crédito em até 10x de R$ 220,99 s/ juros</p>
                <p>R$ 1899,90 no cartão Logo.com em até 12x de R$ 49,60 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>

        <div class = "fichaTec">
         <table>
           <tr>
            <th>Ficha técnica</th>
           </tr>
           <tr>
             <td>Marca:</td>
             <td>${produtos[1].marca}</td>
           </tr>
           <tr>
             <td>Modelo:</td>
             <td>${produtos[1].modelo}</td>
           </tr>
           <tr>
             <td>Cor:</td>
             <td>${produtos[1].cor}</td>
           </tr>
           <tr>
             <td>Chip:</td>
             <td>${produtos[1].chip}</td>
           </tr>
           <tr>
             <td>Quantidades Chip: </td>
             <td>${produtos[1].qtd_chip}</td>
           </tr>
           <tr>
             <td>Memória:</td>
             <td>${produtos[1].memoria_interna}</td>
           </tr>
           <tr>
             <td>RAM:</td>
             <td>${produtos[1].memoria_ram}</td>
           </tr>
           <tr>
             <td>Processador:</td>
             <td>${produtos[1].processador}</td>
           </tr>
           <tr>
             <td>Sistema:</td>
             <td>${produtos[1].sistema}</td>
           </tr>
           <tr>
             <td>Versão:</td>
             <td>${produtos[1].versao}</td>
           </tr>
           <tr>
             <td>Tela:</td>
             <td>${produtos[1].tipo_tela}</td>
           </tr>
           <tr>
             <td>Tamanho:</td>
             <td>${produtos[1].tamanho_display}</td>
           </tr>
           <tr>
             <td>Resolução:</td>
             <td>${produtos[1].resolucao}</td>
           </tr>
           <tr>
             <td>Camera Traseira:</td>
             <td>${produtos[1].camera_traseira}</td>
           </tr>
           <tr>
             <td>Camera Frontal:</td>
             <td>${produtos[1].camera_frontal}</td>
           </tr>
         </table>
       </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'homeBtn2' || e.target.className == 'motoMaxx') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[2].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[2].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>${produtos[2].preco}</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>${produtos[2].preco} no boleto bancário</p>
                <p>${produtos[2].preco} no cartão de crédito em até 10x de R$ 139,99 s/ juros</p>
                <p>R$ 1668,90 no cartão Logo.com em até 12x de R$ 49,90 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>

        <div class = "fichaTec">
         <table>
           <tr>
            <th>Ficha técnica</th>
           </tr>
           <tr>
             <td>Marca:</td>
             <td>${produtos[2].marca}</td>
           </tr>
           <tr>
             <td>Modelo:</td>
             <td>${produtos[2].modelo}</td>
           </tr>
           <tr>
             <td>Cor:</td>
             <td>${produtos[2].cor}</td>
           </tr>
           <tr>
             <td>Chip:</td>
             <td>${produtos[2].chip}</td>
           </tr>
           <tr>
             <td>Quantidades Chip: </td>
             <td>${produtos[2].qtd_chip}</td>
           </tr>
           <tr>
             <td>Memória:</td>
             <td>${produtos[2].memoria_interna}</td>
           </tr>
           <tr>
             <td>RAM:</td>
             <td>${produtos[2].memoria_ram}</td>
           </tr>
           <tr>
             <td>Processador:</td>
             <td>${produtos[2].processador}</td>
           </tr>
           <tr>
             <td>Sistema:</td>
             <td>${produtos[2].sistema}</td>
           </tr>
           <tr>
             <td>Versão:</td>
             <td>${produtos[2].versao}</td>
           </tr>
           <tr>
             <td>Tela:</td>
             <td>${produtos[2].tipo_tela}</td>
           </tr>
           <tr>
             <td>Tamanho:</td>
             <td>${produtos[2].tamanho_display}</td>
           </tr>
           <tr>
             <td>Resolução:</td>
             <td>${produtos[2].resolucao}</td>
           </tr>
           <tr>
             <td>Camera Traseira:</td>
             <td>${produtos[2].camera_traseira}</td>
           </tr>
           <tr>
             <td>Camera Frontal:</td>
             <td>${produtos[2].camera_frontal}</td>
           </tr>
         </table>
       </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'homeBtn3' || e.target.className == 'galaxys8') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[3].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[3].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>${produtos[3].preco}</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>${produtos[3].preco} no boleto bancário</p>
                <p>${produtos[3].preco}no cartão de crédito em até 10x de R$ 120,99 s/ juros</p>
                <p>R$ 1689,80 no cartão Logo.com em até 12x de R$ 50,90 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>

        <div class = "fichaTec">
         <table>
           <tr>
            <th>Ficha técnica</th>
           </tr>
           <tr>
             <td>Marca:</td>
             <td>${produtos[3].marca}</td>
           </tr>
           <tr>
             <td>Modelo:</td>
             <td>${produtos[3].modelo}</td>
           </tr>
           <tr>
             <td>Cor:</td>
             <td>${produtos[3].cor}</td>
           </tr>
           <tr>
             <td>Chip:</td>
             <td>${produtos[3].chip}</td>
           </tr>
           <tr>
             <td>Quantidades Chip: </td>
             <td>${produtos[3].qtd_chip}</td>
           </tr>
           <tr>
             <td>Memória:</td>
             <td>${produtos[3].memoria_interna}</td>
           </tr>
           <tr>
             <td>RAM:</td>
             <td>${produtos[3].memoria_ram}</td>
           </tr>
           <tr>
             <td>Processador:</td>
             <td>${produtos[3].processador}</td>
           </tr>
           <tr>
             <td>Sistema:</td>
             <td>${produtos[3].sistema}</td>
           </tr>
           <tr>
             <td>Versão:</td>
             <td>${produtos[3].versao}</td>
           </tr>
           <tr>
             <td>Tela:</td>
             <td>${produtos[3].tipo_tela}</td>
           </tr>
           <tr>
             <td>Tamanho:</td>
             <td>${produtos[3].tamanho_display}</td>
           </tr>
           <tr>
             <td>Resolução:</td>
             <td>${produtos[3].resolucao}</td>
           </tr>
           <tr>
             <td>Camera Traseira:</td>
             <td>${produtos[3].camera_traseira}</td>
           </tr>
           <tr>
             <td>Camera Frontal:</td>
             <td>${produtos[3].camera_frontal}</td>
           </tr>
         </table>
       </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'homeBtn4' || e.target.className == 'motoG5') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[4].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[4].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>${produtos[4].preco}</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>${produtos[4].preco} no boleto bancário</p>
                <p>${produtos[4].preco} no cartão de crédito em até 10x de R$ 80,95 s/ juros</p>
                <p>R$ 790,00 no cartão Logo.com em até 12x de R$ 39,90 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>

        <div class = "fichaTec">
         <table>
           <tr>
            <th>Ficha técnica</th>
           </tr>
           <tr>
             <td>Marca:</td>
             <td>${produtos[4].marca}</td>
           </tr>
           <tr>
             <td>Modelo:</td>
             <td>${produtos[4].modelo}</td>
           </tr>
           <tr>
             <td>Cor:</td>
             <td>${produtos[4].cor}</td>
           </tr>
           <tr>
             <td>Chip:</td>
             <td>${produtos[4].chip}</td>
           </tr>
           <tr>
             <td>Quantidades Chip: </td>
             <td>${produtos[4].qtd_chip}</td>
           </tr>
           <tr>
             <td>Memória:</td>
             <td>${produtos[4].memoria_interna}</td>
           </tr>
           <tr>
             <td>RAM:</td>
             <td>${produtos[4].memoria_ram}</td>
           </tr>
           <tr>
             <td>Processador:</td>
             <td>${produtos[4].processador}</td>
           </tr>
           <tr>
             <td>Sistema:</td>
             <td>${produtos[4].sistema}</td>
           </tr>
           <tr>
             <td>Versão:</td>
             <td>${produtos[4].versao}</td>
           </tr>
           <tr>
             <td>Tela:</td>
             <td>${produtos[4].tipo_tela}</td>
           </tr>
           <tr>
             <td>Tamanho:</td>
             <td>${produtos[4].tamanho_display}</td>
           </tr>
           <tr>
             <td>Resolução:</td>
             <td>${produtos[4].resolucao}</td>
           </tr>
           <tr>
             <td>Camera Traseira:</td>
             <td>${produtos[4].camera_traseira}</td>
           </tr>
           <tr>
             <td>Camera Frontal:</td>
             <td>${produtos[4].camera_frontal}</td>
           </tr>
         </table>
       </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'homeBtn5' || e.target.className == 'galaxys7') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[5].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[5].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>${produtos[5].preco}</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>${produtos[5].preco} no boleto bancário</p>
                <p>${produtos[5].preco} no cartão de crédito em até 10x de R$ 130,90 s/ juros</p>
                <p>R$ 1489,90 no cartão Logo.com em até 12x de R$ 65,60 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>

        <div class = "fichaTec">
         <table>
           <tr>
            <th>Ficha técnica</th>
           </tr>
           <tr>
             <td>Marca:</td>
             <td>${produtos[5].marca}</td>
           </tr>
           <tr>
             <td>Modelo:</td>
             <td>${produtos[5].modelo}</td>
           </tr>
           <tr>
             <td>Cor:</td>
             <td>${produtos[5].cor}</td>
           </tr>
           <tr>
             <td>Chip:</td>
             <td>${produtos[5].chip}</td>
           </tr>
           <tr>
             <td>Quantidades Chip: </td>
             <td>${produtos[5].qtd_chip}</td>
           </tr>
           <tr>
             <td>Memória:</td>
             <td>${produtos[5].memoria_interna}</td>
           </tr>
           <tr>
             <td>RAM:</td>
             <td>${produtos[5].memoria_ram}</td>
           </tr>
           <tr>
             <td>Processador:</td>
             <td>${produtos[5].processador}</td>
           </tr>
           <tr>
             <td>Sistema:</td>
             <td>${produtos[5].sistema}</td>
           </tr>
           <tr>
             <td>Versão:</td>
             <td>${produtos[5].versao}</td>
           </tr>
           <tr>
             <td>Tela:</td>
             <td>${produtos[5].tipo_tela}</td>
           </tr>
           <tr>
             <td>Tamanho:</td>
             <td>${produtos[5].tamanho_display}</td>
           </tr>
           <tr>
             <td>Resolução:</td>
             <td>${produtos[5].resolucao}</td>
           </tr>
           <tr>
             <td>Camera Traseira:</td>
             <td>${produtos[5].camera_traseira}</td>
           </tr>
           <tr>
             <td>Camera Frontal:</td>
             <td>${produtos[5].camera_frontal}</td>
           </tr>
         </table>
       </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'homeBtn6' || e.target.className == 'iphoneSE') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[6].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[6].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>${produtos[6].preco}</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>${produtos[6].preco} no boleto bancário</p>
                <p>${produtos[6].preco} no cartão de crédito em até 10x de R$ 110,99 s/ juros</p>
                <p>R$ 1159,99 no cartão Logo.com em até 12x de R$ 39,90 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>

        <div class = "fichaTec">
         <table>
           <tr>
            <th>Ficha técnica</th>
           </tr>
           <tr>
             <td>Marca:</td>
             <td>${produtos[6].marca}</td>
           </tr>
           <tr>
             <td>Modelo:</td>
             <td>${produtos[6].modelo}</td>
           </tr>
           <tr>
             <td>Cor:</td>
             <td>${produtos[6].cor}</td>
           </tr>
           <tr>
             <td>Chip:</td>
             <td>${produtos[6].chip}</td>
           </tr>
           <tr>
             <td>Quantidades Chip: </td>
             <td>${produtos[6].qtd_chip}</td>
           </tr>
           <tr>
             <td>Memória:</td>
             <td>${produtos[6].memoria_interna}</td>
           </tr>
           <tr>
             <td>RAM:</td>
             <td>${produtos[6].memoria_ram}</td>
           </tr>
           <tr>
             <td>Processador:</td>
             <td>${produtos[6].processador}</td>
           </tr>
           <tr>
             <td>Sistema:</td>
             <td>${produtos[6].sistema}</td>
           </tr>
           <tr>
             <td>Versão:</td>
             <td>${produtos[6].versao}</td>
           </tr>
           <tr>
             <td>Tela:</td>
             <td>${produtos[6].tipo_tela}</td>
           </tr>
           <tr>
             <td>Tamanho:</td>
             <td>${produtos[6].tamanho_display}</td>
           </tr>
           <tr>
             <td>Resolução:</td>
             <td>${produtos[6].resolucao}</td>
           </tr>
           <tr>
             <td>Camera Traseira:</td>
             <td>${produtos[6].camera_traseira}</td>
           </tr>
           <tr>
             <td>Camera Frontal:</td>
             <td>${produtos[6].camera_frontal}</td>
           </tr>
         </table>
       </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'homeBtn7' || e.target.className == 'motoXstyle') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[7].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[7].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>${produtos[7].preco}</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>${produtos[7].preco} no boleto bancário</p>
                <p>${produtos[7].preco} no cartão de crédito em até 10x de R$ 236,99 s/ juros</p>
                <p>R$ 1899,00 no cartão Logo.com em até 12x de R$ 49,90 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>

        <div class = "fichaTec">
         <table>
           <tr>
            <th>Ficha técnica</th>
           </tr>
           <tr>
             <td>Marca:</td>
             <td>${produtos[7].marca}</td>
           </tr>
           <tr>
             <td>Modelo:</td>
             <td>${produtos[7].modelo}</td>
           </tr>
           <tr>
             <td>Cor:</td>
             <td>${produtos[7].cor}</td>
           </tr>
           <tr>
             <td>Chip:</td>
             <td>${produtos[7].chip}</td>
           </tr>
           <tr>
             <td>Quantidades Chip: </td>
             <td>${produtos[7].qtd_chip}</td>
           </tr>
           <tr>
             <td>Memória:</td>
             <td>${produtos[7].memoria_interna}</td>
           </tr>
           <tr>
             <td>RAM:</td>
             <td>${produtos[7].memoria_ram}</td>
           </tr>
           <tr>
             <td>Processador:</td>
             <td>${produtos[7].processador}</td>
           </tr>
           <tr>
             <td>Sistema:</td>
             <td>${produtos[7].sistema}</td>
           </tr>
           <tr>
             <td>Versão:</td>
             <td>${produtos[7].versao}</td>
           </tr>
           <tr>
             <td>Tela:</td>
             <td>${produtos[7].tipo_tela}</td>
           </tr>
           <tr>
             <td>Tamanho:</td>
             <td>${produtos[7].tamanho_display}</td>
           </tr>
           <tr>
             <td>Resolução:</td>
             <td>${produtos[7].resolucao}</td>
           </tr>
           <tr>
             <td>Camera Traseira:</td>
             <td>${produtos[7].camera_traseira}</td>
           </tr>
           <tr>
             <td>Camera Frontal:</td>
             <td>${produtos[7].camera_frontal}</td>
           </tr>
         </table>
       </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'homeBtn8' || e.target.className == 'galaxys6') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[8].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[8].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>${produtos[8].preco}</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>${produtos[8].preco} no boleto bancário</p>
                <p>${produtos[8].preco} no cartão de crédito em até 10x de R$ 59,90 s/ juros</p>
                <p>R$ 550,96 no cartão Logo.com em até 12x de R$ 25,90 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>

        <div class = "fichaTec">
        <table>
          <tr>
           <th>Ficha técnica</th>
          </tr>
          <tr>
            <td>Marca:</td>
            <td>${produtos[8].marca}</td>
          </tr>
          <tr>
            <td>Modelo:</td>
            <td>${produtos[8].modelo}</td>
          </tr>
          <tr>
            <td>Cor:</td>
            <td>${produtos[8].cor}</td>
          </tr>
          <tr>
            <td>Chip:</td>
            <td>${produtos[8].chip}</td>
          </tr>
          <tr>
            <td>Quantidades Chip: </td>
            <td>${produtos[8].qtd_chip}</td>
          </tr>
          <tr>
            <td>Memória:</td>
            <td>${produtos[8].memoria_interna}</td>
          </tr>
          <tr>
            <td>RAM:</td>
            <td>${produtos[8].memoria_ram}</td>
          </tr>
          <tr>
            <td>Processador:</td>
            <td>${produtos[8].processador}</td>
          </tr>
          <tr>
            <td>Sistema:</td>
            <td>${produtos[8].sistema}</td>
          </tr>
          <tr>
            <td>Versão:</td>
            <td>${produtos[8].versao}</td>
          </tr>
          <tr>
            <td>Tela:</td>
            <td>${produtos[8].tipo_tela}</td>
          </tr>
          <tr>
            <td>Tamanho:</td>
            <td>${produtos[8].tamanho_display}</td>
          </tr>
          <tr>
            <td>Resolução:</td>
            <td>${produtos[8].resolucao}</td>
          </tr>
          <tr>
            <td>Camera Traseira:</td>
            <td>${produtos[8].camera_traseira}</td>
          </tr>
          <tr>
            <td>Camera Frontal:</td>
            <td>${produtos[8].camera_frontal}</td>
          </tr>
        </table>
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
          compraDiv.style.display = 'block';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[0].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[0].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>${produtos[0].preco}</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>${produtos[0].preco} no boleto bancário</p>
                <p>${produtos[0].preco} no cartão de crédito em até 10x de R$ 220,99 s/ juros</p>
                <p>R$ 1899,90 no cartão Logo.com em até 12x de R$ 49,60 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>   

        <div class = "fichaTec">
        <table>
          <tr>
           <th>Ficha técnica</th>
          </tr>
          <tr>
            <td>Marca:</td>
            <td>${produtos[0].marca}</td>
          </tr>
          <tr>
            <td>Modelo:</td>
            <td>${produtos[0].modelo}</td>
          </tr>
          <tr>
            <td>Cor:</td>
            <td>${produtos[0].cor}</td>
          </tr>
          <tr>
            <td>Chip:</td>
            <td>${produtos[0].chip}</td>
          </tr>
          <tr>
            <td>Quantidades Chip: </td>
            <td>${produtos[0].qtd_chip}</td>
          </tr>
          <tr>
            <td>Memória:</td>
            <td>${produtos[0].memoria_interna}</td>
          </tr>
          <tr>
            <td>RAM:</td>
            <td>${produtos[0].memoria_ram}</td>
          </tr>
          <tr>
            <td>Processador:</td>
            <td>${produtos[0].processador}</td>
          </tr>
          <tr>
            <td>Sistema:</td>
            <td>${produtos[0].sistema}</td>
          </tr>
          <tr>
            <td>Versão:</td>
            <td>${produtos[0].versao}</td>
          </tr>
          <tr>
            <td>Tela:</td>
            <td>${produtos[0].tipo_tela}</td>
          </tr>
          <tr>
            <td>Tamanho:</td>
            <td>${produtos[0].tamanho_display}</td>
          </tr>
          <tr>
            <td>Resolução:</td>
            <td>${produtos[0].resolucao}</td>
          </tr>
          <tr>
            <td>Camera Traseira:</td>
            <td>${produtos[0].camera_traseira}</td>
          </tr>
          <tr>
            <td>Camera Frontal:</td>
            <td>${produtos[0].camera_frontal}</td>
          </tr>
        </table>
      </div>
            `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'appleBtn1' || e.target.className == 'iphone6s') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[1].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[1].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>${produtos[1].preco}</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>${produtos[1].preco} no boleto bancário</p>
                <p>${produtos[1].preco} no cartão de crédito em até 10x de R$ 130,99 s/ juros</p>
                <p>R$ 1389,99 no cartão Logo.com em até 12x de R$ 50,90 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>

        <div class = "fichaTec">
        <table>
          <tr>
           <th>Ficha técnica</th>
          </tr>
          <tr>
            <td>Marca:</td>
            <td>${produtos[1].marca}</td>
          </tr>
          <tr>
            <td>Modelo:</td>
            <td>${produtos[1].modelo}</td>
          </tr>
          <tr>
            <td>Cor:</td>
            <td>${produtos[1].cor}</td>
          </tr>
          <tr>
            <td>Chip:</td>
            <td>${produtos[1].chip}</td>
          </tr>
          <tr>
            <td>Quantidades Chip: </td>
            <td>${produtos[1].qtd_chip}</td>
          </tr>
          <tr>
            <td>Memória:</td>
            <td>${produtos[1].memoria_interna}</td>
          </tr>
          <tr>
            <td>RAM:</td>
            <td>${produtos[1].memoria_ram}</td>
          </tr>
          <tr>
            <td>Processador:</td>
            <td>${produtos[1].processador}</td>
          </tr>
          <tr>
            <td>Sistema:</td>
            <td>${produtos[1].sistema}</td>
          </tr>
          <tr>
            <td>Versão:</td>
            <td>${produtos[1].versao}</td>
          </tr>
          <tr>
            <td>Tela:</td>
            <td>${produtos[1].tipo_tela}</td>
          </tr>
          <tr>
            <td>Tamanho:</td>
            <td>${produtos[1].tamanho_display}</td>
          </tr>
          <tr>
            <td>Resolução:</td>
            <td>${produtos[1].resolucao}</td>
          </tr>
          <tr>
            <td>Camera Traseira:</td>
            <td>${produtos[1].camera_traseira}</td>
          </tr>
          <tr>
            <td>Camera Frontal:</td>
            <td>${produtos[1].camera_frontal}</td>
          </tr>
        </table>
      </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'appleBtn2') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[2].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[2].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>${produtos[2].preco}</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>${produtos[2].preco} no boleto bancário</p>
                <p>${produtos[2].preco} no cartão de crédito em até 10x de R$ 109,99 s/ juros</p>
                <p>R$ 1259,99 no cartão Logo.com em até 12x de R$ 39,90 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>

        <div class = "fichaTec">
        <table>
          <tr>
           <th>Ficha técnica</th>
          </tr>
          <tr>
            <td>Marca:</td>
            <td>${produtos[2].marca}</td>
          </tr>
          <tr>
            <td>Modelo:</td>
            <td>${produtos[2].modelo}</td>
          </tr>
          <tr>
            <td>Cor:</td>
            <td>${produtos[2].cor}</td>
          </tr>
          <tr>
            <td>Chip:</td>
            <td>${produtos[2].chip}</td>
          </tr>
          <tr>
            <td>Quantidades Chip: </td>
            <td>${produtos[2].qtd_chip}</td>
          </tr>
          <tr>
            <td>Memória:</td>
            <td>${produtos[2].memoria_interna}</td>
          </tr>
          <tr>
            <td>RAM:</td>
            <td>${produtos[2].memoria_ram}</td>
          </tr>
          <tr>
            <td>Processador:</td>
            <td>${produtos[2].processador}</td>
          </tr>
          <tr>
            <td>Sistema:</td>
            <td>${produtos[2].sistema}</td>
          </tr>
          <tr>
            <td>Versão:</td>
            <td>${produtos[2].versao}</td>
          </tr>
          <tr>
            <td>Tela:</td>
            <td>${produtos[2].tipo_tela}</td>
          </tr>
          <tr>
            <td>Tamanho:</td>
            <td>${produtos[2].tamanho_display}</td>
          </tr>
          <tr>
            <td>Resolução:</td>
            <td>${produtos[2].resolucao}</td>
          </tr>
          <tr>
            <td>Camera Traseira:</td>
            <td>${produtos[2].camera_traseira}</td>
          </tr>
          <tr>
            <td>Camera Frontal:</td>
            <td>${produtos[2].camera_frontal}</td>
          </tr>
        </table>
      </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'appleBtn3' || e.target.className == 'iphone5s') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[3].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[3].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>${produtos[3].preco}</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>${produtos[3].preco} no boleto bancário</p>
                <p>${produtos[3].preco} no cartão de crédito em até 10x de R$ 89,99 s/ juros</p>
                <p>R$ 1005,90 no cartão Logo.com em até 12x de R$ 29,99 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>

        <div class = "fichaTec">
        <table>
          <tr>
           <th>Ficha técnica</th>
          </tr>
          <tr>
            <td>Marca:</td>
            <td>${produtos[3].marca}</td>
          </tr>
          <tr>
            <td>Modelo:</td>
            <td>${produtos[3].modelo}</td>
          </tr>
          <tr>
            <td>Cor:</td>
            <td>${produtos[3].cor}</td>
          </tr>
          <tr>
            <td>Chip:</td>
            <td>${produtos[3].chip}</td>
          </tr>
          <tr>
            <td>Quantidades Chip: </td>
            <td>${produtos[3].qtd_chip}</td>
          </tr>
          <tr>
            <td>Memória:</td>
            <td>${produtos[3].memoria_interna}</td>
          </tr>
          <tr>
            <td>RAM:</td>
            <td>${produtos[3].memoria_ram}</td>
          </tr>
          <tr>
            <td>Processador:</td>
            <td>${produtos[3].processador}</td>
          </tr>
          <tr>
            <td>Sistema:</td>
            <td>${produtos[3].sistema}</td>
          </tr>
          <tr>
            <td>Versão:</td>
            <td>${produtos[3].versao}</td>
          </tr>
          <tr>
            <td>Tela:</td>
            <td>${produtos[3].tipo_tela}</td>
          </tr>
          <tr>
            <td>Tamanho:</td>
            <td>${produtos[3].tamanho_display}</td>
          </tr>
          <tr>
            <td>Resolução:</td>
            <td>${produtos[3].resolucao}</td>
          </tr>
          <tr>
            <td>Camera Traseira:</td>
            <td>${produtos[3].camera_traseira}</td>
          </tr>
          <tr>
            <td>Camera Frontal:</td>
            <td>${produtos[3].camera_frontal}</td>
          </tr>
        </table>
      </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'appleBtn4' || e.target.className == 'iphone5sGold') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[4].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[4].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>${produtos[4].preco}</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>${produtos[4].preco} no boleto bancário</p>
                <p>${produtos[4].preco} no cartão de crédito em até 10x de R$ 89,90 s/ juros</p>
                <p>R$ 819,90 no cartão Logo.com em até 12x de R$ 56,90 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>

        <div class = "fichaTec">
        <table>
          <tr>
           <th>Ficha técnica</th>
          </tr>
          <tr>
            <td>Marca:</td>
            <td>${produtos[4].marca}</td>
          </tr>
          <tr>
            <td>Modelo:</td>
            <td>${produtos[4].modelo}</td>
          </tr>
          <tr>
            <td>Cor:</td>
            <td>${produtos[4].cor}</td>
          </tr>
          <tr>
            <td>Chip:</td>
            <td>${produtos[4].chip}</td>
          </tr>
          <tr>
            <td>Quantidades Chip: </td>
            <td>${produtos[4].qtd_chip}</td>
          </tr>
          <tr>
            <td>Memória:</td>
            <td>${produtos[4].memoria_interna}</td>
          </tr>
          <tr>
            <td>RAM:</td>
            <td>${produtos[4].memoria_ram}</td>
          </tr>
          <tr>
            <td>Processador:</td>
            <td>${produtos[4].processador}</td>
          </tr>
          <tr>
            <td>Sistema:</td>
            <td>${produtos[4].sistema}</td>
          </tr>
          <tr>
            <td>Versão:</td>
            <td>${produtos[4].versao}</td>
          </tr>
          <tr>
            <td>Tela:</td>
            <td>${produtos[4].tipo_tela}</td>
          </tr>
          <tr>
            <td>Tamanho:</td>
            <td>${produtos[4].tamanho_display}</td>
          </tr>
          <tr>
            <td>Resolução:</td>
            <td>${produtos[4].resolucao}</td>
          </tr>
          <tr>
            <td>Camera Traseira:</td>
            <td>${produtos[4].camera_traseira}</td>
          </tr>
          <tr>
            <td>Camera Frontal:</td>
            <td>${produtos[4].camera_frontal}</td>
          </tr>
        </table>
      </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'appleBtn5' || e.target.className == 'iphone5c') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[5].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[5].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>${produtos[5].preco}</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>${produtos[5].preco} no boleto bancário</p>
                <p>${produtos[5].preco} no cartão de crédito em até 10x de R$ 50,99 s/ juros</p>
                <p>R$ 420,99 no cartão Logo.com em até 12x de R$ 29,23 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>

        <div class = "fichaTec">
        <table>
          <tr>
           <th>Ficha técnica</th>
          </tr>
          <tr>
            <td>Marca:</td>
            <td>${produtos[5].marca}</td>
          </tr>
          <tr>
            <td>Modelo:</td>
            <td>${produtos[5].modelo}</td>
          </tr>
          <tr>
            <td>Cor:</td>
            <td>${produtos[5].cor}</td>
          </tr>
          <tr>
            <td>Chip:</td>
            <td>${produtos[5].chip}</td>
          </tr>
          <tr>
            <td>Quantidades Chip: </td>
            <td>${produtos[5].qtd_chip}</td>
          </tr>
          <tr>
            <td>Memória:</td>
            <td>${produtos[5].memoria_interna}</td>
          </tr>
          <tr>
            <td>RAM:</td>
            <td>${produtos[5].memoria_ram}</td>
          </tr>
          <tr>
            <td>Processador:</td>
            <td>${produtos[5].processador}</td>
          </tr>
          <tr>
            <td>Sistema:</td>
            <td>${produtos[5].sistema}</td>
          </tr>
          <tr>
            <td>Versão:</td>
            <td>${produtos[5].versao}</td>
          </tr>
          <tr>
            <td>Tela:</td>
            <td>${produtos[5].tipo_tela}</td>
          </tr>
          <tr>
            <td>Tamanho:</td>
            <td>${produtos[5].tamanho_display}</td>
          </tr>
          <tr>
            <td>Resolução:</td>
            <td>${produtos[5].resolucao}</td>
          </tr>
          <tr>
            <td>Camera Traseira:</td>
            <td>${produtos[5].camera_traseira}</td>
          </tr>
          <tr>
            <td>Camera Frontal:</td>
            <td>${produtos[5].camera_frontal}</td>
          </tr>
        </table>
      </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'appleBtn6' || e.target.className == 'iphone6Splus') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[6].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[6].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>${produtos[6].preco}</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>${produtos[6].preco} no boleto bancário</p>
                <p>${produtos[6].preco} no cartão de crédito em até 10x de R$ 129,99 s/ juros</p>
                <p>R$ 1569,00 no cartão Logo.com em até 12x de R$ 39,99 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>

        <div class = "fichaTec">
        <table>
          <tr>
           <th>Ficha técnica</th>
          </tr>
          <tr>
            <td>Marca:</td>
            <td>${produtos[6].marca}</td>
          </tr>
          <tr>
            <td>Modelo:</td>
            <td>${produtos[6].modelo}</td>
          </tr>
          <tr>
            <td>Cor:</td>
            <td>${produtos[6].cor}</td>
          </tr>
          <tr>
            <td>Chip:</td>
            <td>${produtos[6].chip}</td>
          </tr>
          <tr>
            <td>Quantidades Chip: </td>
            <td>${produtos[6].qtd_chip}</td>
          </tr>
          <tr>
            <td>Memória:</td>
            <td>${produtos[6].memoria_interna}</td>
          </tr>
          <tr>
            <td>RAM:</td>
            <td>${produtos[6].memoria_ram}</td>
          </tr>
          <tr>
            <td>Processador:</td>
            <td>${produtos[6].processador}</td>
          </tr>
          <tr>
            <td>Sistema:</td>
            <td>${produtos[6].sistema}</td>
          </tr>
          <tr>
            <td>Versão:</td>
            <td>${produtos[6].versao}</td>
          </tr>
          <tr>
            <td>Tela:</td>
            <td>${produtos[6].tipo_tela}</td>
          </tr>
          <tr>
            <td>Tamanho:</td>
            <td>${produtos[6].tamanho_display}</td>
          </tr>
          <tr>
            <td>Resolução:</td>
            <td>${produtos[6].resolucao}</td>
          </tr>
          <tr>
            <td>Camera Traseira:</td>
            <td>${produtos[6].camera_traseira}</td>
          </tr>
          <tr>
            <td>Camera Frontal:</td>
            <td>${produtos[6].camera_frontal}</td>
          </tr>
        </table>
      </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'appleBtn7') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
                <img src = "${produtos[7].imagem}">
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[7].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>${produtos[7].preco}</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>${produtos[7].preco} no boleto bancário</p>
                <p>${produtos[7].preco} no cartão de crédito em até 10x de R$ 123,99 s/ juros</p>
                <p>R$ 1750,90 no cartão Logo.com em até 12x de R$ 59,99 s/ juros</p>
                <div class = "frete">
                    <p>Calcular o frete: </p>
                    <input type = "text">
                    <button>OK</button>
                </div>
            </div>
        </div>

        <div class = "fichaTec">
        <table>
          <tr>
           <th>Ficha técnica</th>
          </tr>
          <tr>
            <td>Marca:</td>
            <td>${produtos[7].marca}</td>
          </tr>
          <tr>
            <td>Modelo:</td>
            <td>${produtos[7].modelo}</td>
          </tr>
          <tr>
            <td>Cor:</td>
            <td>${produtos[7].cor}</td>
          </tr>
          <tr>
            <td>Chip:</td>
            <td>${produtos[7].chip}</td>
          </tr>
          <tr>
            <td>Quantidades Chip: </td>
            <td>${produtos[7].qtd_chip}</td>
          </tr>
          <tr>
            <td>Memória:</td>
            <td>${produtos[7].memoria_interna}</td>
          </tr>
          <tr>
            <td>RAM:</td>
            <td>${produtos[7].memoria_ram}</td>
          </tr>
          <tr>
            <td>Processador:</td>
            <td>${produtos[7].processador}</td>
          </tr>
          <tr>
            <td>Sistema:</td>
            <td>${produtos[7].sistema}</td>
          </tr>
          <tr>
            <td>Versão:</td>
            <td>${produtos[7].versao}</td>
          </tr>
          <tr>
            <td>Tela:</td>
            <td>${produtos[7].tipo_tela}</td>
          </tr>
          <tr>
            <td>Tamanho:</td>
            <td>${produtos[7].tamanho_display}</td>
          </tr>
          <tr>
            <td>Resolução:</td>
            <td>${produtos[7].resolucao}</td>
          </tr>
          <tr>
            <td>Camera Traseira:</td>
            <td>${produtos[7].camera_traseira}</td>
          </tr>
          <tr>
            <td>Camera Frontal:</td>
            <td>${produtos[7].camera_frontal}</td>
          </tr>
        </table>
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
      const produtosMenor = produtos.sort((a,b) => a.preco - b.preco) // Menor preco sort
      console.log(produtosMenor)
      let output = `
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
        if (e.target.className == 'samsungBtn0' || e.target.className == 'galaxyJ5') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
                  <a   href  = "index.html">Voltar</a>
                  <div class = "opcoes">
                  <div>
                      <img src = "${produtos[0].imagem}">
                  </div>
                  <div class = "detalhes-pag">
                      <h1>${produtos[0].tituloDetalhe}</h1>
                      <div class = "precodet">
                          <p>vendido e entregue por
                              Logo.com
                          </p>
                          <h2>${produtos[0].preco}</h2>
                          <p>à vista no cartão</p>
                      </div>
                      <div class = "buttonsPag">
                          <button>Comprar</button>
                          <button>Adicionar ao carrinho</button>
                      </div>
                      <br>
                      <p>${produtos[0].preco} no boleto bancário</p>
                      <p>${produtos[0].preco} no cartão de crédito em até 10x de R$ 69,99 s/ juros</p>
                      <p>R$ 710,95 no cartão Logo.com em até 12x de R$ 38,92 s/ juros</p>
                      <div class = "frete">
                          <p>Calcular o frete: </p>
                          <input type = "text">
                          <button>OK</button>
                      </div>
                  </div>
              </div> 
              
        <div class = "fichaTec">
        <table>
          <tr>
           <th>Ficha técnica</th>
          </tr>
          <tr>
            <td>Marca:</td>
            <td>${produtos[0].marca}</td>
          </tr>
          <tr>
            <td>Modelo:</td>
            <td>${produtos[0].modelo}</td>
          </tr>
          <tr>
            <td>Cor:</td>
            <td>${produtos[0].cor}</td>
          </tr>
          <tr>
            <td>Chip:</td>
            <td>${produtos[0].chip}</td>
          </tr>
          <tr>
            <td>Quantidades Chip: </td>
            <td>${produtos[0].qtd_chip}</td>
          </tr>
          <tr>
            <td>Memória:</td>
            <td>${produtos[0].memoria_interna}</td>
          </tr>
          <tr>
            <td>RAM:</td>
            <td>${produtos[0].memoria_ram}</td>
          </tr>
          <tr>
            <td>Processador:</td>
            <td>${produtos[0].processador}</td>
          </tr>
          <tr>
            <td>Sistema:</td>
            <td>${produtos[0].sistema}</td>
          </tr>
          <tr>
            <td>Versão:</td>
            <td>${produtos[0].versao}</td>
          </tr>
          <tr>
            <td>Tela:</td>
            <td>${produtos[0].tipo_tela}</td>
          </tr>
          <tr>
            <td>Tamanho:</td>
            <td>${produtos[0].tamanho_display}</td>
          </tr>
          <tr>
            <td>Resolução:</td>
            <td>${produtos[0].resolucao}</td>
          </tr>
          <tr>
            <td>Camera Traseira:</td>
            <td>${produtos[0].camera_traseira}</td>
          </tr>
          <tr>
            <td>Camera Frontal:</td>
            <td>${produtos[0].camera_frontal}</td>
          </tr>
        </table>
      </div>
                  `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'samsungBtn1') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
                  <a href  = "index.html">Voltar</a>
                  <div class = "opcoes">
                  <div>
                      <img src = "${produtos[1].imagem}">
                  </div>
                  <div class = "detalhes-pag">
                      <h1>${produtos[1].tituloDetalhe}</h1>
                      <div class = "precodet">
                          <p>vendido e entregue por
                              Logo.com
                          </p>
                          <h2>${produtos[1].preco}</h2>
                          <p>à vista no cartão</p>
                      </div>
                      <div class = "buttonsPag">
                          <button>Comprar</button>
                          <button>Adicionar ao carrinho</button>
                      </div>
                      <br>
                      <p>${produtos[1].preco} no boleto bancário</p>
                      <p>${produtos[1].preco} no cartão de crédito em até 10x de R$ 130,90 s/ juros</p>
                      <p>R$ 1780,99 no cartão Logo.com em até 12x de R$ 50,90 s/ juros</p>
                      <div class = "frete">
                          <p>Calcular o frete: </p>
                          <input type = "text">
                          <button>OK</button>
                      </div>
                  </div>
              </div>

        <div class = "fichaTec">
        <table>
          <tr>
           <th>Ficha técnica</th>
          </tr>
          <tr>
            <td>Marca:</td>
            <td>${produtos[1].marca}</td>
          </tr>
          <tr>
            <td>Modelo:</td>
            <td>${produtos[1].modelo}</td>
          </tr>
          <tr>
            <td>Cor:</td>
            <td>${produtos[1].cor}</td>
          </tr>
          <tr>
            <td>Chip:</td>
            <td>${produtos[1].chip}</td>
          </tr>
          <tr>
            <td>Quantidades Chip: </td>
            <td>${produtos[1].qtd_chip}</td>
          </tr>
          <tr>
            <td>Memória:</td>
            <td>${produtos[1].memoria_interna}</td>
          </tr>
          <tr>
            <td>RAM:</td>
            <td>${produtos[1].memoria_ram}</td>
          </tr>
          <tr>
            <td>Processador:</td>
            <td>${produtos[1].processador}</td>
          </tr>
          <tr>
            <td>Sistema:</td>
            <td>${produtos[1].sistema}</td>
          </tr>
          <tr>
            <td>Versão:</td>
            <td>${produtos[1].versao}</td>
          </tr>
          <tr>
            <td>Tela:</td>
            <td>${produtos[1].tipo_tela}</td>
          </tr>
          <tr>
            <td>Tamanho:</td>
            <td>${produtos[1].tamanho_display}</td>
          </tr>
          <tr>
            <td>Resolução:</td>
            <td>${produtos[1].resolucao}</td>
          </tr>
          <tr>
            <td>Camera Traseira:</td>
            <td>${produtos[1].camera_traseira}</td>
          </tr>
          <tr>
            <td>Camera Frontal:</td>
            <td>${produtos[1].camera_frontal}</td>
          </tr>
        </table>
      </div>
              `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'samsungBtn2' || e.target.className == 'galaxys6edge') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
                  <a   href  = "index.html">Voltar</a>
                  <div class = "opcoes">
                  <div>
                      <img src = "${produtos[2].imagem}">
                  </div>
                  <div class = "detalhes-pag">
                      <h1>${produtos[2].tituloDetalhe}</h1>
                      <div class = "precodet">
                          <p>vendido e entregue por
                              Logo.com
                          </p>
                          <h2>${produtos[2].preco}</h2>
                          <p>à vista no cartão</p>
                      </div>
                      <div class = "buttonsPag">
                          <button>Comprar</button>
                          <button>Adicionar ao carrinho</button>
                      </div>
                      <br>
                      <p>${produtos[2].preco} no boleto bancário</p>
                      <p>${produtos[2].preco} no cartão de crédito em até 10x de R$ 120,99 s/ juros</p>
                      <p>R$ 1290,99 no cartão Logo.com em até 12x de R$ 45,99 s/ juros</p>
                      <div class = "frete">
                          <p>Calcular o frete: </p>
                          <input type = "text">
                          <button>OK</button>
                      </div>
                  </div>
              </div>

              <div class = "fichaTec">
              <table>
                <tr>
                 <th>Ficha técnica</th>
                </tr>
                <tr>
                  <td>Marca:</td>
                  <td>${produtos[2].marca}</td>
                </tr>
                <tr>
                  <td>Modelo:</td>
                  <td>${produtos[2].modelo}</td>
                </tr>
                <tr>
                  <td>Cor:</td>
                  <td>${produtos[2].cor}</td>
                </tr>
                <tr>
                  <td>Chip:</td>
                  <td>${produtos[2].chip}</td>
                </tr>
                <tr>
                  <td>Quantidades Chip: </td>
                  <td>${produtos[2].qtd_chip}</td>
                </tr>
                <tr>
                  <td>Memória:</td>
                  <td>${produtos[2].memoria_interna}</td>
                </tr>
                <tr>
                  <td>RAM:</td>
                  <td>${produtos[2].memoria_ram}</td>
                </tr>
                <tr>
                  <td>Processador:</td>
                  <td>${produtos[2].processador}</td>
                </tr>
                <tr>
                  <td>Sistema:</td>
                  <td>${produtos[2].sistema}</td>
                </tr>
                <tr>
                  <td>Versão:</td>
                  <td>${produtos[2].versao}</td>
                </tr>
                <tr>
                  <td>Tela:</td>
                  <td>${produtos[2].tipo_tela}</td>
                </tr>
                <tr>
                  <td>Tamanho:</td>
                  <td>${produtos[2].tamanho_display}</td>
                </tr>
                <tr>
                  <td>Resolução:</td>
                  <td>${produtos[2].resolucao}</td>
                </tr>
                <tr>
                  <td>Camera Traseira:</td>
                  <td>${produtos[2].camera_traseira}</td>
                </tr>
                <tr>
                  <td>Camera Frontal:</td>
                  <td>${produtos[2].camera_frontal}</td>
                </tr>
              </table>
            </div>
              `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'samsungBtn3') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
                  <a   href  = "index.html">Voltar</a>
                  <div class = "opcoes">
                  <div>
                      <img src = "${produtos[3].imagem}">
                  </div>
                  <div class = "detalhes-pag">
                      <h1>${produtos[3].tituloDetalhe}</h1>
                      <div class = "precodet">
                          <p>vendido e entregue por
                              Logo.com
                          </p>
                          <h2>${produtos[3].preco}</h2>
                          <p>à vista no cartão</p>
                      </div>
                      <div class = "buttonsPag">
                          <button>Comprar</button>
                          <button>Adicionar ao carrinho</button>
                      </div>
                      <br>
                      <p>${produtos[3].preco} no boleto bancário</p>
                      <p>${produtos[3].preco} no cartão de crédito em até 10x de R$ 120,99 s/ juros</p>
                      <p>R$ 1599,90 no cartão Logo.com em até 12x de R$ 65,60 s/ juros</p>
                      <div class = "frete">
                          <p>Calcular o frete: </p>
                          <input type = "text">
                          <button>OK</button>
                      </div>
                  </div>
              </div>

        <div class = "fichaTec">
        <table>
          <tr>
           <th>Ficha técnica</th>
          </tr>
          <tr>
            <td>Marca:</td>
            <td>${produtos[3].marca}</td>
          </tr>
          <tr>
            <td>Modelo:</td>
            <td>${produtos[3].modelo}</td>
          </tr>
          <tr>
            <td>Cor:</td>
            <td>${produtos[3].cor}</td>
          </tr>
          <tr>
            <td>Chip:</td>
            <td>${produtos[3].chip}</td>
          </tr>
          <tr>
            <td>Quantidades Chip: </td>
            <td>${produtos[3].qtd_chip}</td>
          </tr>
          <tr>
            <td>Memória:</td>
            <td>${produtos[3].memoria_interna}</td>
          </tr>
          <tr>
            <td>RAM:</td>
            <td>${produtos[3].memoria_ram}</td>
          </tr>
          <tr>
            <td>Processador:</td>
            <td>${produtos[3].processador}</td>
          </tr>
          <tr>
            <td>Sistema:</td>
            <td>${produtos[3].sistema}</td>
          </tr>
          <tr>
            <td>Versão:</td>
            <td>${produtos[3].versao}</td>
          </tr>
          <tr>
            <td>Tela:</td>
            <td>${produtos[3].tipo_tela}</td>
          </tr>
          <tr>
            <td>Tamanho:</td>
            <td>${produtos[3].tamanho_display}</td>
          </tr>
          <tr>
            <td>Resolução:</td>
            <td>${produtos[3].resolucao}</td>
          </tr>
          <tr>
            <td>Camera Traseira:</td>
            <td>${produtos[3].camera_traseira}</td>
          </tr>
          <tr>
            <td>Camera Frontal:</td>
            <td>${produtos[3].camera_frontal}</td>
          </tr>
        </table>
      </div>
              `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'samsungBtn4' || e.target.className == 'galaxyA7') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
                  <a   href  = "index.html">Voltar</a>
                  <div class = "opcoes">
                  <div>
                      <img src = "${produtos[4].imagem}">
                  </div>
                  <div class = "detalhes-pag">
                      <h1>${produtos[4].tituloDetalhe}</h1>
                      <div class = "precodet">
                          <p>vendido e entregue por
                              Logo.com
                          </p>
                          <h2>${produtos[4].preco}</h2>
                          <p>à vista no cartão</p>
                      </div>
                      <div class = "buttonsPag">
                          <button>Comprar</button>
                          <button>Adicionar ao carrinho</button>
                      </div>
                      <br>
                      <p>${produtos[4].preco} no boleto bancário</p>
                      <p>${produtos[4].preco} no cartão de crédito em até 10x de R$ 136,99 s/ juros</p>
                      <p>R$ 1299,90 no cartão Logo.com em até 12x de R$ 45,99 s/ juros</p>
                      <div class = "frete">
                          <p>Calcular o frete: </p>
                          <input type = "text">
                          <button>OK</button>
                      </div>
                  </div>
              </div>

              <div class = "fichaTec">
        <table>
          <tr>
           <th>Ficha técnica</th>
          </tr>
          <tr>
            <td>Marca:</td>
            <td>${produtos[4].marca}</td>
          </tr>
          <tr>
            <td>Modelo:</td>
            <td>${produtos[4].modelo}</td>
          </tr>
          <tr>
            <td>Cor:</td>
            <td>${produtos[4].cor}</td>
          </tr>
          <tr>
            <td>Chip:</td>
            <td>${produtos[4].chip}</td>
          </tr>
          <tr>
            <td>Quantidades Chip: </td>
            <td>${produtos[4].qtd_chip}</td>
          </tr>
          <tr>
            <td>Memória:</td>
            <td>${produtos[4].memoria_interna}</td>
          </tr>
          <tr>
            <td>RAM:</td>
            <td>${produtos[4].memoria_ram}</td>
          </tr>
          <tr>
            <td>Processador:</td>
            <td>${produtos[4].processador}</td>
          </tr>
          <tr>
            <td>Sistema:</td>
            <td>${produtos[4].sistema}</td>
          </tr>
          <tr>
            <td>Versão:</td>
            <td>${produtos[4].versao}</td>
          </tr>
          <tr>
            <td>Tela:</td>
            <td>${produtos[4].tipo_tela}</td>
          </tr>
          <tr>
            <td>Tamanho:</td>
            <td>${produtos[4].tamanho_display}</td>
          </tr>
          <tr>
            <td>Resolução:</td>
            <td>${produtos[4].resolucao}</td>
          </tr>
          <tr>
            <td>Camera Traseira:</td>
            <td>${produtos[4].camera_traseira}</td>
          </tr>
          <tr>
            <td>Camera Frontal:</td>
            <td>${produtos[4].camera_frontal}</td>
          </tr>
        </table>
      </div>
              `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'samsungBtn5' || e.target.className == 'galaxyA5') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
                  <a   href  = "index.html">Voltar</a>
                  <div class = "opcoes">
                  <div>
                      <img src = "${produtos[5].imagem}">
                  </div>
                  <div class = "detalhes-pag">
                      <h1>${produtos[5].tituloDetalhe}</h1>
                      <div class = "precodet">
                          <p>vendido e entregue por
                              Logo.com
                          </p>
                          <h2>${produtos[5].preco}</h2>
                          <p>à vista no cartão</p>
                      </div>
                      <div class = "buttonsPag">
                          <button>Comprar</button>
                          <button>Adicionar ao carrinho</button>
                      </div>
                      <br>
                      <p>${produtos[5].preco} no boleto bancário</p>
                      <p>${produtos[5].preco} no cartão de crédito em até 10x de R$ 89,99 s/ juros</p>
                      <p>R$ 689,90 no cartão Logo.com em até 12x de R$ 50,68 s/ juros</p>
                      <div class = "frete">
                          <p>Calcular o frete: </p>
                          <input type = "text">
                          <button>OK</button>
                      </div>
                  </div>
              </div>

              <div class = "fichaTec">
        <table>
          <tr>
           <th>Ficha técnica</th>
          </tr>
          <tr>
            <td>Marca:</td>
            <td>${produtos[5].marca}</td>
          </tr>
          <tr>
            <td>Modelo:</td>
            <td>${produtos[5].modelo}</td>
          </tr>
          <tr>
            <td>Cor:</td>
            <td>${produtos[5].cor}</td>
          </tr>
          <tr>
            <td>Chip:</td>
            <td>${produtos[5].chip}</td>
          </tr>
          <tr>
            <td>Quantidades Chip: </td>
            <td>${produtos[5].qtd_chip}</td>
          </tr>
          <tr>
            <td>Memória:</td>
            <td>${produtos[5].memoria_interna}</td>
          </tr>
          <tr>
            <td>RAM:</td>
            <td>${produtos[5].memoria_ram}</td>
          </tr>
          <tr>
            <td>Processador:</td>
            <td>${produtos[5].processador}</td>
          </tr>
          <tr>
            <td>Sistema:</td>
            <td>${produtos[5].sistema}</td>
          </tr>
          <tr>
            <td>Versão:</td>
            <td>${produtos[5].versao}</td>
          </tr>
          <tr>
            <td>Tela:</td>
            <td>${produtos[5].tipo_tela}</td>
          </tr>
          <tr>
            <td>Tamanho:</td>
            <td>${produtos[5].tamanho_display}</td>
          </tr>
          <tr>
            <td>Resolução:</td>
            <td>${produtos[5].resolucao}</td>
          </tr>
          <tr>
            <td>Camera Traseira:</td>
            <td>${produtos[5].camera_traseira}</td>
          </tr>
          <tr>
            <td>Camera Frontal:</td>
            <td>${produtos[5].camera_frontal}</td>
          </tr>
        </table>
      </div>
              `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'samsungBtn6' || e.target.className == 'galaxys9') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
                  <a   href  = "index.html">Voltar</a>
                  <div class = "opcoes">
                  <div>
                      <img src = "${produtos[6].imagem}">
                  </div>
                  <div class = "detalhes-pag">
                      <h1>${produtos[6].tituloDetalhe}</h1>
                      <div class = "precodet">
                          <p>vendido e entregue por
                              Logo.com
                          </p>
                          <h2>${produtos[6].preco}</h2>
                          <p>à vista no cartão</p>
                      </div>
                      <div class = "buttonsPag">
                          <button>Comprar</button>
                          <button>Adicionar ao carrinho</button>
                      </div>
                      <br>
                      <p>${produtos[6].preco} no boleto bancário</p>
                      <p>${produtos[6].preco} no cartão de crédito em até 10x de R$ 169,99 s/ juros</p>
                      <p>R$ 2020,90 no cartão em Logo.com até 12x de R$ 129,08 s/ juros</p>
                      <div class = "frete">
                          <p>Calcular o frete: </p>
                          <input type = "text">
                          <button>OK</button>
                      </div>
                  </div>
              </div>

        <div class = "fichaTec">
        <table>
          <tr>
           <th>Ficha técnica</th>
          </tr>
          <tr>
            <td>Marca:</td>
            <td>${produtos[6].marca}</td>
          </tr>
          <tr>
            <td>Modelo:</td>
            <td>${produtos[6].modelo}</td>
          </tr>
          <tr>
            <td>Cor:</td>
            <td>${produtos[6].cor}</td>
          </tr>
          <tr>
            <td>Chip:</td>
            <td>${produtos[6].chip}</td>
          </tr>
          <tr>
            <td>Quantidades Chip: </td>
            <td>${produtos[6].qtd_chip}</td>
          </tr>
          <tr>
            <td>Memória:</td>
            <td>${produtos[6].memoria_interna}</td>
          </tr>
          <tr>
            <td>RAM:</td>
            <td>${produtos[6].memoria_ram}</td>
          </tr>
          <tr>
            <td>Processador:</td>
            <td>${produtos[6].processador}</td>
          </tr>
          <tr>
            <td>Sistema:</td>
            <td>${produtos[6].sistema}</td>
          </tr>
          <tr>
            <td>Versão:</td>
            <td>${produtos[6].versao}</td>
          </tr>
          <tr>
            <td>Tela:</td>
            <td>${produtos[6].tipo_tela}</td>
          </tr>
          <tr>
            <td>Tamanho:</td>
            <td>${produtos[6].tamanho_display}</td>
          </tr>
          <tr>
            <td>Resolução:</td>
            <td>${produtos[6].resolucao}</td>
          </tr>
          <tr>
            <td>Camera Traseira:</td>
            <td>${produtos[6].camera_traseira}</td>
          </tr>
          <tr>
            <td>Camera Frontal:</td>
            <td>${produtos[6].camera_frontal}</td>
          </tr>
        </table>
      </div>
              `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'samsungBtn7') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
                  <a   href  = "index.html">Voltar</a>
                  <div class = "opcoes">
                  <div>
                      <img src = "${produtos[7].imagem}">
                  </div>
                  <div class = "detalhes-pag">
                      <h1>${produtos[7].tituloDetalhe}</h1>
                      <div class = "precodet">
                          <p>vendido e entregue por
                              Logo.com
                          </p>
                          <h2>${produtos[7].preco}</h2>
                          <p>à vista no cartão</p>
                      </div>
                      <div class = "buttonsPag">
                          <button>Comprar</button>
                          <button>Adicionar ao carrinho</button>
                      </div>
                      <br>
                      <p>${produtos[7].preco} no boleto bancário</p>
                      <p>${produtos[7].preco} no cartão de crédito em até 10x de R$ 59,90 s/ juros</p>
                      <p>R$ 589,90 no cartão Logo.com em até 12x de R$ 25,90 s/ juros</p>
                      <div class = "frete">
                          <p>Calcular o frete: </p>
                          <input type = "text">
                          <button>OK</button>
                      </div>
                  </div>
              </div>

        <div class = "fichaTec">
        <table>
          <tr>
           <th>Ficha técnica</th>
          </tr>
          <tr>
            <td>Marca:</td>
            <td>${produtos[7].marca}</td>
          </tr>
          <tr>
            <td>Modelo:</td>
            <td>${produtos[7].modelo}</td>
          </tr>
          <tr>
            <td>Cor:</td>
            <td>${produtos[7].cor}</td>
          </tr>
          <tr>
            <td>Chip:</td>
            <td>${produtos[7].chip}</td>
          </tr>
          <tr>
            <td>Quantidades Chip: </td>
            <td>${produtos[7].qtd_chip}</td>
          </tr>
          <tr>
            <td>Memória:</td>
            <td>${produtos[7].memoria_interna}</td>
          </tr>
          <tr>
            <td>RAM:</td>
            <td>${produtos[7].memoria_ram}</td>
          </tr>
          <tr>
            <td>Processador:</td>
            <td>${produtos[7].processador}</td>
          </tr>
          <tr>
            <td>Sistema:</td>
            <td>${produtos[7].sistema}</td>
          </tr>
          <tr>
            <td>Versão:</td>
            <td>${produtos[7].versao}</td>
          </tr>
          <tr>
            <td>Tela:</td>
            <td>${produtos[7].tipo_tela}</td>
          </tr>
          <tr>
            <td>Tamanho:</td>
            <td>${produtos[7].tamanho_display}</td>
          </tr>
          <tr>
            <td>Resolução:</td>
            <td>${produtos[7].resolucao}</td>
          </tr>
          <tr>
            <td>Camera Traseira:</td>
            <td>${produtos[7].camera_traseira}</td>
          </tr>
          <tr>
            <td>Camera Frontal:</td>
            <td>${produtos[7].camera_frontal}</td>
          </tr>
        </table>
      </div>
              `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        }
      });

      document.getElementById('destaquesSam').innerHTML = output;

    }else if (xhr.status === 404) {
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
          compraDiv.style.display = 'block';

          let saida = `
        <a   href  = "index.html">Voltar</a>
        <div class = "opcoes">
        <div>
            <img src = "${produtos[0].imagem}">
        </div>
        <div class = "detalhes-pag">
            <h1>${produtos[0].tituloDetalhe}</h1>
            <div class = "precodet">
                <p>vendido e entregue por
                    Logo.com
                </p>
                <h2>${produtos[0].preco}</h2>
                <p>à vista no cartão</p>
            </div>
            <div class = "buttonsPag">
                <button>Comprar</button>
                <button>Adicionar ao carrinho</button>
            </div>
            <br>
            <p>${produtos[0].preco} no boleto bancário</p>
            <p>${produtos[0].preco} no cartão de crédito em até 10x de R$ 136,99 s/ juros</p>
            <p>R$ 1900,90 no cartão Logo.com em até 12x de R$ 49,90 s/ juros</p>
            <div class = "frete">
                <p>Calcular o frete: </p>
                <input type = "text">
                <button>OK</button>
            </div>
        </div>
      </div>  
      
    <div class = "fichaTec">
    <table>
      <tr>
       <th>Ficha técnica</th>
      </tr>
      <tr>
        <td>Marca:</td>
        <td>${produtos[0].marca}</td>
      </tr>
      <tr>
        <td>Modelo:</td>
        <td>${produtos[0].modelo}</td>
      </tr>
      <tr>
        <td>Cor:</td>
        <td>${produtos[0].cor}</td>
      </tr>
      <tr>
        <td>Chip:</td>
        <td>${produtos[0].chip}</td>
      </tr>
      <tr>
        <td>Quantidades Chip: </td>
        <td>${produtos[0].qtd_chip}</td>
      </tr>
      <tr>
        <td>Memória:</td>
        <td>${produtos[0].memoria_interna}</td>
      </tr>
      <tr>
        <td>RAM:</td>
        <td>${produtos[0].memoria_ram}</td>
      </tr>
      <tr>
        <td>Processador:</td>
        <td>${produtos[0].processador}</td>
      </tr>
      <tr>
        <td>Sistema:</td>
        <td>${produtos[0].sistema}</td>
      </tr>
      <tr>
        <td>Versão:</td>
        <td>${produtos[0].versao}</td>
      </tr>
      <tr>
        <td>Tela:</td>
        <td>${produtos[0].tipo_tela}</td>
      </tr>
      <tr>
        <td>Tamanho:</td>
        <td>${produtos[0].tamanho_display}</td>
      </tr>
      <tr>
        <td>Resolução:</td>
        <td>${produtos[0].resolucao}</td>
      </tr>
      <tr>
        <td>Camera Traseira:</td>
        <td>${produtos[0].camera_traseira}</td>
      </tr>
      <tr>
        <td>Camera Frontal:</td>
        <td>${produtos[0].camera_frontal}</td>
      </tr>
    </table>
  </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'motoBtn1') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
        <a   href  = "index.html">Voltar</a>
        <div class = "opcoes">
        <div>
            <img src = "${produtos[1].imagem}">
        </div>
        <div class = "detalhes-pag">
            <h1>${produtos[1].tituloDetalhe}</h1>
            <div class = "precodet">
                <p>vendido e entregue por
                    Logo.com
                </p>
                <h2>${produtos[1].preco}</h2>
                <p>à vista no cartão</p>
            </div>
            <div class = "buttonsPag">
                <button>Comprar</button>
                <button>Adicionar ao carrinho</button>
            </div>
            <br>
            <p>${produtos[1].preco} no boleto bancário</p>
            <p>${produtos[1].preco} no cartão de crédito em até 10x de R$ 136,99 s/ juros</p>
            <p>R$ 1900,90 no cartão Logo.com em até 12x de R$ 49,90 s/ juros</p>
            <div class = "frete">
                <p>Calcular o frete: </p>
                <input type = "text">
                <button>OK</button>
            </div>
        </div>
    </div>

    <div class = "fichaTec">
    <table>
      <tr>
       <th>Ficha técnica</th>
      </tr>
      <tr>
        <td>Marca:</td>
        <td>${produtos[1].marca}</td>
      </tr>
      <tr>
        <td>Modelo:</td>
        <td>${produtos[1].modelo}</td>
      </tr>
      <tr>
        <td>Cor:</td>
        <td>${produtos[1].cor}</td>
      </tr>
      <tr>
        <td>Chip:</td>
        <td>${produtos[1].chip}</td>
      </tr>
      <tr>
        <td>Quantidades Chip: </td>
        <td>${produtos[1].qtd_chip}</td>
      </tr>
      <tr>
        <td>Memória:</td>
        <td>${produtos[1].memoria_interna}</td>
      </tr>
      <tr>
        <td>RAM:</td>
        <td>${produtos[1].memoria_ram}</td>
      </tr>
      <tr>
        <td>Processador:</td>
        <td>${produtos[1].processador}</td>
      </tr>
      <tr>
        <td>Sistema:</td>
        <td>${produtos[1].sistema}</td>
      </tr>
      <tr>
        <td>Versão:</td>
        <td>${produtos[1].versao}</td>
      </tr>
      <tr>
        <td>Tela:</td>
        <td>${produtos[1].tipo_tela}</td>
      </tr>
      <tr>
        <td>Tamanho:</td>
        <td>${produtos[1].tamanho_display}</td>
      </tr>
      <tr>
        <td>Resolução:</td>
        <td>${produtos[1].resolucao}</td>
      </tr>
      <tr>
        <td>Camera Traseira:</td>
        <td>${produtos[1].camera_traseira}</td>
      </tr>
      <tr>
        <td>Camera Frontal:</td>
        <td>${produtos[1].camera_frontal}</td>
      </tr>
    </table>
  </div>
    `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'motoBtn2' || e.target.className == 'motoG3') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
        <a   href  = "index.html">Voltar</a>
        <div class = "opcoes">
        <div>
            <img src = "${produtos[2].imagem}">
        </div>
        <div class = "detalhes-pag">
            <h1>${produtos[2].tituloDetalhe}</h1>
            <div class = "precodet">
                <p>vendido e entregue por
                    Logo.com
                </p>
                <h2>${produtos[2].preco}</h2>
                <p>à vista no cartão</p>
            </div>
            <div class = "buttonsPag">
                <button>Comprar</button>
                <button>Adicionar ao carrinho</button>
            </div>
            <br>
            <p>${produtos[2].preco} no boleto bancário</p>
            <p>${produtos[2].preco} no cartão de crédito em até 10x de R$ 90,99 s/ juros</p>
            <p>R$ 1150,90 no cartão Logo.com em até 12x de R$ 55,96 s/ juros</p>
            <div class = "frete">
                <p>Calcular o frete: </p>
                <input type = "text">
                <button>OK</button>
            </div>
        </div>
    </div>

    <div class = "fichaTec">
          <table>
            <tr>
             <th>Ficha técnica</th>
            </tr>
            <tr>
              <td>Marca:</td>
              <td>${produtos[2].marca}</td>
            </tr>
            <tr>
              <td>Modelo:</td>
              <td>${produtos[2].modelo}</td>
            </tr>
            <tr>
              <td>Cor:</td>
              <td>${produtos[2].cor}</td>
            </tr>
            <tr>
              <td>Chip:</td>
              <td>${produtos[2].chip}</td>
            </tr>
            <tr>
              <td>Quantidades Chip: </td>
              <td>${produtos[2].qtd_chip}</td>
            </tr>
            <tr>
              <td>Memória:</td>
              <td>${produtos[2].memoria_interna}</td>
            </tr>
            <tr>
              <td>RAM:</td>
              <td>${produtos[2].memoria_ram}</td>
            </tr>
            <tr>
              <td>Processador:</td>
              <td>${produtos[2].processador}</td>
            </tr>
            <tr>
              <td>Sistema:</td>
              <td>${produtos[2].sistema}</td>
            </tr>
            <tr>
              <td>Versão:</td>
              <td>${produtos[2].versao}</td>
            </tr>
            <tr>
              <td>Tela:</td>
              <td>${produtos[2].tipo_tela}</td>
            </tr>
            <tr>
              <td>Tamanho:</td>
              <td>${produtos[2].tamanho_display}</td>
            </tr>
            <tr>
              <td>Resolução:</td>
              <td>${produtos[2].resolucao}</td>
            </tr>
            <tr>
              <td>Camera Traseira:</td>
              <td>${produtos[2].camera_traseira}</td>
            </tr>
            <tr>
              <td>Camera Frontal:</td>
              <td>${produtos[2].camera_frontal}</td>
            </tr>
          </table>
        </div>
    `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'motoBtn3' || e.target.className == 'motoZ') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
        <a   href  = "index.html">Voltar</a>
        <div class = "opcoes">
        <div>
            <img src = "${produtos[3].imagem}">
        </div>
        <div class = "detalhes-pag">
            <h1>${produtos[3].tituloDetalhe}</h1>
            <div class = "precodet">
                <p>vendido e entregue por
                    Logo.com
                </p>
                <h2>${produtos[3].preco}</h2>
                <p>à vista no cartão</p>
            </div>
            <div class = "buttonsPag">
                <button>Comprar</button>
                <button>Adicionar ao carrinho</button>
            </div>
            <br>
            <p>${produtos[3].preco} no boleto bancário</p>
            <p>${produtos[3].preco} no cartão de crédito em até 10x de R$ 169,99 s/ juros</p>
            <p>R$ 2200,99 no cartão Logo.com em até 12x de R$ 89,90 s/ juros</p>
            <div class = "frete">
                <p>Calcular o frete: </p>
                <input type = "text">
                <button>OK</button>
            </div>
         </div>
       </div>

       <div class = "fichaTec">
    <table>
      <tr>
       <th>Ficha técnica</th>
      </tr>
      <tr>
        <td>Marca:</td>
        <td>${produtos[3].marca}</td>
      </tr>
      <tr>
        <td>Modelo:</td>
        <td>${produtos[3].modelo}</td>
      </tr>
      <tr>
        <td>Cor:</td>
        <td>${produtos[3].cor}</td>
      </tr>
      <tr>
        <td>Chip:</td>
        <td>${produtos[3].chip}</td>
      </tr>
      <tr>
        <td>Quantidades Chip: </td>
        <td>${produtos[3].qtd_chip}</td>
      </tr>
      <tr>
        <td>Memória:</td>
        <td>${produtos[3].memoria_interna}</td>
      </tr>
      <tr>
        <td>RAM:</td>
        <td>${produtos[3].memoria_ram}</td>
      </tr>
      <tr>
        <td>Processador:</td>
        <td>${produtos[3].processador}</td>
      </tr>
      <tr>
        <td>Sistema:</td>
        <td>${produtos[3].sistema}</td>
      </tr>
      <tr>
        <td>Versão:</td>
        <td>${produtos[3].versao}</td>
      </tr>
      <tr>
        <td>Tela:</td>
        <td>${produtos[3].tipo_tela}</td>
      </tr>
      <tr>
        <td>Tamanho:</td>
        <td>${produtos[3].tamanho_display}</td>
      </tr>
      <tr>
        <td>Resolução:</td>
        <td>${produtos[3].resolucao}</td>
      </tr>
      <tr>
        <td>Camera Traseira:</td>
        <td>${produtos[3].camera_traseira}</td>
      </tr>
      <tr>
        <td>Camera Frontal:</td>
        <td>${produtos[3].camera_frontal}</td>
      </tr>
    </table>
  </div>
    `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'motoBtn4' || e.target.className == 'motoX4') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
        <a   href  = "index.html">Voltar</a>
        <div class = "opcoes">
        <div>
            <img src = "${produtos[4].imagem}">
        </div>
        <div class = "detalhes-pag">
            <h1>${produtos[4].tituloDetalhe}</h1>
            <div class = "precodet">
                <p>vendido e entregue por
                    Logo.com
                </p>
                <h2>${produtos[4].preco}</h2>
                <p>à vista no cartão</p>
            </div>
            <div class = "buttonsPag">
                <button>Comprar</button>
                <button>Adicionar ao carrinho</button>
            </div>
            <br>
            <p>${produtos[4].preco} no boleto bancário</p>
            <p>${produtos[4].preco} no cartão de crédito em até 10x de R$ 120,99 s/ juros</p>
            <p>R$ 1190,90 no cartão Logo.com em até 12x de R$ 56,99 s/ juros</p>
            <div class = "frete">
                <p>Calcular o frete: </p>
                <input type = "text">
                <button>OK</button>
            </div>
        </div>
    </div>

    <div class = "fichaTec">
    <table>
      <tr>
       <th>Ficha técnica</th>
      </tr>
      <tr>
        <td>Marca:</td>
        <td>${produtos[4].marca}</td>
      </tr>
      <tr>
        <td>Modelo:</td>
        <td>${produtos[4].modelo}</td>
      </tr>
      <tr>
        <td>Cor:</td>
        <td>${produtos[4].cor}</td>
      </tr>
      <tr>
        <td>Chip:</td>
        <td>${produtos[4].chip}</td>
      </tr>
      <tr>
        <td>Quantidades Chip: </td>
        <td>${produtos[4].qtd_chip}</td>
      </tr>
      <tr>
        <td>Memória:</td>
        <td>${produtos[4].memoria_interna}</td>
      </tr>
      <tr>
        <td>RAM:</td>
        <td>${produtos[4].memoria_ram}</td>
      </tr>
      <tr>
        <td>Processador:</td>
        <td>${produtos[4].processador}</td>
      </tr>
      <tr>
        <td>Sistema:</td>
        <td>${produtos[4].sistema}</td>
      </tr>
      <tr>
        <td>Versão:</td>
        <td>${produtos[4].versao}</td>
      </tr>
      <tr>
        <td>Tela:</td>
        <td>${produtos[4].tipo_tela}</td>
      </tr>
      <tr>
        <td>Tamanho:</td>
        <td>${produtos[4].tamanho_display}</td>
      </tr>
      <tr>
        <td>Resolução:</td>
        <td>${produtos[4].resolucao}</td>
      </tr>
      <tr>
        <td>Camera Traseira:</td>
        <td>${produtos[4].camera_traseira}</td>
      </tr>
      <tr>
        <td>Camera Frontal:</td>
        <td>${produtos[4].camera_frontal}</td>
      </tr>
    </table>
  </div>
    `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'motoBtn5') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
        <a   href  = "index.html">Voltar</a>
        <div class = "opcoes">
        <div>
            <img src = "${produtos[5].imagem}">
        </div>
        <div class = "detalhes-pag">
            <h1>${produtos[5].tituloDetalhe}</h1>
            <div class = "precodet">
                <p>vendido e entregue por
                    Logo.com
                </p>
                <h2>${produtos[5].preco}</h2>
                <p>à vista no cartão</p>
            </div>
            <div class = "buttonsPag">
                <button>Comprar</button>
                <button>Adicionar ao carrinho</button>
            </div>
            <br>
            <p>${produtos[5].preco} no boleto bancário</p>
            <p>${produtos[5].preco} no cartão de crédito em até 10x de R$ 69,99 s/ juros</p>
            <p>R$ 720,90 no cartão Logo.com em até 12x de R$ 39,90 s/ juros</p>
            <div class = "frete">
                <p>Calcular o frete: </p>
                <input type = "text">
                <button>OK</button>
            </div>
        </div>
    </div>

    <div class = "fichaTec">
    <table>
      <tr>
       <th>Ficha técnica</th>
      </tr>
      <tr>
        <td>Marca:</td>
        <td>${produtos[5].marca}</td>
      </tr>
      <tr>
        <td>Modelo:</td>
        <td>${produtos[5].modelo}</td>
      </tr>
      <tr>
        <td>Cor:</td>
        <td>${produtos[5].cor}</td>
      </tr>
      <tr>
        <td>Chip:</td>
        <td>${produtos[5].chip}</td>
      </tr>
      <tr>
        <td>Quantidades Chip: </td>
        <td>${produtos[5].qtd_chip}</td>
      </tr>
      <tr>
        <td>Memória:</td>
        <td>${produtos[5].memoria_interna}</td>
      </tr>
      <tr>
        <td>RAM:</td>
        <td>${produtos[5].memoria_ram}</td>
      </tr>
      <tr>
        <td>Processador:</td>
        <td>${produtos[5].processador}</td>
      </tr>
      <tr>
        <td>Sistema:</td>
        <td>${produtos[5].sistema}</td>
      </tr>
      <tr>
        <td>Versão:</td>
        <td>${produtos[5].versao}</td>
      </tr>
      <tr>
        <td>Tela:</td>
        <td>${produtos[5].tipo_tela}</td>
      </tr>
      <tr>
        <td>Tamanho:</td>
        <td>${produtos[5].tamanho_display}</td>
      </tr>
      <tr>
        <td>Resolução:</td>
        <td>${produtos[5].resolucao}</td>
      </tr>
      <tr>
        <td>Camera Traseira:</td>
        <td>${produtos[5].camera_traseira}</td>
      </tr>
      <tr>
        <td>Camera Frontal:</td>
        <td>${produtos[5].camera_frontal}</td>
      </tr>
    </table>
  </div>
    `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'motoBtn6' || e.target.className == 'motoX2') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
        <a   href  = "index.html">Voltar</a>
        <div class = "opcoes">
        <div>
            <img src = "${produtos[6].imagem}">
        </div>
        <div class = "detalhes-pag">
            <h1>${produtos[6].tituloDetalhe}</h1>
            <div class = "precodet">
                <p>vendido e entregue por
                    Logo.com
                </p>
                <h2>${produtos[6].preco}</h2>
                <p>à vista no cartão</p>
            </div>
            <div class = "buttonsPag">
                <button>Comprar</button>
                <button>Adicionar ao carrinho</button>
            </div>
            <br>
            <p>${produtos[6].preco} no boleto bancário</p>
            <p>${produtos[6].preco} no cartão de crédito em até 10x de R$ 98,99 s/ juros</p>
            <p>R$ 1101,95 no cartão Logo.com em até 12x de R$ 50,99 s/ juros</p>
            <div class = "frete">
                <p>Calcular o frete: </p>
                <input type = "text">
                <button>OK</button>
            </div>
        </div>
    </div>

    <div class = "fichaTec">
    <table>
      <tr>
       <th>Ficha técnica</th>
      </tr>
      <tr>
        <td>Marca:</td>
        <td>${produtos[6].marca}</td>
      </tr>
      <tr>
        <td>Modelo:</td>
        <td>${produtos[6].modelo}</td>
      </tr>
      <tr>
        <td>Cor:</td>
        <td>${produtos[6].cor}</td>
      </tr>
      <tr>
        <td>Chip:</td>
        <td>${produtos[6].chip}</td>
      </tr>
      <tr>
        <td>Quantidades Chip: </td>
        <td>${produtos[6].qtd_chip}</td>
      </tr>
      <tr>
        <td>Memória:</td>
        <td>${produtos[6].memoria_interna}</td>
      </tr>
      <tr>
        <td>RAM:</td>
        <td>${produtos[6].memoria_ram}</td>
      </tr>
      <tr>
        <td>Processador:</td>
        <td>${produtos[6].processador}</td>
      </tr>
      <tr>
        <td>Sistema:</td>
        <td>${produtos[6].sistema}</td>
      </tr>
      <tr>
        <td>Versão:</td>
        <td>${produtos[6].versao}</td>
      </tr>
      <tr>
        <td>Tela:</td>
        <td>${produtos[6].tipo_tela}</td>
      </tr>
      <tr>
        <td>Tamanho:</td>
        <td>${produtos[6].tamanho_display}</td>
      </tr>
      <tr>
        <td>Resolução:</td>
        <td>${produtos[6].resolucao}</td>
      </tr>
      <tr>
        <td>Camera Traseira:</td>
        <td>${produtos[6].camera_traseira}</td>
      </tr>
      <tr>
        <td>Camera Frontal:</td>
        <td>${produtos[6].camera_frontal}</td>
      </tr>
    </table>
  </div>
    `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'motoBtn7' || e.target.className == 'motoG6') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
        <a   href  = "index.html">Voltar</a>
        <div class = "opcoes">
        <div>
            <img src = "${produtos[7].imagem}">
        </div>
        <div class = "detalhes-pag">
            <h1>${produtos[7].tituloDetalhe}</h1>
            <div class = "precodet">
                <p>vendido e entregue por
                    Logo.com
                </p>
                <h2>${produtos[7].preco}</h2>
                <p>à vista no cartão</p>
            </div>
            <div class = "buttonsPag">
                <button>Comprar</button>
                <button>Adicionar ao carrinho</button>
            </div>
            <br>
            <p>${produtos[7].preco} no boleto bancário</p>
            <p>${produtos[7].preco} no cartão de crédito em até 10x de R$ 105,99 s/ juros</p>
            <p>R$ 1180,90 no cartão Logo.com em até 12x de R$ 40,90 s/ juros</p>
            <div class = "frete">
                <p>Calcular o frete: </p>
                <input type = "text">
                <button>OK</button>
            </div>
        </div>
    </div>

    <div class = "fichaTec">
    <table>
      <tr>
       <th>Ficha técnica</th>
      </tr>
      <tr>
        <td>Marca:</td>
        <td>${produtos[7].marca}</td>
      </tr>
      <tr>
        <td>Modelo:</td>
        <td>${produtos[7].modelo}</td>
      </tr>
      <tr>
        <td>Cor:</td>
        <td>${produtos[7].cor}</td>
      </tr>
      <tr>
        <td>Chip:</td>
        <td>${produtos[7].chip}</td>
      </tr>
      <tr>
        <td>Quantidades Chip: </td>
        <td>${produtos[7].qtd_chip}</td>
      </tr>
      <tr>
        <td>Memória:</td>
        <td>${produtos[7].memoria_interna}</td>
      </tr>
      <tr>
        <td>RAM:</td>
        <td>${produtos[7].memoria_ram}</td>
      </tr>
      <tr>
        <td>Processador:</td>
        <td>${produtos[7].processador}</td>
      </tr>
      <tr>
        <td>Sistema:</td>
        <td>${produtos[7].sistema}</td>
      </tr>
      <tr>
        <td>Versão:</td>
        <td>${produtos[7].versao}</td>
      </tr>
      <tr>
        <td>Tela:</td>
        <td>${produtos[7].tipo_tela}</td>
      </tr>
      <tr>
        <td>Tamanho:</td>
        <td>${produtos[7].tamanho_display}</td>
      </tr>
      <tr>
        <td>Resolução:</td>
        <td>${produtos[7].resolucao}</td>
      </tr>
      <tr>
        <td>Camera Traseira:</td>
        <td>${produtos[7].camera_traseira}</td>
      </tr>
      <tr>
        <td>Camera Frontal:</td>
        <td>${produtos[7].camera_frontal}</td>
      </tr>
    </table>
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
        if (e.target.className == 'asusBtn0' || e.target.className == 'zenfone4') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
          <a   href  = "index.html">Voltar</a>
          <div class = "opcoes">
          <div>
              <img src = "${produtosAsus[0].imagem}">
          </div>
          <div class = "detalhes-pag">
              <h1>${produtosAsus[0].tituloDetalhe}</h1>
              <div class = "precodet">
                  <p>vendido e entregue por
                      Logo.com
                  </p>
                  <h2>${produtosAsus[0].preco}</h2>
                  <p>à vista no cartão</p>
              </div>
              <div class = "buttonsPag">
                  <button>Comprar</button>
                  <button>Adicionar ao carrinho</button>
              </div>
              <br>
              <p>${produtosAsus[0].preco} no boleto bancário</p>
              <p>${produtosAsus[0].preco} no cartão de crédito em até 10x de R$ 85,99 s/ juros</p>
              <p>R$ 1520,50 no cartão Logo.com em até 12x de R$ 49,90 s/ juros</p>
              <div class = "frete">
                  <p>Calcular o frete: </p>
                  <input type = "text">
                  <button>OK</button>
              </div>
          </div>
      </div>
  
      <div class = "fichaTec">
      <table>
        <tr>
         <th>Ficha técnica</th>
        </tr>
        <tr>
          <td>Marca:</td>
          <td>${produtosAsus[0].marca}</td>
        </tr>
        <tr>
          <td>Modelo:</td>
          <td>${produtosAsus[0].modelo}</td>
        </tr>
        <tr>
          <td>Cor:</td>
          <td>${produtosAsus[0].cor}</td>
        </tr>
        <tr>
          <td>Chip:</td>
          <td>${produtosAsus[0].chip}</td>
        </tr>
        <tr>
          <td>Quantidades Chip: </td>
          <td>${produtosAsus[0].qtd_chip}</td>
        </tr>
        <tr>
          <td>Memória:</td>
          <td>${produtosAsus[0].memoria_interna}</td>
        </tr>
        <tr>
          <td>RAM:</td>
          <td>${produtosAsus[0].memoria_ram}</td>
        </tr>
        <tr>
          <td>Processador:</td>
          <td>${produtosAsus[0].processador}</td>
        </tr>
        <tr>
          <td>Sistema:</td>
          <td>${produtosAsus[0].sistema}</td>
        </tr>
        <tr>
          <td>Versão:</td>
          <td>${produtosAsus[0].versao}</td>
        </tr>
        <tr>
          <td>Tela:</td>
          <td>${produtosAsus[0].tipo_tela}</td>
        </tr>
        <tr>
          <td>Tamanho:</td>
          <td>${produtosAsus[0].tamanho_display}</td>
        </tr>
        <tr>
          <td>Resolução:</td>
          <td>${produtosAsus[0].resolucao}</td>
        </tr>
        <tr>
          <td>Camera Traseira:</td>
          <td>${produtosAsus[0].camera_traseira}</td>
        </tr>
        <tr>
          <td>Camera Frontal:</td>
          <td>${produtosAsus[0].camera_frontal}</td>
        </tr>
      </table>
    </div>
        `;

          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'asusBtn1' || e.target.className == 'zenfone4pro') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
        <a   href  = "index.html">Voltar</a>
        <div class = "opcoes">
        <div>
            <img src = "${produtosAsus[1].imagem}">
        </div>
        <div class = "detalhes-pag">
            <h1>${produtosAsus[1].tituloDetalhe}</h1>
            <div class = "precodet">
                <p>vendido e entregue por
                    Logo.com
                </p>
                <h2>${produtosAsus[1].preco}</h2>
                <p>à vista no cartão</p>
            </div>
            <div class = "buttonsPag">
                <button>Comprar</button>
                <button>Adicionar ao carrinho</button>
            </div>
            <br>
            <p>${produtosAsus[1].preco} no boleto bancário</p>
            <p>${produtosAsus[1].preco} no cartão de crédito em até 10x de R$ 102,90 s/ juros</p>
            <p>R$ 1520,00 no cartão Logo.com em até 12x de R$ 69,99 s/ juros</p>
            <div class = "frete">
                <p>Calcular o frete: </p>
                <input type = "text">
                <button>OK</button>
            </div>
        </div>
    </div>

    <div class = "fichaTec">
    <table>
      <tr>
       <th>Ficha técnica</th>
      </tr>
      <tr>
        <td>Marca:</td>
        <td>${produtosAsus[1].marca}</td>
      </tr>
      <tr>
        <td>Modelo:</td>
        <td>${produtosAsus[1].modelo}</td>
      </tr>
      <tr>
        <td>Cor:</td>
        <td>${produtosAsus[1].cor}</td>
      </tr>
      <tr>
        <td>Chip:</td>
        <td>${produtosAsus[1].chip}</td>
      </tr>
      <tr>
        <td>Quantidades Chip: </td>
        <td>${produtosAsus[1].qtd_chip}</td>
      </tr>
      <tr>
        <td>Memória:</td>
        <td>${produtosAsus[1].memoria_interna}</td>
      </tr>
      <tr>
        <td>RAM:</td>
        <td>${produtosAsus[1].memoria_ram}</td>
      </tr>
      <tr>
        <td>Processador:</td>
        <td>${produtosAsus[1].processador}</td>
      </tr>
      <tr>
        <td>Sistema:</td>
        <td>${produtosAsus[1].sistema}</td>
      </tr>
      <tr>
        <td>Versão:</td>
        <td>${produtosAsus[1].versao}</td>
      </tr>
      <tr>
        <td>Tela:</td>
        <td>${produtosAsus[1].tipo_tela}</td>
      </tr>
      <tr>
        <td>Tamanho:</td>
        <td>${produtosAsus[1].tamanho_display}</td>
      </tr>
      <tr>
        <td>Resolução:</td>
        <td>${produtosAsus[1].resolucao}</td>
      </tr>
      <tr>
        <td>Camera Traseira:</td>
        <td>${produtosAsus[1].camera_traseira}</td>
      </tr>
      <tr>
        <td>Camera Frontal:</td>
        <td>${produtosAsus[1].camera_frontal}</td>
      </tr>
    </table>
  </div>
    `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'asusBtn2' || e.target.className == 'zenfone3') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
        <a   href  = "index.html">Voltar</a>
        <div class = "opcoes">
        <div>
            <img src = "${produtosAsus[2].imagem}">
        </div>
        <div class = "detalhes-pag">
            <h1>${produtosAsus[2].tituloDetalhe}</h1>
            <div class = "precodet">
                <p>vendido e entregue por
                    Logo.com
                </p>
                <h2>${produtosAsus[2].preco}</h2>
                <p>à vista no cartão</p>
            </div>
            <div class = "buttonsPag">
                <button>Comprar</button>
                <button>Adicionar ao carrinho</button>
            </div>
            <br>
            <p>${produtosAsus[2].preco} no boleto bancário</p>
            <p>${produtosAsus[2].preco} no cartão de crédito em até 10x de R$ 110,90 s/ juros</p>
            <p>R$ 899,90 no cartão Logo.com em até 12x de R$ 45,60 s/ juros</p>
            <div class = "frete">
                <p>Calcular o frete: </p>
                <input type = "text">
                <button>OK</button>
            </div>
        </div>
    </div>

    <div class = "fichaTec">
    <table>
      <tr>
       <th>Ficha técnica</th>
      </tr>
      <tr>
        <td>Marca:</td>
        <td>${produtosAsus[2].marca}</td>
      </tr>
      <tr>
        <td>Modelo:</td>
        <td>${produtosAsus[2].modelo}</td>
      </tr>
      <tr>
        <td>Cor:</td>
        <td>${produtosAsus[2].cor}</td>
      </tr>
      <tr>
        <td>Chip:</td>
        <td>${produtosAsus[2].chip}</td>
      </tr>
      <tr>
        <td>Quantidades Chip: </td>
        <td>${produtosAsus[2].qtd_chip}</td>
      </tr>
      <tr>
        <td>Memória:</td>
        <td>${produtosAsus[2].memoria_interna}</td>
      </tr>
      <tr>
        <td>RAM:</td>
        <td>${produtosAsus[2].memoria_ram}</td>
      </tr>
      <tr>
        <td>Processador:</td>
        <td>${produtosAsus[2].processador}</td>
      </tr>
      <tr>
        <td>Sistema:</td>
        <td>${produtosAsus[2].sistema}</td>
      </tr>
      <tr>
        <td>Versão:</td>
        <td>${produtosAsus[2].versao}</td>
      </tr>
      <tr>
        <td>Tela:</td>
        <td>${produtosAsus[2].tipo_tela}</td>
      </tr>
      <tr>
        <td>Tamanho:</td>
        <td>${produtosAsus[2].tamanho_display}</td>
      </tr>
      <tr>
        <td>Resolução:</td>
        <td>${produtosAsus[2].resolucao}</td>
      </tr>
      <tr>
        <td>Camera Traseira:</td>
        <td>${produtosAsus[2].camera_traseira}</td>
      </tr>
      <tr>
        <td>Camera Frontal:</td>
        <td>${produtosAsus[2].camera_frontal}</td>
      </tr>
    </table>
  </div>
    `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'asusBtn3' || e.target.className == 'zenfone4max') {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
        <a   href  = "index.html">Voltar</a>
        <div class = "opcoes">
        <div>
            <img src = "${produtosAsus[3].imagem}">
        </div>
        <div class = "detalhes-pag">
            <h1>${produtosAsus[3].tituloDetalhe}</h1>
            <div class = "precodet">
                <p>vendido e entregue por
                    Logo.com
                </p>
                <h2>${produtosAsus[3].preco}</h2>
                <p>à vista no cartão</p>
            </div>
            <div class = "buttonsPag">
                <button>Comprar</button>
                <button>Adicionar ao carrinho</button>
            </div>
            <br>
            <p>${produtosAsus[3].preco} no boleto bancário</p>
            <p>${produtosAsus[3].preco} no cartão de crédito em até 10x de R$ 132,90 s/ juros</p>
            <p>R$ 1750,99 no cartão Logo.com em até 12x de R$ 89,90 s/ juros</p>
            <div class = "frete">
                <p>Calcular o frete: </p>
                <input type = "text">
                <button>OK</button>
            </div>
        </div>
    </div>

    <div class = "fichaTec">
    <table>
      <tr>
       <th>Ficha técnica</th>
      </tr>
      <tr>
        <td>Marca:</td>
        <td>${produtosAsus[3].marca}</td>
      </tr>
      <tr>
        <td>Modelo:</td>
        <td>${produtosAsus[3].modelo}</td>
      </tr>
      <tr>
        <td>Cor:</td>
        <td>${produtosAsus[3].cor}</td>
      </tr>
      <tr>
        <td>Chip:</td>
        <td>${produtosAsus[3].chip}</td>
      </tr>
      <tr>
        <td>Quantidades Chip: </td>
        <td>${produtosAsus[3].qtd_chip}</td>
      </tr>
      <tr>
        <td>Memória:</td>
        <td>${produtosAsus[3].memoria_interna}</td>
      </tr>
      <tr>
        <td>RAM:</td>
        <td>${produtosAsus[3].memoria_ram}</td>
      </tr>
      <tr>
        <td>Processador:</td>
        <td>${produtosAsus[3].processador}</td>
      </tr>
      <tr>
        <td>Sistema:</td>
        <td>${produtosAsus[3].sistema}</td>
      </tr>
      <tr>
        <td>Versão:</td>
        <td>${produtosAsus[3].versao}</td>
      </tr>
      <tr>
        <td>Tela:</td>
        <td>${produtosAsus[3].tipo_tela}</td>
      </tr>
      <tr>
        <td>Tamanho:</td>
        <td>${produtosAsus[3].tamanho_display}</td>
      </tr>
      <tr>
        <td>Resolução:</td>
        <td>${produtosAsus[3].resolucao}</td>
      </tr>
      <tr>
        <td>Camera Traseira:</td>
        <td>${produtosAsus[3].camera_traseira}</td>
      </tr>
      <tr>
        <td>Camera Frontal:</td>
        <td>${produtosAsus[3].camera_frontal}</td>
      </tr>
    </table>
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