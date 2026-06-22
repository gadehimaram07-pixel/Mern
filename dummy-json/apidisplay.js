async function display(){
    try{
    let response= await fetch("https://fakestoreapi.com/products");
    const data= await  response.json();
        let container= document.getElementById("main");
        let template= document.getElementById("temp");
        data.forEach((products)=>{
        let clone= template.content.cloneNode(true);
        clone.querySelector(".title1").innerText= products.id;
        clone.querySelector(".title2").innerText= products.title;
        clone.querySelector(".img").src= products.image;
        clone.querySelector(".img").alt= products.thumbnail;
        clone.querySelector(".desc").innerText= products.description;
        container.appendChild(clone);
    });
    }
    catch(error){
        console.log(error);
    }
}
display();