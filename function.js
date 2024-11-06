const cardbydata=(card)=>{
    let sumary = document.createElement("div");
    sumary.classList = "card-container";
    sumary.innerHTML = `
     <div class="card-img-p">
          <img class="img-card" src=${card.icon}>
          <p class="p-card">${card.category}</p>
        </div>

        <div class="card-info">
          <p class="info-p">${card.score}</p>
          <p class="info-100"> / 100</p>
        </div>

    `;

    return sumary;
}

function loadcards(data){
    let cardscontainer = document.querySelector(".cards-container");
    for(i=0;i<data.length;i++){
        cardscontainer.appendChild(cardbydata(data[i]));
    }

}

loadcards(data);