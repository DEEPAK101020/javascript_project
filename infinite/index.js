

let container = document.getElementById("container");



let page = 1;
fetchData()

window.addEventListener("scroll",()=>{
    
    let clientHeight = document.documentElement.clientHeight;
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;

    //console.log(clientHeight,scrollHeight,scrollTop);
    if((scrollHeight - clientHeight)<=Math.ceil(scrollTop)){
        console.log("we are at the bottom");
        page++;
        fetchData(page);
    }
})


//to create the card
function createCard(item) {
    // Create card container element
    const card = document.createElement('div');
    card.classList.add('card');

  
    // Create title element
    const title = document.createElement('h2');
    title.textContent = item.title;
    card.appendChild(title);
    // card paragraph
    const parag = document.createElement('p');
    parag.textContent = item.body;
    card.appendChild(parag);
  
    return card;
  }

  //to fetch the data
  async function fetchData(page=1){
    try{
        let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`);
        let data = await res.json();
        console.log(data);
        appendData(data)
    }
    catch(err){
        console.log(err);
    }
  }


  //to append the data

  function appendData(data){
    data.forEach(item => container.append(createCard(item)));
  }