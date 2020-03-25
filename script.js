var RecipeMang =[]; 
	
const url ="https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/ ";

fetch(url)

    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        for(let i=0 ;i <data.results.length;i++)
      RecipeMang.push({href:data.results[i].href,ingredients:data.results[i].ingredients,thumbnail:data.results[i].thumbnail,title:data.results[i].title});
    })

    function getref() {
        var a = document.createElement('a');
        var linkText = document.createTextNode("my title text");
        a.appendChild(linkText);
        a.href = data[i].ref;
        document.body.appendChild(a);
        console.log(a.href);
         document

        

    };
    

