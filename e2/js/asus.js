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
            <p>R$ ${produtosAsus[0].preco} à vista</p>
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
            <p>R$ ${produtosAsus[1].preco} à vista</p>
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
            <p>R$ ${produtosAsus[2].preco} à vista</p>
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
            <p>R$ ${produtosAsus[3].preco} à vista</p>
        </span>
        <span class = "parcela">
            <p>${produtosAsus[3].parcela}</p>
        </span>
        <a class = "asusBtn3" href = "#">Comprar</a>
        </div>
     `;
        
     document.addEventListener('click', e => {
      if(e.target.className === 'menorPreco'){
       const menorPreco = produtosAsus.sort((a,b) => a.preco - b.preco)
       let menorSaida = ``
       menorSaida += `
       <div class = "item">
       <img src   = "${produtosAsus[0].imagem}">
          <h3>${produtosAsus[0].titulo}</h3>
          <span class = "preco">
              <p>R$ ${produtosAsus[0].preco} à vista</p>
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
              <p>R$ ${produtosAsus[1].preco} à vista</p>
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
              <p>R$ ${produtosAsus[2].preco} à vista</p>
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
              <p>R$ ${produtosAsus[3].preco} à vista</p>
          </span>
          <span class = "parcela">
              <p>${produtosAsus[3].parcela}</p>
          </span>
          <a class = "asusBtn3" href = "#">Comprar</a>
      </div>
       `
       document.getElementById('destaquesAsus').innerHTML = menorSaida
      }

      else if (e.target.className === 'maiorPreco'){
       const maiorPreco = produtosAsus.sort((a,b) => b.preco - a.preco)
       let maiorSaida = ``
       maiorSaida += `
       <div class = "item">
       <img src   = "${produtosAsus[0].imagem}">
          <h3>${produtosAsus[0].titulo}</h3>
          <span class = "preco">
              <p>R$ ${produtosAsus[0].preco} à vista</p>
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
              <p>R$ ${produtosAsus[1].preco} à vista</p>
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
              <p>R$ ${produtosAsus[2].preco} à vista</p>
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
              <p>R$ ${produtosAsus[3].preco} à vista</p>
          </span>
          <span class = "parcela">
              <p>${produtosAsus[3].parcela}</p>
          </span>
          <a class = "asusBtn3" href = "#">Comprar</a>
      </div>
       `
       document.getElementById('destaquesAsus').innerHTML = maiorSaida
       }
    })

        //Product details
        document.addEventListener('click', e => {
          if (
            e.target.className == 'asusBtn0' ||
            e.target.className == 'zenfone4'
          ) {
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
                    <h2>R$ ${produtosAsus[0].preco}</h2>
                    <p>à vista no cartão</p>
                </div>
                <div class = "buttonsPag">
                    <button>Comprar</button>
                    <button>Adicionar ao carrinho</button>
                </div>
                <br>
                <p>R$ ${produtosAsus[0].preco} no boleto bancário</p>
                <p>R$ ${
                  produtosAsus[0].preco
                } no cartão de crédito em até 10x de R$ 85,99 s/ juros</p>
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
          } else if (
            e.target.className == 'asusBtn1' ||
            e.target.className == 'zenfone4pro'
          ) {
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
                  <h2>R$ ${produtosAsus[1].preco}</h2>
                  <p>à vista no cartão</p>
              </div>
              <div class = "buttonsPag">
                  <button>Comprar</button>
                  <button>Adicionar ao carrinho</button>
              </div>
              <br>
              <p>R$ ${produtosAsus[1].preco} no boleto bancário</p>
              <p>R$ ${
                produtosAsus[1].preco
              } no cartão de crédito em até 10x de R$ 102,90 s/ juros</p>
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
          } else if (
            e.target.className == 'asusBtn2' ||
            e.target.className == 'zenfone3'
          ) {
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
                  <h2>R$ ${produtosAsus[2].preco}</h2>
                  <p>à vista no cartão</p>
              </div>
              <div class = "buttonsPag">
                  <button>Comprar</button>
                  <button>Adicionar ao carrinho</button>
              </div>
              <br>
              <p>R$ ${produtosAsus[2].preco} no boleto bancário</p>
              <p>R$ ${
                produtosAsus[2].preco
              } no cartão de crédito em até 10x de R$ 110,90 s/ juros</p>
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
          } else if (
            e.target.className == 'asusBtn3' ||
            e.target.className == 'zenfone4max'
          ) {
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
                  <h2>R$ ${produtosAsus[3].preco}</h2>
                  <p>à vista no cartão</p>
              </div>
              <div class = "buttonsPag">
                  <button>Comprar</button>
                  <button>Adicionar ao carrinho</button>
              </div>
              <br>
              <p>R$ ${produtosAsus[3].preco} no boleto bancário</p>
              <p>R$ ${
                produtosAsus[3].preco
              } no cartão de crédito em até 10x de R$ 132,90 s/ juros</p>
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
  