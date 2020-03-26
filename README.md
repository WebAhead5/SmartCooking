# SMART COOKING
**Thinking cooking is a hard task** :question: 

**Well, we'll change your mind ..** :heavy_check_mark: 
<!-- https://webahead5.github.io/SmartCooking -->
 Check our [Website](https://webahead5.github.io/SmartCooking)
---
The website is built in a way that gives the user an easy way to get his favourite recipes from our selected recipes list !!
Upon selecting the recipe name from the selecting scrollbar, the ingredients will be loaded on the right side of the page.If the user want to get extra details about the instructions of the recipe ,he can click on ***learn more*** button .As a result, an external tab will pop on the broswer with instructions.

In addition to that , we expanded our website capability where we listen to our users more by giving them the ability to add specific ingredients that they want and based on that we recommend for them several recipes.


## Table of Contents
- [User Story](#user-story)
- [Project Goals](#Project-Goals)
- [APIs Use](#APIs-Use)
- [API Mechanism](#API-Mechanism)
- [API Code](#API-Code)
---

## User Story

```gherkin=
# 1st Scenario 
    User: Enter the website without typing an ingredient
    Result : User will see a default list of recipes that he choose from.
# 2nd Scenario 
    User: Type an ingredient in the box and click the run button
    Result : User will see list of recipes which include the ingredient that he typed.
```


## Project Goals

* **Designing an interactive website where the aim is making cooking much more easier by connecting and providing the user with huge list of recipes that he can either choose by default or strict his limit to learn recipes that includes a specific ingredient**


* **The capability to integrate HTML,CSS and javascript all together beside working more on the fetch side and see how it works and how we coud deal with the data from server and apply it to our website.**


## APIs Use

* **Get all of the Recipes' Names, Images,Ingredients and their attached links from the database**.

    http://www.recipepuppy.com/api/
     

## API Mechanism

* **First we start fetching from main page :**

        http://www.recipepuppy.com/api/
        

* **The website that we have is providing us with some Optional Parameters which are :**

1. * > i : comma delimited ingredients
1. * > q : normal search query
1. * > p : page

> For example:
http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3
    
**As a result of that, we made an another fetch upon the user's selection for ingredients.**


## API Code

        fetch(url)

    .then(function (response) {
        return response.json();
    })

    .then(function set_data(data) {
        for(let i=0 ;i <data.results.length;i++){
    RecipeMang.push({href:data.results[i].href,ingredients:data.results[i].ingredients,thumbnail:data.results[i].thumbnail,title:data.results[i].title});
    
    var option =document.createElement("OPTION");
    var Recipe = document.createTextNode(RecipeMang[i].title);
    option.appendChild(Recipe);
    document.getElementById("Recipes").appendChild(option);

    }

    }
    



---

### Thank you! 


