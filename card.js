// Fetch JSON data

fetch('card.json')
    .then(response => response.json())
    .then(data => {
        //Create cards
        const cardContainer = document.getElementById('cardContainer');
        data.forEach(cardData => {
            const cardHtml = `<div class="col-md-4">
            <div class="card">
              <img src="${cardData.image}" class="card-img-top" alt="Card Image">
              <div class="card-body">
                <h5 class="card-title">${cardData.name}</h5>
                <p class="card-text">${cardData.description}</p>
                
              </div>
            </div>
          </div>`;
            cardContainer.innerHTML += cardHtml;
        });
    }).catch(error => {
        console.log("Error fetching Data : ", error);
    })