// Shows the filter menu and hides the add new articel form
function showFilter() {
    // Make the filter section visible
    document.getElementById("filterContent").style.display = "block";

    // Hide the new article section
    document.getElementById("newContent").style.display = "none";
}

// Shows the add new article form and hides the filter menu
function showAddNew() {
    // Show the new article form
    document.getElementById("newContent").style.display = "block";

    // Hide the filter menu
    document.getElementById("filterContent").style.display = "none";
}

// Filters articles based on checkbox selections
function filterArticles() {

    // Get whether each checkbox is checked
    let showOpinion = document.getElementById("opinionCheckbox").checked;
    let showRecipe = document.getElementById("recipeCheckbox").checked;
    let showUpdate = document.getElementById("updateCheckbox").checked;

    // Get all articles of each type
    let opinions = document.getElementsByClassName("opinion");
    let recipes = document.getElementsByClassName("recipe");
    let updates = document.getElementsByClassName("update");

    // Loop through Opinion articles
    for (let i = 0; i < opinions.length; i++) {
        // Show or hide depending on checkbox
        opinions[i].style.display = showOpinion ? "block" : "none";
    }

    // Loop through Recipe articles
    for (let i = 0; i < recipes.length; i++) {
        // Show or hide depending on checkbox
        recipes[i].style.display = showRecipe ? "block" : "none";
    }

    // Loop through Update articles
    for (let i = 0; i < updates.length; i++) {
        // Show or hide depending on checkbox
        updates[i].style.display = showUpdate ? "block" : "none";
    }
}

// Adds a new article to the page
function addNewArticle() {

    // Get title text from input field
    let title = document.getElementById("inputHeader").value;

    // Get article body text from input field
    let text = document.getElementById("inputArticle").value;

    // Variables to store article type and label
    let type = "";
    let label = "";

    // Check which radio button is selected
    if (document.getElementById("opinionRadio").checked) {
        type = "opinion";  // class name
        label = "Opinion"; // visible label
    }
    else if (document.getElementById("recipeRadio").checked) {
        type = "recipe";
        label = "Recipe";
    }
    else if (document.getElementById("lifeRadio").checked) {
        type = "update";
        label = "Update";
    }

    // Create a new <article> element
    let article = document.createElement("article");

    // Give the article the correct class
    article.className = type;

    // Fill the article with HTML content
    article.innerHTML =
        "<span class='marker'>" + label + "</span>" + // label badge
        "<h2>" + title + "</h2>" +                    // title
        "<p>" + text + "</p>" +                       // body text
        "<p><a href='moreDetails.html'>Read more...</a></p>"; // link

    // Add the new article to the article list
    document.getElementById("articleList").appendChild(article);
}
