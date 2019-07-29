function appleProd() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', './content/apple.json', true);
  
    xhr.onload = () => {
      if (xhr.status === 200) {
        const produtos = JSON.parse(xhr.responseText);
        let output = `
           `;
        output += `
         <div class = "itemBanner">
           <img src = "https://novemberfive.co/images/blog/apple-september-iphoneX-apps/u_img_header.jpg">
         </div>
               <div class = "item">
               <img src   = "${produtos[0].imagem}">
                  <h3>${produtos[0].titulo}</h3>
                  <span class = "preco">
                      <p>R$ ${produtos[0].preco} à vista</p>
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
                      <p>R$ ${produtos[1].preco} à vista</p>
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
                      <p>R$ ${produtos[2].preco} à vista</p>
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
                      <p>R$ ${produtos[3].preco} à vista</p>
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
                      <p>R$ ${produtos[4].preco} à vista</p>
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
                      <p>R$ ${produtos[5].preco} à vista</p>
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
                      <p>R$ ${produtos[6].preco} à vista</p>
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
                      <p>R$ ${produtos[7].preco} à vista</p>
                  </span>
                  <span class = "parcela">
                      <p>${produtos[7].parcela}</p>
                  </span>
                  <a class = "appleBtn7" href = "#">Comprar</a>
              </div>
                  `;

        document.addEventListener('click', e => {
          if(e.target.className === 'menorPreco'){
            const menorPreco = produtos.sort((a,b) => a.preco - b.preco)
            let menorSaida = ``
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
               <a class = "appleBtn0" href = "#">Comprar</a>
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
               <a class = "appleBtn1" href = "#">Comprar</a>
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
               <a class = "appleBtn2" href = "#">Comprar</a>
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
               <a class = "appleBtn3" href = "#">Comprar</a>
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
               <a class = "appleBtn4" href = "#">Comprar</a>
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
               <a class = "appleBtn5" href = "#">Comprar</a>
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
               <a class = "appleBtn6" href = "#">Comprar</a>
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
               <a class = "appleBtn7" href = "#">Comprar</a>
           </div>
            `
            document.getElementById('destaquesApple').innerHTML = menorSaida
          }

          else if (e.target.className === 'maiorPreco'){
            const menorPreco = produtos.sort((a,b) => b.preco - a.preco)
            let maiorSaida = ``
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
               <a class = "appleBtn0" href = "#">Comprar</a>
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
               <a class = "appleBtn1" href = "#">Comprar</a>
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
               <a class = "appleBtn2" href = "#">Comprar</a>
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
               <a class = "appleBtn3" href = "#">Comprar</a>
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
               <a class = "appleBtn4" href = "#">Comprar</a>
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
               <a class = "appleBtn5" href = "#">Comprar</a>
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
               <a class = "appleBtn6" href = "#">Comprar</a>
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
               <a class = "appleBtn7" href = "#">Comprar</a>
           </div>
            `
            document.getElementById('destaquesApple').innerHTML = maiorSaida
          }

          
          /** COLORS FILTER  **/

          else if (e.target.className === 'branco'){
            let cores = produtos.filter(coresPrata => {
              return coresPrata.cor === 'Prata'
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
               <a class = "appleBtn2" href = "#">Comprar</a>
             </div>
             `
            
            document.getElementById('destaquesApple').innerHTML = saida;
          }
          else if (e.target.className === 'dourado'){
            let cores = produtos.filter(coresBranco => {
              return coresBranco.cor === 'Dourado'
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
               <a class = "appleBtn4" href = "#">Comprar</a>
             </div>
             `
            
            document.getElementById('destaquesApple').innerHTML = saida;
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
               <a class = "appleBtn7" href = "#">Comprar</a>
             </div>
             `
            
            document.getElementById('destaquesApple').innerHTML = saida;
          }
  
          else if (e.target.className === 'cinza'){
            let cores = produtos.filter(coresBranco => {
              return coresBranco.cor === 'Cinza'
            })
            let saida = ``
             saida += `
             <div class = "orderBy item">
               <img src  = "${cores[0].imagem}">
               <h3>${cores[0].titulo}</h3>
                 <span class = "preco">
                   <p>R$ ${cores[0].preco} à vista</p>
                 </span>
                 <span class = "parcela">
                   <p>${cores[0].parcela}</p>
                 </span>
               <a class = "appleBtn0" href = "#">Comprar</a>
             </div>

             <div class = "orderBy item">
             <img src  = "${cores[1].imagem}">
             <h3>${cores[1].titulo}</h3>
               <span class = "preco">
                 <p>R$ ${cores[1].preco} à vista</p>
               </span>
               <span class = "parcela">
                 <p>${cores[1].parcela}</p>
               </span>
             <a class = "appleBtn1" href = "#">Comprar</a>
           </div>

           <div class = "orderBy item">
           <img src  = "${cores[2].imagem}">
           <h3>${cores[2].titulo}</h3>
             <span class = "preco">
               <p>R$ ${cores[2].preco} à vista</p>
             </span>
             <span class = "parcela">
               <p>${cores[2].parcela}</p>
             </span>
           <a class = "appleBtn3" href = "#">Comprar</a>
         </div>

         <div class = "orderBy item">
         <img src  = "${cores[3].imagem}">
         <h3>${cores[3].titulo}</h3>
           <span class = "preco">
             <p>R$ ${cores[3].preco} à vista</p>
           </span>
           <span class = "parcela">
             <p>${cores[3].parcela}</p>
           </span>
         <a class = "appleBtn6" href = "#">Comprar</a>
       </div>
            `
            
            
            document.getElementById('destaquesApple').innerHTML = saida;
          }
        })          
  
        //Product details
        document.addEventListener('click', e => {
          if (e.target.className == 'appleBtn0') {
            menuDiv.style.display = 'none';
            compraDiv.style.display = 'block';
  
            let saida = `
            <div class = "container">
              <a   href  = "index.html">Voltar</a>
           
              <div class = "opcoes">
                <div>
                  <img id = "img-container" src = "${produtos[0].imagem}">
                    <div class = "card-nav">
                       <img onclick = "changeImg(this)" src = "${produtos[0].imagem}">
                       <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-5ab2a7f1-iphone-x-cinzaespacial-perfil.png">
                       <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-5ab2a7f2-iphone-x-cinzaespacial-traseira.png">
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
                         <button>Comprar</button>
                      <button>Adicionar ao carrinho</button>
                  </div>
                  </div>
                 
                  <br>
                  <p>R$ ${produtos[0].preco} no boleto bancário</p>
                  <p>R$ ${
                    produtos[0].preco
                  } no cartão de crédito em até 10x de R$ 220,99 s/ juros</p>
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
        </div>
              `;
            document.getElementById('finalizarCompra').innerHTML = saida;
          } else if (
            e.target.className == 'appleBtn1' ||
            e.target.className == 'iphone6s'
          ) {
            menuDiv.style.display = 'none';
            compraDiv.style.display = 'block';
  
            let saida = `
            <div class = "container">
              <a   href  = "index.html">Voltar</a>
              <div class = "opcoes">
              <div>
               <img id = "img-container" src = "${produtos[1].imagem}">
                <div class = "card-nav">
                  <img onclick = "changeImg(this)" src = "${produtos[1].imagem}">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-58347a09-cinza-e-lado.png">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-58347a0a-cinza-e-traseira.png">
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
                  </div>
                  <div class = "buttonsPag">
                      <button>Comprar</button>
                      <button>Adicionar ao carrinho</button>
                  </div>
                  <br>
                  <p>R$ ${produtos[1].preco} no boleto bancário</p>
                  <p>R$ ${
                    produtos[1].preco
                  } no cartão de crédito em até 10x de R$ 130,99 s/ juros</p>
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
        </div>
          `;
            document.getElementById('finalizarCompra').innerHTML = saida;
          } else if (e.target.className == 'appleBtn2') {
            menuDiv.style.display = 'none';
            compraDiv.style.display = 'block';
  
            let saida = `
            <div class = "container">
              <a   href  = "index.html">Voltar</a>
              <div class = "opcoes">
              <div>
               <img id = "img-container" src = "${produtos[2].imagem}">
                <div class = "card-nav">
                  <img onclick = "changeImg(this)" src = "${produtos[2].imagem}">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-prata-lado.jpg">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-prata-tras.jpg">
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
                  </div>
                  <div class = "buttonsPag">
                      <button>Comprar</button>
                      <button>Adicionar ao carrinho</button>
                  </div>
                  <br>
                  <p>R$ ${produtos[2].preco} no boleto bancário</p>
                  <p>R$ ${
                    produtos[2].preco
                  } no cartão de crédito em até 10x de R$ 109,99 s/ juros</p>
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
        </div>
          `;
            document.getElementById('finalizarCompra').innerHTML = saida;
          } else if (
            e.target.className == 'appleBtn3' ||
            e.target.className == 'iphone5s'
          ) {
            menuDiv.style.display = 'none';
            compraDiv.style.display = 'block';
  
            let saida = `
            <div class = "container">
              <a   href  = "index.html">Voltar</a>
              <div class = "opcoes">
              <div>
              <img id = "img-container" src = "${produtos[3].imagem}">
               <div class = "card-nav">
                 <img onclick = "changeImg(this)" src = "${produtos[3].imagem}">
                 <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-58bd690f-cinza-e-lado.png">
                 <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-58bd6910-cinza-e-traseira.png">
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
                  </div>
                  <div class = "buttonsPag">
                      <button>Comprar</button>
                      <button>Adicionar ao carrinho</button>
                  </div>
                  <br>
                  <p>R$ ${produtos[3].preco} no boleto bancário</p>
                  <p>R$ ${
                    produtos[3].preco
                  } no cartão de crédito em até 10x de R$ 89,99 s/ juros</p>
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
        </div>
          `;
            document.getElementById('finalizarCompra').innerHTML = saida;
          } else if (
            e.target.className == 'appleBtn4' ||
            e.target.className == 'iphone5sGold'
          ) {
            menuDiv.style.display = 'none';
            compraDiv.style.display = 'block';
  
            let saida = `
            <div class = "container">
              <a   href  = "index.html">Voltar</a>
              <div class = "opcoes">
              <div>
              <img id = "img-container" src = "${produtos[4].imagem}">
               <div class = "card-nav">
                 <img onclick = "changeImg(this)" src = "${produtos[4].imagem}">
                 <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-dourado-lado.png">
                 <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-dourado-traseira.png">
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
                  </div>
                  <div class = "buttonsPag">
                      <button>Comprar</button>
                      <button>Adicionar ao carrinho</button>
                  </div>
                  <br>
                  <p>R$ ${produtos[4].preco} no boleto bancário</p>
                  <p>R$ ${
                    produtos[4].preco
                  } no cartão de crédito em até 10x de R$ 89,90 s/ juros</p>
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
        </div>
          `;
            document.getElementById('finalizarCompra').innerHTML = saida;
          } else if (
            e.target.className == 'appleBtn5' ||
            e.target.className == 'iphone5c'
          ) {
            menuDiv.style.display = 'none';
            compraDiv.style.display = 'block';
  
            let saida = `
            <div class = "container">
              <a   href  = "index.html">Voltar</a>
              <div class = "opcoes">
              <div>
               <img id = "img-container" src = "${produtos[5].imagem}">
                <div class = "card-nav">
                  <img onclick = "changeImg(this)" src = "${produtos[5].imagem}">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-58344fcc-branco-lado.png">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-58344fcd-branco-traseira.png">
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
                  </div>
                  <div class = "buttonsPag">
                      <button>Comprar</button>
                      <button>Adicionar ao carrinho</button>
                  </div>
                  <br>
                  <p>R$ ${produtos[5].preco} no boleto bancário</p>
                  <p>R$ ${
                    produtos[5].preco
                  } no cartão de crédito em até 10x de R$ 50,99 s/ juros</p>
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
            <tr>R$ 
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
            e.target.className == 'appleBtn6' ||
            e.target.className == 'iphone6Splus'
          ) {
            menuDiv.style.display = 'none';
            compraDiv.style.display = 'block';
  
            let saida = `
            <div class = "container">
              <a   href  = "index.html">Voltar</a>
              <div class = "opcoes">
              <div>
               <img id = "img-container" src = "${produtos[6].imagem}">
                <div class = "card-nav">
                  <img onclick = "changeImg(this)" src = "${produtos[6].imagem}">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-58347a09-cinza-e-lado.png">
                  <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-58347a0a-cinza-e-traseira.png">
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
                  </div>
                  <div class = "buttonsPag">
                      <button>Comprar</button>
                      <button>Adicionar ao carrinho</button>
                  </div>
                  <br>
                  <p>R$ ${produtos[6].preco} no boleto bancário</p>
                  <p>R$ ${
                    produtos[6].preco
                  } no cartão de crédito em até 10x de R$ 129,99 s/ juros</p>
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
        </div>
          `;
            document.getElementById('finalizarCompra').innerHTML = saida;
          } else if (e.target.className == 'appleBtn7') {
            menuDiv.style.display = 'none';
            compraDiv.style.display = 'block';
  
            let saida = `
            <div class = "container">
              <a   href  = "index.html">Voltar</a>
              <div class = "opcoes">
                <div>
                   <img id = "img-container" src = "${produtos[7].imagem}">
                     <div class = "card-nav">
                        <img onclick = "changeImg(this)" src = "${produtos[7].imagem}">
                        <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-58ab0bac-iphone7-black-2.jpg">
                        <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-58ab0bad-iphone7-black-3.jpg">
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
                  </div>
                  <div class = "buttonsPag">
                      <button>Comprar</button>
                      <button>Adicionar ao carrinho</button>
                  </div>
                  <br>
                  <p>R$ ${produtos[7].preco} no boleto bancário</p>
                  <p>R$ ${
                    produtos[7].preco
                  } no cartão de crédito em até 10x de R$ 123,99 s/ juros</p>
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
        </div>
          `;
            document.getElementById('finalizarCompra').innerHTML = saida;
          }
          const imgContainer = document.getElementById('img-container')
          window.changeImg = (image) => {
             imgContainer.src = image.src
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