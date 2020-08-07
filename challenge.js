
const searchForm=document.querySelector(".search");
const input=document.querySelector(".input1");
const NewsList=document.querySelector(".class-list");
searchForm.addEventListener('submit',retrieve);
    function retrieve(e)
    {
       e.preventDefault()
        const apiKey="EA7D8DDD0F9C4079AA9381E45F671B1A";
        let topic=input.value;
        
        let url=`https://api.breakingapi.com/news?q=${topic}&type=headlines&locale=en-US&api_key=${apiKey}`;
        fetch(url).then((res)=>
        {
            return res.json();
    
        })
        .then((data)=>{
            console.log(data);
            data.articles.forEach(article => {
                let li=document.createElement('li');
                let a=document.createElement('a');
                a.setAttribute('href',article.link);
                a.setAttribute('target','_blank');
                a.textContent=article.title;
                li.appendChild(a);
                NewsList.appendChild(li);
            });
        })
        
    }



