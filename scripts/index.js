// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


// import {navbar} from  "../components/navbar.js";

// let n = document.getElementById("navbar")

//    n.innerHTML = navbar();

let arr= [];

function india(){

    arr.append(document.querySelector("#in").value)

    localStorage.setItem("country",JSON.stringify(arr))
}


 
async function newsapp(){

 
try{
 
  const res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`)

  const data = await res.json();

    append(data.articles);
      console.log(data.articles)
}
catch(err){
    console.log(err)
}


}

newsapp();

let main = document.getElementById("main")

function append(data){
  
  data.forEach(function(elem){
  
   let div = document.createElement("div")

   let div2 =  document.createElement("div")


    let image = document.createElement("img")
         image.src = elem.urlToImage

     let title = document.createElement("h3")
        title.innerText = elem.title

  let content = document.createElement("p")
     content.innerText = elem.content

    let pub = document.createElement("h4")
        pub.innerText = elem.publishedAt;

    
     
    div2.append(title,content,pub)
 
     div.append(image,div2)
   main.append(div);

  })

}


let search = document.querySelector("input_search").value

 async function searchnews(){

 try{
 
     const res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${search}`);

     const data = await res.json()

     console.log(data);
 }
 catch(err){
     console.log(err)
 }


}

searchnews()