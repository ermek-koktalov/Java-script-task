document.getElementById("button-1").addEventListener("click", getText);

function getText() {
  fetch("db.txt")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      document.getElementById("output").innerHTML = data;
    });
}

document.getElementById("button-2").addEventListener("click", getJson);

function getJson() {
  fetch("db.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = "";

      data.forEach((item) => {
        output += `<article key="${item.id}" class="products__item">
       
        <img
          class="products__item-photo"
          src="${item.img}"
          alt=""
        />
        <div class="products__item-info">
          <header>
            <h3>${item.title}</h3>
             <span class="products__item-price">${item.price}сом</span>
          </header>
          <p class="products__item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
      });

      document.getElementById("output").innerHTML = output;
    })
    .catch((error) => {
      console.log(error);
    });
}
document.getElementById("button-3").addEventListener("click", getApiData);

function getApiData() {
  fetch("https://api.github.com/users")
    .then((res) => {
      return res.json();
    })
    .then((users) => {
      let output = "";

      users.forEach((user) => {
        output += `<li>${user.login}</li>`;
      });

      document.getElementById("output").innerHTML = output;
    });
}
