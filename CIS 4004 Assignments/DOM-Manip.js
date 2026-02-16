function showFilter() {
    document.getElementById("filterContent").style.display = "block";
    document.getElementById("newContent").style.display = "none";
}

function showAddNew() {
    document.getElementById("newContent").style.display = "block";
    document.getElementById("filterContent").style.display = "none";
}

function filterArticles() {
    // Get checkbox states
    let showOpinion = document.getElementById("opinionCheckbox").checked;
    let showRecipe = document.getElementById("recipeCheckbox").checked;
    let showUpdate = document.getElementById("updateCheckbox").checked;

    // Get articles by type
    let opinions = document.getElementsByClassName("opinion");
    let recipes = document.getElementsByClassName("recipe");
    let updates = document.getElementsByClassName("update");

    // Show/hide Opinion
    for (let i = 0; i < opinions.length; i++) {
        opinions[i].style.display = showOpinion ? "block" : "none";
    }

    // Show/hide Recipe
    for (let i = 0; i < recipes.length; i++) {
        recipes[i].style.display = showRecipe ? "block" : "none";
    }

    // Show/hide Update
    for (let i = 0; i < updates.length; i++) {
        updates[i].style.display = showUpdate ? "block" : "none";
    }
}

function addNewArticle() {

    // Get values
    let title = document.getElementById("inputHeader").value;
    let text = document.getElementById("inputArticle").value;

    let type = "";
    let label = "";

    if (document.getElementById("opinionRadio").checked) {
        type = "opinion";
        label = "Opinion";
    }
    else if (document.getElementById("recipeRadio").checked) {
        type = "recipe";
        label = "Recipe";
    }
    else if (document.getElementById("lifeRadio").checked) {
        type = "update";
        label = "Update";
    }

    // ✅ Create ARTICLE (not div)
    let article = document.createElement("article");

    // ✅ Assign correct class
    article.className = type;

    // ✅ Match structure exactly
    article.innerHTML =
        "<span class='marker'>" + label + "</span>" +
        "<h2>" + title + "</h2>" +
        "<p>" + text + "</p>" +
        "<p><a href='moreDetails.html'>Read more...</a></p>";

    // Add to list
    document.getElementById("articleList").appendChild(article);
}
