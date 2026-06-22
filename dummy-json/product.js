async function getproduct(){
    const params= new URLSearchParams(window.location.search);
    const productId=params.get("id");
         let response = await fetch(`https://dummyjson.com/products/${productId}`);
        const data = await response.json();
    try{
        let container = document.getElementById("res");
        let template = document.getElementById("data");

            let clone = template.content.cloneNode(true);
            clone.querySelector(".title").innerText = data.title;
            clone.querySelector(".des").innerText = data.description;
            clone.querySelector(".img").alt = data.image;
            clone.querySelector(".img").src = data.thumbnail;          
            container.appendChild(clone);
    }
    catch(error){
        console.log(error);
    }
}
getproduct();

