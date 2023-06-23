const table = document.querySelector("tbody");
fetch("http://localhost:3000/Product")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element, i) => {
      const id = element.id;
      const tr = document.createElement("tr");
      const min_img = document.createElement("img");
      const image_img = document.createElement("img");
      const black_img = document.createElement("img");
      const gold_img = document.createElement("img");
      const bronze_img = document.createElement("img");
      image_img.src = element.imgs;
      min_img.src = element.min_imgs;
      black_img.src = element.colors_imgs.black;
      gold_img.src = element.colors_imgs.gold;
      bronze_img.src = element.colors_imgs.bronze;
      const category_a = document.createElement("td");
      const category_b = document.createElement("td");
      const number = document.createElement("td");
      const name = document.createElement("td");
      const color = document.createElement("td");
      const minprice = document.createElement("td");
      const maxprice = document.createElement("td");
      const blackmax = document.createElement("td");
      const goldmax = document.createElement("td");
      const bronzemax = document.createElement("td");
      const image = document.createElement("td");
      const minimage = document.createElement("td");
      const blackimage = document.createElement("td");
      const goldimage = document.createElement("td");
      const bronzeimage = document.createElement("td");
      const buttons = document.createElement("td");
      const input = document.createElement("input");
      const deletebtn = document.createElement("button");
      const okbtn = document.createElement("button");
      const category_abtn = document.createElement("button");
      const category_bbtn = document.createElement("button");

      okbtn.innerText = "Ok";
      deletebtn.innerText = "Delete";
      name.textContent = element.name;
      color.textContent = element.color;
      minprice.textContent = element.price.min_price;
      maxprice.textContent = element.price.max_price;
      blackmax.textContent = element.price.black_max;
      goldmax.textContent = element.price.gold_max;
      bronzemax.textContent = element.price.bronze_max;
      const namebtn = document.createElement("button");
      const colorbtn = document.createElement("button");
      const minpricebtn = document.createElement("button");
      const maxpricebtn = document.createElement("button");
      const blackimagebtn = document.createElement("button");
      const goldimagebtn = document.createElement("button");
      const bronzeimagebtn = document.createElement("button");
      const imagebtn = document.createElement("button");
      const minimagebtn = document.createElement("button");
      const blackmaxbtn = document.createElement("button");
      const goldmaxbtn = document.createElement("button");
      const bronzemaxbtn = document.createElement("button");
      category_a.innerText = element.categorys.category_a;
      category_b.innerText = element.categorys.category_b;

      namebtn.innerText = "Edit";
      colorbtn.innerText = "Edit";
      minpricebtn.innerText = "Edit";
      maxpricebtn.innerText = "Edit";
      blackimagebtn.innerText = "Edit";
      goldimagebtn.innerText = "Edit";
      bronzeimagebtn.innerText = "Edit";
      imagebtn.innerText = "Edit";
      minimagebtn.innerText = "Edit";
      blackmaxbtn.innerText = "Edit";
      goldmaxbtn.innerText = "Edit";
      bronzemaxbtn.innerText = "Edit";
      category_abtn.innerText = "Edit";
      category_bbtn.innerText = "Edit";

      number.textContent = i + 1;
      name.append(namebtn);
      color.append(colorbtn);
      minprice.append(minpricebtn);
      maxprice.append(maxpricebtn);
      blackmax.append(blackmaxbtn);
      goldmax.append(goldmaxbtn);
      bronzemax.append(bronzemaxbtn);
      minimage.append(min_img, minimagebtn);
      blackimage.append(black_img, blackimagebtn);
      goldimage.append(gold_img, goldimagebtn);
      bronzeimage.append(bronze_img, bronzeimagebtn);
      category_a.append(category_abtn);
      category_b.append(category_bbtn);

      buttons.append(deletebtn, input, okbtn);
      image.append(image_img, imagebtn);

      tr.append(
        number,
        name,
        category_a,
        category_b,
        color,
        minprice,
        maxprice,
        blackmax,
        goldmax,
        bronzemax,
        image,
        minimage,
        blackimage,
        goldimage,
        bronzeimage,
        buttons
      );
      table.appendChild(tr);
      input.style.display = "none";
      okbtn.style.display = "none";
      deletebtn.addEventListener("click", () => {
        tr.remove();
        fetch(`http://localhost:3000/Product/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Deleted");
          });
      });

      function update(x) {
        input.style.display = "block";
        okbtn.style.display = "block";
        console.log("test");

        okbtn.addEventListener("click", async () => {
          if (input.value === "") {
            input.style.display = "none";
            okbtn.style.display = "none";
          } else {
            let obj = {};
            await fetch(`http://localhost:3000/Product/${id}/`)
              .then((res) => res.json())
              .then((data) => {
                obj = data;
                data[x] = input.value;
              });

            await fetch(`http://localhost:3000/Product/${id}/`, {
              method: "PUT",
              body: JSON.stringify(obj),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            });
          }
        });
      }
      namebtn.addEventListener("click", () => {
        update("name");
      });
    
     
    });
  });
