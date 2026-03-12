const generatedAdvice = document.getElementById("advice-generated")
const btn = document.getElementById("adviceButton")
const inputId = document.getElementById("adviceId");
const inputWord = document.getElementById("adviceWord");
// pesquisar por um conselho aleatório
const searchRandomAdvice = () => {

    fetch(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`)

        .then((res) => res.json())
        .then((data) => {
            console.log(data.slip.advice)

            generatedAdvice.innerText = data.slip.advice
        })
        .catch((err) => {
            generatedAdvice.innerText = "Error to find the advice!"
        })

}
btn.addEventListener("click", () => {
    searchRandomAdvice()
})
// pesquisar consleho por id
const searchAdviceById = (id) => {
  fetch(`https://api.adviceslip.com/advice/${id}`)
    .then((res) => res.json())
    .then((data) => {
      generatedAdvice.innerText = data.slip.advice;
    })
    .catch(() => {
      generatedAdvice.innerText = "Nenhum conselho encontrado com esse ID!";
    });
};
// Conselho por palavra
const searchAdviceByWord = (word) => {
  fetch(`https://api.adviceslip.com/advice/search/${word}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.slips && data.slips.length > 0) {
        generatedAdvice.innerText = data.slips[0].advice;
      } else {
        generatedAdvice.innerText = "We don't have any advice with this word!";
      }
    })
    .catch(() => {
      generatedAdvice.innerText = "Error in search!";
    });
};

// Eventos

// Enter no input de ID
inputId.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && inputId.value) {
    searchAdviceById(inputId.value);
  }
});

// Enter no input de palavra
inputWord.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && inputWord.value) {
    searchAdviceByWord(inputWord.value);
  }
});