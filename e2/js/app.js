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

// Apple Products
document.getElementById('apple').addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'apple.json', true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      const produtos = JSON.parse(xhr.responseText);
      let output = '';
      for (let i in produtos) {
        output += `
                <div>
                <img src="${produtos[i].imagem}">
                <h3>${produtos[i].titulo}</h3>
                <span class="preco">
                    <p>${produtos[i].preco}</p>
                </span>
                <span class="parcela">
                    <p>${produtos[i].parcela}</p>
                </span>
                <a href="#">Comprar</a>
            </div>
                `;
      }
      document.getElementById('destaques').innerHTML = output;
    } else if (xhr.status === 404) {
      document.getElementById('destaques').innerHTML = 'Produto não encontrado';
    }
  };
  xhr.send();
});


// Samsung Products
document.getElementById('samsung').addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'samsung.json', true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      const produtos = JSON.parse(xhr.responseText);
      let output = '';
      for (let i in produtos) {
        output += `
                <div>
                <img src="${produtos[i].imagem}">
                <h3>${produtos[i].titulo}</h3>
                <span class="preco">
                    <p>${produtos[i].preco}</p>
                </span>
                <span class="parcela">
                    <p>${produtos[i].parcela}</p>
                </span>
                <a href="#">Comprar</a>
            </div>
                `;
      }
      document.getElementById('destaques').innerHTML = output;
    } else if (xhr.status === 404) {
      document.getElementById('destaques').innerHTML = 'Produto não encontrado';
    }
  };
  xhr.send();
});

// Motorola Products
document.getElementById('motorola').addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'motorola.json', true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      const produtos = JSON.parse(xhr.responseText);
      let output = '';
      for (let i in produtos) {
        output += `
                <div>
                <img src="${produtos[i].imagem}">
                <h3>${produtos[i].titulo}</h3>
                <span class="preco">
                    <p>${produtos[i].preco}</p>
                </span>
                <span class="parcela">
                    <p>${produtos[i].parcela}</p>
                </span>
                <a href="#">Comprar</a>
            </div>
                `;
      }
      document.getElementById('destaques').innerHTML = output;
    } else if (xhr.status === 404) {
      document.getElementById('destaques').innerHTML = 'Produto não encontrado';
    }
  };
  xhr.send();
});


// Asus Products
document.getElementById('asus').addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'asus.json', true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      const produtos = JSON.parse(xhr.responseText);
      let output = '';
      for (let i in produtos) {
        output += `
                <div>
                <img src="${produtos[i].imagem}">
                <h3>${produtos[i].titulo}</h3>
                <span class="preco">
                    <p>${produtos[i].preco}</p>
                </span>
                <span class="parcela">
                    <p>${produtos[i].parcela}</p>
                </span>
                <a href="#">Comprar</a>
            </div>
                `;
      }
      document.getElementById('destaques').innerHTML = output;
    } else if (xhr.status === 404) {
      document.getElementById('destaques').innerHTML = 'Produto não encontrado';
    }
  };
  xhr.send();
});

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


// Contato
const contatoDiv = document.querySelector('.contato-form');
const menuDiv = document.querySelector('.menu');
const bannerDiv = document.querySelector('.banner');
const destaquesDiv = document.querySelector('#destaques');
const voltarHome = document.querySelectorAll('.voltarHome');

document.querySelector('#contato').addEventListener('click', () => {
  menuDiv.style.display = 'none';
  destaquesDiv.style.display = 'none';
  bannerDiv.style.display = 'none';
  contatoDiv.style.display = 'flex';
});

voltarHome.forEach(button => {
  button.addEventListener('click', () => {
    contatoDiv.style.display = 'none';
    menuDiv.style.display = 'flex';
    destaquesDiv.style.display = 'grid';
    bannerDiv.style.display = 'block';
  });
});
