function products() {
  fetch("db.json")
      .then((res) => {
          return res.json();
      }).then((product) => {
          product.forEach(element => {
              const productsTitle = document.querySelector(".wrapper");
              productsTitle.style.display = "flex";
              productsTitle.style.flexWrap = "wrap";

              const container = document.createElement("div");
              container.className = ("container");
              container.style.display = "flex";
              container.style.width = "300px";
              container.style.flexDirection = "column";
              container.style.backgroundColor = "#fff";
              container.style.margin = "40px auto";
              container.style.border = "8px solid #ccc";
              container.style.backgroundColor = "rgb(125, 138, 127)";
              container.style.textAlign = "center";
              container.style.borderRadius = "10px";
              container.style.padding = "3em";
              productsTitle.appendChild(container);

              const divImg = document.createElement("div");
              container.appendChild(divImg);

              const photo = document.createElement("img");
              photo.style.width = "200px";
              photo.style.height = "250px";
              photo.style.objectFit = "contain";
              divImg.appendChild(photo);

              const div1 = document.createElement("div");
              div1.className = ("div-1");
              div1.style.width = "280px";
              div1.style.height = "60px";
              div1.style.textAlign = "center";
              div1.style.display = "flex";
              div1.style.borderBottom = "3px solid #ccc";
              div1.style.justifyContent = "space-between";
              div1.style.alignItems = "center";
              div1.style.padding = "10px";
              divImg.appendChild(div1);

              const h1 = document.createElement("h1");
              h1.style.fontSize = "15px";
              h1.style.width = "200px";
              div1.appendChild(h1);

              const h2 = document.createElement("h2");
              h2.style.fontSize = "15px";
              div1.appendChild(h2);

              const text = document.createElement("div");
              container.appendChild(text);

              const p = document.createElement("p");
              text.appendChild(p);

              photo.getAttribute("src");
              photo.src = element.img;
              h1.textContent = element.title;
              h2.textContent = element.price;
              p.textContent = element.desc;
              
          });
      })
}
products()