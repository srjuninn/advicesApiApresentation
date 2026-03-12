# 💡 Conselho do Dia

Aplicação simples em HTML, CSS e JavaScript que consome a **Advice Slip API** para gerar conselhos aleatórios, buscar por ID ou pesquisar por palavra-chave.

---

## 🚀 Funcionalidades

- **Gerar conselho aleatório**  
  Ao clicar no botão **Generate Advice**, a aplicação faz uma requisição para:
  ```
  GET [https://api.adviceslip.com/advice](https://api.adviceslip.com/advice)
  ```
  O resultado é exibido dinamicamente na tela.

- **Buscar conselho por ID**  
  Ao digitar um número no campo de ID e pressionar **Enter**, a aplicação consulta:
  ```
  GET [https://api.adviceslip.com/advice/{id}](https://api.adviceslip.com/advice/{id})
  ```
  Exemplo: `https://api.adviceslip.com/advice/42`

- **Pesquisar conselho por palavra-chave**  
  Ao digitar uma palavra no campo de busca e pressionar **Enter**, a aplicação consulta:
  ```
  GET `https://api.adviceslip.com/advice/search/{word}` [(api.adviceslip.com in Bing)](https://www.bing.com/search?q="https%3A%2F%2Fapi.adviceslip.com%2Fadvice%2Fsearch%2F%257Bword%257D")
  ```
  Exemplo: `https://api.adviceslip.com/advice/search/life`

---

## 📂 Estrutura do Projeto

- **index.html** → Estrutura da página com inputs e botão de ação.  
- **style.css** → Estilização com efeito *glassmorphism*.  
- **script.js** → Lógica de consumo da API e manipulação do DOM.

---

## 📜 Funções Disponíveis

- `searchRandomAdvice()` → Busca um conselho aleatório.  
- `searchAdviceById(id)` → Busca conselho específico pelo ID informado.  
- `searchAdviceByWord(word)` → Busca conselho que contenha a palavra-chave.  

Cada função utiliza **fetch API** para realizar requisições HTTP e atualiza o conteúdo do elemento `#advice-generated`.

---

## 🖥️ Como usar
1. Dê uma estrelinha no repositório ⭐  
2. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/conselho-do-dia.git
   ```
3. Abra o arquivo `index.html` no navegador.  
4. Interaja com os campos e botões para gerar ou buscar conselhos.

---

## 📌 Observações

- A API não exige autenticação.  
- O parâmetro `timestamp` foi adicionado na requisição aleatória para evitar cache e garantir que sempre venha um conselho novo.  
- Caso não haja resultados para uma palavra ou ID, mensagens de erro amigáveis são exibidas.

---

## ✨ Exemplo de Uso

- Clique em **Generate Advice** → “Don’t count the days, make the days count.”  
- Digite `42` no campo de ID → “Life is what happens when you’re busy making other plans.”  
- Digite `life` no campo de palavra → retorna o primeiro conselho relacionado.

---

## 👨‍💻 Autores

Feito com ❤️ em JavaScript puro.  
Por [@srjuninn](https://github.com/srjuninn) e [@GoBrazill](https://github.com/gobrazill)  
Responsáveis pela implementação do consumo da API via **fetch**.
