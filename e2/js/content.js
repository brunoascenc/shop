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
               <p>R$ ${produtos[0].preco} à vista</p>
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
               <p>R$ ${produtos[1].preco} à vista</p>
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
               <p>R$ ${produtos[2].preco} à vista</p>
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
               <p>R$ ${produtos[3].preco} à vista</p>
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
               <p>R$ ${produtos[4].preco} à vista</p>
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
               <p>R$ ${produtos[5].preco} à vista</p>
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
               <p>R$ ${produtos[6].preco} à vista</p>
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
               <p>R$ ${produtos[7].preco} à vista</p>
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
               <p>R$ ${produtos[8].preco} à vista</p>
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
               <p>R$ ${produtos[9].preco} à vista</p>
           </span>
           <span class = "parcela">
               <p>${produtos[9].parcela}</p>
           </span>
           <a class = "homeBtn9" href = "#">Comprar</a>
       </div>
       <div class = "item">
       <img src   = "${produtos[10].imagem}">
           <h3>${produtos[10].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[10].preco} à vista</p>
           </span>
           <span class = "parcela">
               <p>${produtos[10].parcela}</p>
           </span>
           <a class = "homeBtn10" href = "#">Comprar</a>
       </div>
       <div class = "item">
       <img src   = "${produtos[11].imagem}">
           <h3>${produtos[11].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[11].preco} à vista</p>
           </span>
           <span class = "parcela">
               <p>${produtos[11].parcela}</p>
           </span>
           <a class = "homeBtn11" href = "#">Comprar</a>
       </div>
        `;

      document.addEventListener('click', e => {
        if (e.target.className === 'menorPreco') {
          const produtosMenor = produtos.sort((a, b) => a.preco - b.preco);
          let menorSaida = ``;
          menorSaida += `
          <div class = "orderBy item">
        <img src   = "${produtos[0].imagem}">
           <h3>${produtos[0].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[0].preco} à vista</p>
           </span>
           <span class = "parcela">
               <p>${produtos[0].parcela}</p>
           </span>
           <a class = "homeBtn0" href = "#">Comprar</a>
       </div>
       <div class = "orderBy item">
       <img src   = "${produtos[1].imagem}">
           <h3>${produtos[1].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[1].preco} à vista</p>
           </span>
           <span class = "parcela">
               <p>${produtos[1].parcela}</p>
           </span>
           <a class = "homeBtn1" href = "#">Comprar</a>
       </div>
       <div class = "orderBy item">
       <img src   = "${produtos[2].imagem}">
           <h3>${produtos[2].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[2].preco} à vista</p>
           </span>
           <span class = "parcela">
               <p>${produtos[2].parcela}</p>
           </span>
           <a class = "homeBtn2" href = "#">Comprar</a>
       </div>
       <div class = "orderBy item">
       <img src   = "${produtos[3].imagem}">
           <h3>${produtos[3].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[3].preco}</p>
           </span>
           <span class = "parcela">
               <p>${produtos[3].parcela}</p>
           </span>
           <a class = "homeBtn3" href = "#">Comprar</a>
       </div>
       <div class = "orderBy item">
       <img src   = "${produtos[4].imagem}">
           <h3>${produtos[4].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[4].preco} à vista</p>
           </span>
           <span class = "parcela">
               <p>${produtos[4].parcela}</p>
           </span>
           <a class = "homeBtn4" href = "#">Comprar</a>
       </div>
       <div class = "orderBy item">
       <img src   = "${produtos[5].imagem}">
           <h3>${produtos[5].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[5].preco} à vista</p>
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
               <p>R$ ${produtos[6].preco}</p>
           </span>
           <span class = "parcela">
               <p>${produtos[6].parcela}</p>
           </span>
           <a class = "homeBtn6" href = "#">Comprar</a>
       </div>
       <div class = "orderBy item">
       <img src   = "${produtos[7].imagem}">
           <h3>${produtos[7].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[7].preco} à vista</p>
           </span>
           <span class = "parcela">
               <p>${produtos[7].parcela}</p>
           </span>
           <a class = "homeBtn7" href = "#">Comprar</a>
       </div>
       <div class = "orderBy item">
       <img src   = "${produtos[8].imagem}">
           <h3>${produtos[8].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[8].preco} à vista</p>
           </span>
           <span class = "parcela">
               <p>${produtos[8].parcela}</p>
           </span>
           <a class = "homeBtn8" href = "#">Comprar</a>
       </div>
       <div class = "orderBy item">
       <img src   = "${produtos[9].imagem}">
           <h3>${produtos[9].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[9].preco} à vista</p>
           </span>
           <span class = "parcela">
               <p>${produtos[9].parcela}</p>
           </span>
           <a class = "asusBtn0" href = "#">Comprar</a>
       </div>
       <div class = "orderBy item">
       <img src   = "${produtos[10].imagem}">
           <h3>${produtos[10].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[10].preco} à vista</p>
           </span>
           <span class = "parcela">
               <p>${produtos[10].parcela}</p>
           </span>
           <a class = "asusBtn1" href = "#">Comprar</a>
       </div>
       <div class = "orderBy item">
       <img src   = "${produtos[11].imagem}">
           <h3>${produtos[11].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[11].preco} à vista</p>
           </span>
           <span class = "parcela">
               <p>${produtos[11].parcela}</p>
           </span>
           <a class = "asusBtn2" href = "#">Comprar</a>
       </div>
          `;
          document.getElementById('destaques').innerHTML = menorSaida;
        } else if (e.target.className === 'maiorPreco') {
          const produtosMenor = produtos.sort((a, b) => b.preco - a.preco);
          let maiorSaida = ``;
          maiorSaida += `
          <div class = "orderBy item">
        <img src   = "${produtos[0].imagem}">
           <h3>${produtos[0].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[0].preco} à vista</p>
           </span>
           <span class = "parcela">
               <p>${produtos[0].parcela}</p>
           </span>
           <a class = "homeBtn0" href = "#">Comprar</a>
       </div>
       <div class = "orderBy item">
       <img src   = "${produtos[1].imagem}">
           <h3>${produtos[1].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[1].preco} à vista</p>
           </span>
           <span class = "parcela">
               <p>${produtos[1].parcela}</p>
           </span>
           <a class = "homeBtn1" href = "#">Comprar</a>
       </div>
       <div class = "orderBy item">
       <img src   = "${produtos[2].imagem}">
           <h3>${produtos[2].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[2].preco} à vista</p>
           </span>
           <span class = "parcela">
               <p>${produtos[2].parcela}</p>
           </span>
           <a class = "homeBtn2" href = "#">Comprar</a>
       </div>
       <div class = "orderBy item">
       <img src   = "${produtos[3].imagem}">
           <h3>${produtos[3].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[3].preco} à vista</p>
           </span>
           <span class = "parcela">
               <p>${produtos[3].parcela}</p>
           </span>
           <a class = "homeBtn3" href = "#">Comprar</a>
       </div>
       <div class = "orderBy item">
       <img src   = "${produtos[4].imagem}">
           <h3>${produtos[4].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[4].preco} à vista</p>
           </span>
           <span class = "parcela">
               <p>${produtos[4].parcela}</p>
           </span>
           <a class = "homeBtn4" href = "#">Comprar</a>
       </div>
       <div class = "orderBy item">
       <img src   = "${produtos[5].imagem}">
           <h3>${produtos[5].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[5].preco} à vista</p>
           </span>
           <span class = "parcela">
               <p>${produtos[5].parcela}</p>
           </span>
           <a class = "homeBtn5" href = "#">Comprar</a>
       </div>
       <div class = "orderBy item">
       <img src   = "${produtos[6].imagem}">
           <h3>${produtos[6].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[6].preco} à vista</p>
           </span>
           <span class = "parcela">
               <p>${produtos[6].parcela}</p>
           </span>
           <a class = "homeBtn6" href = "#">Comprar</a>
       </div>
       <div class = "orderBy item">
       <img src   = "${produtos[7].imagem}">
           <h3>${produtos[7].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[7].preco} à vista</p>
           </span>
           <span class = "parcela">
               <p>${produtos[7].parcela}</p>
           </span>
           <a class = "homeBtn7" href = "#">Comprar</a>
       </div>
       <div class = "orderBy item">
       <img src   = "${produtos[8].imagem}">
           <h3>${produtos[8].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[8].preco} à vista</p>
           </span>
           <span class = "parcela">
               <p>${produtos[8].parcela}</p>
           </span>
           <a class = "homeBtn8" href = "#">Comprar</a>
       </div>
       <div class = "orderBy item">
       <img src   = "${produtos[9].imagem}">
           <h3>${produtos[9].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[9].preco} à vista</p>
           </span>
           <span class = "parcela">
               <p>${produtos[9].parcela}</p>
           </span>
           <a class = "asusBtn0" href = "#">Comprar</a>
       </div>
       <div class = "orderBy item">
       <img src   = "${produtos[10].imagem}">
           <h3>${produtos[10].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[10].preco} à vista</p>
           </span>
           <span class = "parcela">
               <p>${produtos[10].parcela}</p>
           </span>
           <a class = "asusBtn1" href = "#">Comprar</a>
       </div>
       <div class = "orderBy item">
       <img src   = "${produtos[11].imagem}">
           <h3>${produtos[11].titulo}</h3>
           <span class = "preco">
               <p>R$ ${produtos[11].preco} à vista</p>
           </span>
           <span class = "parcela">
               <p>${produtos[11].parcela}</p>
           </span>
           <a class = "asusBtn2" href = "#">Comprar</a>
       </div>
          `;
          document.getElementById('destaques').innerHTML = maiorSaida;
        }
        /******/
        /* COLORS FILTER  */
       /******/
        else if (e.target.className === 'branco'){
          let cores = produtos.filter(coresBranco => {
            return coresBranco.cor === 'Branco'
          })
          let saida = ``
           saida += `
           <div class = "orderBy item">
             <img src   = "${cores[0].imagem}">
             <h3>${cores[0].titulo}</h3>
               <span class = "preco">
                 <p>R$ ${cores[0].preco} à vista</p>
               </span>
               <span class = "parcela">
                 <p>${cores[0].parcela}</p>
               </span>
             <a class = "asusBtn2" href = "#">Comprar</a>
           </div>
           `
          
          document.getElementById('destaques').innerHTML = saida;
        }
        else if (e.target.className === 'dourado'){
          let cores = produtos.filter(coresBranco => {
            return coresBranco.cor === 'Dourado'
          })
          let saida = ``
          for(let i in cores ){
           saida += `
           <div class = "orderBy item">
             <img src   = "${cores[0].imagem}">
             <h3>${cores[0].titulo}</h3>
               <span class = "preco">
                 <p>R$ ${cores[0].preco} à vista</p>
               </span>
               <span class = "parcela">
                 <p>${cores[0].parcela}</p>
               </span>
             <a class = "homeBtn5" href = "#">Comprar</a>
           </div>
           `
          }
          
          document.getElementById('destaques').innerHTML = saida;
        }
        else if (e.target.className === 'preto'){
          let cores = produtos.filter(coresBranco => {
            return coresBranco.cor === 'Preto'
          })
          let saida = ``
           saida += `
           <div class = "orderBy item">
             <img src   = "${cores[0].imagem}">
             <h3>${cores[0].titulo}</h3>
               <span class = "preco">
                 <p>R$ ${cores[0].preco} à vista</p>
               </span>
               <span class = "parcela">
                 <p>${cores[0].parcela}</p>
               </span>
             <a class = "homeBtn0" href = "#">Comprar</a>
           </div>

           <div class = "orderBy item">
           <img src   = "${cores[1].imagem}">
           <h3>${cores[1].titulo}</h3>
             <span class = "preco">
               <p>R$ ${cores[1].preco} à vista</p>
             </span>
             <span class = "parcela">
               <p>${cores[1].parcela}</p>
             </span>
           <a class = "homeBtn2" href = "#">Comprar</a>
         </div>

         <div class = "orderBy item">
         <img src   = "${cores[2].imagem}">
         <h3>${cores[2].titulo}</h3>
           <span class = "preco">
             <p>R$ ${cores[2].preco} à vista</p>
           </span>
           <span class = "parcela">
             <p>${cores[2].parcela}</p>
           </span>
          <a class = "homeBtn3" href = "#">Comprar</a>
         </div>

         <div class = "orderBy item">
          <img src   = "${cores[3].imagem}">
           <h3>${cores[3].titulo}</h3>
           <span class = "preco">
           <p>R$ ${cores[3].preco} à vista</p>
           </span>
           <span class = "parcela">
           <p>${cores[3].parcela}</p>
           </span>
          <a class = "homeBtn7" href = "#">Comprar</a>
          </div>

          <div class = "orderBy item">
           <img src   = "${cores[4].imagem}">
            <h3>${cores[4].titulo}</h3>
             <span class = "preco">
              <p>R$ ${cores[4].preco} à vista</p>
             </span>
              <span class = "parcela">
               <p>${cores[4].parcela}</p>
              </span>
             <a class = "homeBtn11" href = "#">Comprar</a>
           </div>
           `
          
          document.getElementById('destaques').innerHTML = saida;
        }

        else if (e.target.className === 'azul'){
          let cores = produtos.filter(coresBranco => {
            return coresBranco.cor === 'Azul'
          })
          let saida = ``
           saida += `
           <div class = "orderBy item">
             <img src   = "${cores[0].imagem}">
             <h3>${cores[0].titulo}</h3>
               <span class = "preco">
                 <p>R$ ${cores[0].preco} à vista</p>
               </span>
               <span class = "parcela">
                 <p>${cores[0].parcela}</p>
               </span>
             <a class = "asusBtn2" href = "#">Comprar</a>
           </div>
           `
          
          document.getElementById('destaques').innerHTML = saida;
        }

        else if (e.target.className === 'cinza'){
          let cores = produtos.filter(coresBranco => {
            return coresBranco.cor === 'Cinza'
          })
          let saida = ``
           saida += `
           <div class = "orderBy item">
             <img src   = "${cores[0].imagem}">
             <h3>${cores[0].titulo}</h3>
               <span class = "preco">
                 <p>R$ ${cores[0].preco} à vista</p>
               </span>
               <span class = "parcela">
                 <p>${cores[0].parcela}</p>
               </span>
             <a class = "homeBtn1" href = "#">Comprar</a>
           </div>
           `

          document.getElementById('destaques').innerHTML = saida;
        }
        else if (e.target.className === 'vermelho'){
          let cores = produtos.filter(coresBranco => {
            return coresBranco.cor === 'Vermelho'
          })
          let saida = ``
           saida += `
           <div class = "orderBy item">
             <img src   = "${cores[0].imagem}">
             <h3>${cores[0].titulo}</h3>
               <span class = "preco">
                 <p>R$ ${cores[0].preco} à vista</p>
               </span>
               <span class = "parcela">
                 <p>${cores[0].parcela}</p>
               </span>
             <a class = "homeBtn10" href = "#">Comprar</a>
           </div>
           `

          
          document.getElementById('destaques').innerHTML = saida;
        }

        else if (e.target.className === 'verde'){
          let cores = produtos.filter(coresBranco => {
            return coresBranco.cor === 'Verde'
          })
          let saida = ``
           saida += `
           <div class = "orderBy item">
             <img src = "${cores[i].imagem}">
             <h3>${cores[i].titulo}</h3>
               <span class = "preco">
                 <p>R$ ${cores[i].preco} à vista</p>
               </span>
               <span class = "parcela">
                 <p>${cores[i].parcela}</p>
               </span>
             <a class = "homeBtn9" href = "#">Comprar</a>
           </div>
            `
          document.getElementById('destaques').innerHTML = saida;
        }
      });


     
      //Product details
      document.addEventListener('click', e => {
        if (
          e.target.className == 'homeBtn0' ||
          e.target.className == 'iphone7'
        ) {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
          <div class = "container">
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
               <img id = "img-container" src = "${produtos[0].imagem}">
                <div class = "card-nav">
                  <img onclick = "changeImg(this)" src = "${produtos[0].imagem}">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-58ab0bac-iphone7-black-2.jpg">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-58ab0bad-iphone7-black-3.jpg">
                </div>
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[0].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ ${produtos[0].preco}</h2>
                    <p>à vista no cartão</p>
               
                <div class = "buttonsPag">
                    <button><i class="fas fa-check"></i> Comprar</button>
                    <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
                </div>
                </div>
                <br>
                <p><i class="fas fa-barcode"></i> R$ ${produtos[0].preco} no boleto bancário</p>
                <p><i class="far fa-credit-card"></i> R$ ${produtos[0].preco} no cartão de crédito em até 10x de R$ 139,99 s/ juros</p>
                <p><i class="fas fa-credit-card"></i> R$ 1659,99 no cartão Logo.com em até 12x de R$ 59,99 s/ juros</p>
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
       </div>
            `;
          document.getElementById('finalizarCompra').innerHTML = saida;

        } else if (
          e.target.className == 'homeBtn1' ||
          e.target.className == 'iphoneX'
        ) {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
          <div class = "container">
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
               <div>
                 <img id = "img-container" src = "${produtos[1].imagem}">
                 <div class = "card-nav">
                   <img onclick = "changeImg(this)" src = "${produtos[1].imagem}">
                   <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-5ab2a7f1-iphone-x-cinzaespacial-perfil.png">
                   <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-5ab2a7f2-iphone-x-cinzaespacial-traseira.png">
                </div>
            </div>

            <div class = "detalhes-pag">
                <h1>${produtos[1].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ ${produtos[1].preco}</h2>
                    <p>à vista no cartão</p>
                
                <div class = "buttonsPag">
                    <button><i class="fas fa-check"></i> Comprar</button>
                    <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
                </div>
                </div>
                <br>
                <p><i class="fas fa-barcode"></i> R$ ${produtos[1].preco} no boleto bancário</p>
                <p><i class="far fa-credit-card"></i> R$ ${produtos[1].preco} no cartão de crédito em até 10x de R$ 220,99 s/ juros</p>
                <p><i class="fas fa-credit-card"></i> R$ 1899,90 no cartão Logo.com em até 12x de R$ 49,60 s/ juros</p>
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
       </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;

        } else if (
          e.target.className == 'homeBtn2' ||
          e.target.className == 'motoMaxx'
        ) {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
          <div class = "container">
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
            <img id = "img-container" src = "${produtos[2].imagem}">
              <div class = "card-nav">
                 <img onclick = "changeImg(this)" src = "${produtos[2].imagem}">
                 <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-moto-maxx-2a-g-2.png">
                 <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-moto-maxx-2a-g-3.png">
              </div>
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[2].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ ${produtos[2].preco}</h2>
                    <p>à vista no cartão</p>
                
                <div class = "buttonsPag">
                    <button><i class="fas fa-check"></i> Comprar</button>
                    <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
                </div>
                </div>
                <br>
                <p><i class="fas fa-barcode"></i> R$ ${produtos[2].preco} no boleto bancário</p>
                <p><i class="far fa-credit-card"></i> R$ ${produtos[2].preco} no cartão de crédito em até 10x de R$ 139,99 s/ juros</p>
                <p><i class="fas fa-credit-card"></i> R$ 1668,90 no cartão Logo.com em até 12x de R$ 49,90 s/ juros</p>
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
       </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (
          e.target.className == 'homeBtn3' ||
          e.target.className == 'galaxys8'
        ) {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
          <div class = "container">
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
              <div>
               <img id = "img-container" src = "${produtos[3].imagem}">
                <div class = "card-nav">
                  <img onclick = "changeImg(this)" src = "${produtos[3].imagem}">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-s8-preto-2.jpg">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-s8-preto-3.jpg">
                </div>
              </div>
            <div class = "detalhes-pag">
                <h1>${produtos[3].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ ${produtos[3].preco}</h2>
                    <p>à vista no cartão</p>
                
                <div class = "buttonsPag">
                    <button><i class="fas fa-check"></i> Comprar</button>
                    <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
                </div>
                </div>
                <br>
                <p><i class="fas fa-barcode"></i> R$ ${produtos[3].preco} no boleto bancário</p>
                <p><i class="far fa-credit-card"></i> R$ ${produtos[3].preco}no cartão de crédito em até 10x de R$ 120,99 s/ juros</p>
                <p><i class="fas fa-credit-card"></i> R$ 1689,80 no cartão Logo.com em até 12x de R$ 50,90 s/ juros</p>
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
       </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (
          e.target.className == 'homeBtn4' ||
          e.target.className == 'motoG5'
        ) {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
          <div class = "container">
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
              <div>
               <img id = "img-container" src = "${produtos[4].imagem}">
                <div class = "card-nav">
                  <img onclick = "changeImg(this)" src = "${produtos[4].imagem}">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-moto-g5-plus-platinum-2.jpg">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-moto-g5-plus-platinum-3.jpg">
                </div>
              </div>
            <div class = "detalhes-pag">
                <h1>${produtos[4].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ ${produtos[4].preco}</h2>
                    <p>à vista no cartão</p>
                
                <div class = "buttonsPag">
                    <button><i class="fas fa-check"></i> Comprar</button>
                    <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
                </div>
                </div>
                <br>
                <p><i class="fas fa-barcode"></i> R$ ${produtos[4].preco} no boleto bancário</p>
                <p><i class="far fa-credit-card"></i> R$ ${produtos[4].preco} no cartão de crédito em até 10x de R$ 80,95 s/ juros</p>
                <p><i class="fas fa-credit-card"></i> R$ 790,00 no cartão Logo.com em até 12x de R$ 39,90 s/ juros</p>
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
       </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (
          e.target.className == 'homeBtn5' ||
          e.target.className == 'galaxys7'
        ) {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
          <div class = "container">
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
            <div>
               <img id = "img-container" src = "${produtos[5].imagem}">
                <div class = "card-nav">
                  <img onclick = "changeImg(this)" src = "${produtos[5].imagem}">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-s7-edge-dourado-3.png">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-s7-edge-dourado-4.png">
                </div>
            </div>
            <div class = "detalhes-pag">
                <h1>${produtos[5].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ ${produtos[5].preco}</h2>
                    <p>à vista no cartão</p>
                
                <div class = "buttonsPag">
                    <button><i class="fas fa-check"></i> Comprar</button>
                    <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
                </div>
                </div>
                <br>
                <p><i class="fas fa-barcode"></i> R$ ${produtos[5].preco} no boleto bancário</p>
                <p><i class="far fa-credit-card"></i> R$ ${produtos[5].preco} no cartão de crédito em até 10x de R$ 130,90 s/ juros</p>
                <p><i class="fas fa-credit-card"></i> R$ 1489,90 no cartão Logo.com em até 12x de R$ 65,60 s/ juros</p>
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
       </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (
          e.target.className == 'homeBtn6' ||
          e.target.className == 'iphoneSE'
        ) {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
          <div class = "container">
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
              <div>
               <img id = "img-container" src = "${produtos[6].imagem}">
                <div class = "card-nav">
                  <img onclick = "changeImg(this)" src = "${produtos[6].imagem}">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-prata-lado.jpg">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-prata-tras.jpg">
                </div>
              </div>
            <div class = "detalhes-pag">
                <h1>${produtos[6].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ ${produtos[6].preco}</h2>
                    <p>à vista no cartão</p>
                
                <div class = "buttonsPag">
                    <button><i class="fas fa-check"></i> Comprar</button>
                    <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
                </div>
                </div>
                <br>
                <p><i class="fas fa-barcode"></i> R$ ${produtos[6].preco} no boleto bancário</p>
                <p><i class="far fa-credit-card"></i> R$ ${produtos[6].preco} no cartão de crédito em até 10x de R$ 130,90 s/ juros</p>
                <p><i class="fas fa-credit-card"></i> R$ 1159,99 no cartão Logo.com em até 12x de R$ 39,90 s/ juros</p>
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
       </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (
          e.target.className == 'homeBtn7' ||
          e.target.className == 'motoXstyle'
        ) {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
          <div class = "container">
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
              <div>
               <img id = "img-container" src = "${produtos[7].imagem}">
                <div class = "card-nav">
                  <img onclick = "changeImg(this)" src = "${produtos[7].imagem}">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-x-style-pret-2.png">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-x-style-pret-3.png">
                </div>
              </div>
            <div class = "detalhes-pag">
                <h1>${produtos[7].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ ${produtos[7].preco}</h2>
                    <p>à vista no cartão</p>
                
                <div class = "buttonsPag">
                    <button><i class="fas fa-check"></i> Comprar</button>
                    <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
                </div>
                </div>
                <br>
                <p><i class="fas fa-barcode"></i> R$ ${produtos[7].preco} no boleto bancário</p>
                <p><i class="far fa-credit-card"></i> R$ ${produtos[7].preco} no cartão de crédito em até 10x de R$ 236,99 s/ juros</p>
                <p><i class="fas fa-credit-card"></i> R$ 1899,00 no cartão Logo.com em até 12x de R$ 49,90 s/ juros</p>
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
       </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (
          e.target.className == 'homeBtn8' ||
          e.target.className == 'galaxys6'
        ) {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
          <div class = "container">
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
              <div>
               <img id = "img-container" src = "${produtos[8].imagem}">
                <div class = "card-nav">
                  <img onclick = "changeImg(this)" src = "${produtos[8].imagem}">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-galaxy-s6-flat-bran-2.png">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-galaxy-s6-flat-bran-3.png">
                </div>
              </div>
            <div class = "detalhes-pag">
                <h1>${produtos[8].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ ${produtos[8].preco}</h2>
                    <p>à vista no cartão</p>
                
                <div class = "buttonsPag">
                    <button><i class="fas fa-check"></i> Comprar</button>
                    <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
                </div>
                </div>
                <br>
                <p><i class="fas fa-barcode"></i> R$ ${produtos[8].preco} no boleto bancário</p>
                <p><i class="far fa-credit-card"></i> R$ ${produtos[8].preco} no cartão de crédito em até 10x de R$ 59,90 s/ juros</p>
                <p><i class="fas fa-credit-card"></i> R$ 550,96 no cartão Logo.com em até 12x de R$ 25,90 s/ juros</p>
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
      </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (
          e.target.className == 'homeBtn9' ||
          e.target.className == 'zenfone4'
        ) {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
          <div class = "container">
            <a   href  = "index.html">Voltar</a>
            <div class = "opcoes">
              <div>
               <img id = "img-container" src = "${produtos[9].imagem}">
                <div class = "card-nav">
                  <img onclick = "changeImg(this)" src = "${produtos[9].imagem}">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-5b3134b4-zenfone-4-verde-perfil.png">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-5b3134b5-zenfone-4-verde-traseira.png">
                </div>
              </div>
            <div class = "detalhes-pag">
                <h1>${produtos[9].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Logo.com
                    </p>
                    <h2>R$ ${produtos[9].preco}</h2>
                    <p>à vista no cartão</p>
                
                <div class = "buttonsPag">
                    <button><i class="fas fa-check"></i> Comprar</button>
                    <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
                </div>
                </div>
                <br>
                <p><i class="fas fa-barcode"></i> R$ ${produtos[9].preco} no boleto bancário</p>
                <p><i class="far fa-credit-card"></i> R$ ${produtos[9].preco} no cartão de crédito em até 10x de R$ 59,90 s/ juros</p>
                <p><i class="fas fa-credit-card"></i> R$ 550,96 no cartão Logo.com em até 12x de R$ 25,90 s/ juros</p>
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
            <td>${produtos[9].marca}</td>
          </tr>
          <tr>
            <td>Modelo:</td>
            <td>${produtos[9].modelo}</td>
          </tr>
          <tr>
            <td>Cor:</td>
            <td>${produtos[9].cor}</td>
          </tr>
          <tr>
            <td>Chip:</td>
            <td>${produtos[9].chip}</td>
          </tr>
          <tr>
            <td>Quantidades Chip: </td>
            <td>${produtos[9].qtd_chip}</td>
          </tr>
          <tr>
            <td>Memória:</td>
            <td>${produtos[9].memoria_interna}</td>
          </tr>
          <tr>
            <td>RAM:</td>
            <td>${produtos[9].memoria_ram}</td>
          </tr>
          <tr>
            <td>Processador:</td>
            <td>${produtos[9].processador}</td>
          </tr>
          <tr>
            <td>Sistema:</td>
            <td>${produtos[9].sistema}</td>
          </tr>
          <tr>
            <td>Versão:</td>
            <td>${produtos[9].versao}</td>
          </tr>
          <tr>
            <td>Tela:</td>
            <td>${produtos[9].tipo_tela}</td>
          </tr>
          <tr>
            <td>Tamanho:</td>
            <td>${produtos[9].tamanho_display}</td>
          </tr>
          <tr>
            <td>Resolução:</td>
            <td>${produtos[9].resolucao}</td>
          </tr>
          <tr>
            <td>Camera Traseira:</td>
            <td>${produtos[9].camera_traseira}</td>
          </tr>
          <tr>
            <td>Camera Frontal:</td>
            <td>${produtos[9].camera_frontal}</td>
          </tr>
        </table>
      </div>
      </div>
        `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (
          e.target.className == 'homeBtn10' ||
          e.target.className == 'zenfone4pro'
        ) {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
          <div class = "container">
          <a   href  = "index.html">Voltar</a>
          <div class = "opcoes">
            <div>
              <img id = "img-container" src = "${produtos[10].imagem}">
                <div class = "card-nav">
                  <img onclick = "changeImg(this)" src = "${produtos[10].imagem}">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-zenfone-4-selfie-pro-vermelho-perfil.png">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-zenfone-4-selfie-pro-vermelho-traseira.png">
                </div>
            </div>
          <div class = "detalhes-pag">
              <h1>${produtos[10].tituloDetalhe}</h1>
              <div class = "precodet">
                  <p>vendido e entregue por
                      Logo.com
                  </p>
                  <h2>R$ ${produtos[10].preco}</h2>
                  <p>à vista no cartão</p>
              
              <div class = "buttonsPag">
                  <button><i class="fas fa-check"></i> Comprar</button>
                  <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
              </div>
              </div>
              <br>
              <p><i class="fas fa-barcode"></i> R$ ${produtos[10].preco} no boleto bancário</p>
              <p><i class="far fa-credit-card"></i> R$ ${produtos[10].preco} no cartão de crédito em até 10x de R$ 59,90 s/ juros</p>
              <p><i class="fas fa-credit-card"></i> R$ 550,96 no cartão Logo.com em até 12x de R$ 25,90 s/ juros</p>
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
          <td>${produtos[10].marca}</td>
        </tr>
        <tr>
          <td>Modelo:</td>
          <td>${produtos[10].modelo}</td>
        </tr>
        <tr>
          <td>Cor:</td>
          <td>${produtos[10].cor}</td>
        </tr>
        <tr>
          <td>Chip:</td>
          <td>${produtos[10].chip}</td>
        </tr>
        <tr>
          <td>Quantidades Chip: </td>
          <td>${produtos[10].qtd_chip}</td>
        </tr>
        <tr>
          <td>Memória:</td>
          <td>${produtos[10].memoria_interna}</td>
        </tr>
        <tr>
          <td>RAM:</td>
          <td>${produtos[10].memoria_ram}</td>
        </tr>
        <tr>
          <td>Processador:</td>
          <td>${produtos[10].processador}</td>
        </tr>
        <tr>
          <td>Sistema:</td>
          <td>${produtos[10].sistema}</td>
        </tr>
        <tr>
          <td>Versão:</td>
          <td>${produtos[10].versao}</td>
        </tr>
        <tr>
          <td>Tela:</td>
          <td>${produtos[10].tipo_tela}</td>
        </tr>
        <tr>
          <td>Tamanho:</td>
          <td>${produtos[10].tamanho_display}</td>
        </tr>
        <tr>
          <td>Resolução:</td>
          <td>${produtos[10].resolucao}</td>
        </tr>
        <tr>
          <td>Camera Traseira:</td>
          <td>${produtos[10].camera_traseira}</td>
        </tr>
        <tr>
          <td>Camera Frontal:</td>
          <td>${produtos[10].camera_frontal}</td>
        </tr>
      </table>
    </div>
    </div>
      `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (
          e.target.className == 'homeBtn11' ||
          e.target.className == 'zenfone3'
        ) {
          menuDiv.style.display = 'none';
          bannerDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
          <div class = "container">
        <a   href  = "index.html">Voltar</a>
        <div class = "opcoes">
          <div>
            <img id = "img-container" src = "${produtos[11].imagem}">
              <div class = "card-nav">
                <img onclick = "changeImg(this)" src = "${produtos[11].imagem}">
                <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-5aa96fd9-zenfone-3-preto-2.jpg">
                <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-5aa96fd9-zenfone-3-preto-3.jpg">
              </div>
          </div>
        <div class = "detalhes-pag">
            <h1>${produtos[11].tituloDetalhe}</h1>
            <div class = "precodet">
                <p>vendido e entregue por
                    Logo.com
                </p>
                <h2>R$ ${produtos[11].preco}</h2>
                <p>à vista no cartão</p>
            
            <div class = "buttonsPag">
                <button><i class="fas fa-check"></i> Comprar</button>
                <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
            </div>
            </div>
            <br>
            <p><i class="fas fa-barcode"></i> R$ ${produtos[11].preco} no boleto bancário</p>
            <p><i class="far fa-credit-card"></i> R$ ${produtos[11].preco} no cartão de crédito em até 10x de R$ 59,90 s/ juros</p>
            <p><i class="fas fa-credit-card"></i> R$ 550,96 no cartão Logo.com em até 12x de R$ 25,90 s/ juros</p>
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
        <td>${produtos[11].marca}</td>
      </tr>
      <tr>
        <td>Modelo:</td>
        <td>${produtos[11].modelo}</td>
      </tr>
      <tr>
        <td>Cor:</td>
        <td>${produtos[11].cor}</td>
      </tr>
      <tr>
        <td>Chip:</td>
        <td>${produtos[11].chip}</td>
      </tr>
      <tr>
        <td>Quantidades Chip: </td>
        <td>${produtos[11].qtd_chip}</td>
      </tr>
      <tr>
        <td>Memória:</td>
        <td>${produtos[11].memoria_interna}</td>
      </tr>
      <tr>
        <td>RAM:</td>
        <td>${produtos[11].memoria_ram}</td>
      </tr>
      <tr>
        <td>Processador:</td>
        <td>${produtos[11].processador}</td>
      </tr>
      <tr>
        <td>Sistema:</td>
        <td>${produtos[11].sistema}</td>
      </tr>
      <tr>
        <td>Versão:</td>
        <td>${produtos[11].versao}</td>
      </tr>
      <tr>
        <td>Tela:</td>
        <td>${produtos[11].tipo_tela}</td>
      </tr>
      <tr>
        <td>Tamanho:</td>
        <td>${produtos[11].tamanho_display}</td>
      </tr>
      <tr>
        <td>Resolução:</td>
        <td>${produtos[11].resolucao}</td>
      </tr>
      <tr>
        <td>Camera Traseira:</td>
        <td>${produtos[11].camera_traseira}</td>
      </tr>
      <tr>
        <td>Camera Frontal:</td>
        <td>${produtos[11].camera_frontal}</td>
      </tr>
    </table>
  </div>
  </div>
    `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        }

        /* PRODUCT UI CARD */
        const imgContainer = document.getElementById('img-container')
          window.changeImg = (image) => {
             imgContainer.src = image.src
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

