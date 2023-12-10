let inpt = document.getElementById("input");
let container = document.getElementById('container');


function appendcard(data){

    container.innerHTML ="";

    data.forEach(item =>{
        let card = createCard(item);
        container.append(card)
    })

 
}

function createCard(item){

    let card = document.createElement("div");
    let img = document.createElement("img");
    let p = document.createElement("p");
    let h3 = document.createElement("h3");

    card.className = "card";
    img.className = "poster";
    h3.className = "title";
    p.className = "type";

    img.src= item.Poster;
    h3.innerText = item.Title;
    p.innerText = item.Type;

    card.append(h3,p,img);
    return card;
}

inpt.addEventListener("input",()=>{deBounce1()})


//to fetch the data from api

async function fetchData(){
    try{
        let res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1c71ed52&s=${inpt.value}`);
        let data = await res.json();
        console.log(data);
        appendcard(data.Search);
    }
    catch(err){

    }
}



function deBounce(fun,delay){
    let timer;

    return function (){
        if(timer){
            clearTimeout(timer);
        }

    timer = setTimeout(function(){
            // fetchData()
            fun()
        },delay)
    }
}


let deBounce1 = deBounce(fetchData,1000);
