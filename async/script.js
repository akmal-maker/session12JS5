var container = document.querySelector("div");
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    for (let i in json) {
      document.body.innerHTML += `
        <div class="card">
        <img src="${json[i].image}" alt="image" class="card-img"></img>
        <h2 class="card-content"></h2>
        <p class="card-text"></p>
        <a href="#" class="card-btn">READ MORE</a>
    </div>
        `;
    }
  })

  .catch((err) => {
console.log(err);
  });
