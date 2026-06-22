async function search() {
    searchInput = document.querySelector(".search").value.toLowerCase();
    let container = document.getElementById("res");
    if (searchInput === "") {
        container.innerHTML = "";
        fetchproducts();
        return;
    }
    try {
        let response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        matchdata = data.products.filter(product => product.title.toLowerCase().includes(searchInput));

        let template = document.getElementById("data");
        container.innerHTML = "";
        matchdata.forEach((product) => {

            let clone = template.content.cloneNode(true);

            clone.querySelector(".title").innerText = product.title;
            clone.querySelector(".des").innerText = product.description;
            clone.querySelector(".img").alt = product.image;
            clone.querySelector(".img").src = product.thumbnail;
            container.appendChild(clone);
        });
    }
    catch (error) {
        console.log(error);
    }
}

let skip=0;
async function limitproducts() {
    try {
        let response = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`);
        const data = await response.json();

        let container = document.getElementById("res");
        let template = document.getElementById("data");

        data.products.forEach((product) => {

            let clone = template.content.cloneNode(true);

            clone.querySelector(".title").innerText = product.title;
            clone.querySelector(".des").innerText = product.description;
            clone.querySelector(".img").alt = product.image;
            clone.querySelector(".img").src = product.thumbnail;
            clone.querySelector(".card").addEventListener("click", () => {
                window.location.href = `product.html?id=${product.id}`;
            });
            container.appendChild(clone);
        });
        skip += 10;
    }
    catch (error) {
        console.log(error);
    }
}
limitproducts();