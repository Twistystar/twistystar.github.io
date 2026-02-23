// Stores the users team across the session
let team = [];

// Holds the most recent search
let currentPokemon = null;

// Cache to avoid repeated API calls for the same pokemon
let pokemonCache = {};

// Grab elements
const audio = document.getElementById("pokemonAudio");
const playButton = document.getElementById("playButton");
const volumeControl = document.getElementById("volumeControl");

// Play / pause toggle
playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "⏸️";
    } else {
        audio.pause();
        playButton.textContent = "▶️";
    }
});

// When audio ends reset button
audio.addEventListener("ended", () => {
    playButton.textContent = "▶️";
});


// Volume slider
volumeControl.addEventListener("input", () => {
    audio.volume = volumeControl.value;
});

// Populate the 4 move dropdowns
function populateMoveDropdowns(moves) {

    // Grab references to the four dropdown elements
    const dropdowns = [
        document.getElementById("move1"),
        document.getElementById("move2"),
        document.getElementById("move3"),
        document.getElementById("move4")
    ];

    // Clear any previous options in each dropdown
    dropdowns.forEach(select => {
        select.innerHTML = "";
    });

    // For each dropdown add every available move as an option
    dropdowns.forEach(select => {
        moves.forEach(moveObj => {
            const option = document.createElement("option");

            // The value stored when selected
            option.value = moveObj.move.name;

            // The text shown to the user
            option.textContent = moveObj.move.name;
            select.appendChild(option);
        });
    });
}

// Add selected Pokémon to team
function addToTeam() {

    // Read the users selected moves from the dropdowns
    const selectedMoves = [
        document.getElementById("move1").value,
        document.getElementById("move2").value,
        document.getElementById("move3").value,
        document.getElementById("move4").value
    ];

    // Create team member object
    const teamMember = {
        name: currentPokemon.name,
        image: currentPokemon.sprites.other["official-artwork"].front_default,
        moves: selectedMoves
    };

    // Add the pokemon to the team array
    team.push(teamMember);

    // Display team on page
    displayTeam();
}

// Display the team on the page
function displayTeam() {

    // Get the container where the team is shown
    const teamDiv = document.getElementById("teamDisplay");

    // Reset the display but keep the header
    teamDiv.innerHTML = "<h2>Your Team</h2>";

    // Loop through each pokemon in the team
    team.forEach(member => {

        // Create a card container for this pokmon
        const card = document.createElement("div");

        // Create and set the pokemon name
        const name = document.createElement("p");
        name.textContent = member.name.toUpperCase();

        // Create and set the image
        const img = document.createElement("img");
        img.src = member.image;
        img.width = 120;

        // Create a list of the selected moves
        const moveList = document.createElement("ul");
        member.moves.forEach(move => {
            const li = document.createElement("li");
            li.textContent = move;
            moveList.appendChild(li);
        });

        // Assemble the card
        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(moveList);

        // Add the card to the team display
        teamDiv.appendChild(card);
    });
}

// Main search function
async function FindPokemon() {

    // Get user input
    const input = document.getElementById('pokemonInput').value.toLowerCase();

    // Get display container 
    const display = document.getElementById('pokemonDisplay');

    // Clear previous display
    display.innerHTML = "";

    try {
        let data;

        // CHECK CACHE FIRST FOR POKEMON
        if (pokemonCache[input]) {
            console.log("Loaded from cache");
            data = pokemonCache[input];
        } else {
            console.log("Fetching from API");

            // Fetch pokemon data from PokeAPI
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);

            // Handles invalid pokemon names/IDs
            if (!response.ok) {
                display.innerHTML = "<p>Pokémon not found!</p>";
                return;
            }

            data = await response.json();

            //  Store in cache for future
            pokemonCache[input] = data;
        }

        // Save current pokemon selection
        currentPokemon = data;

        // Populate the move dropdown menus
        populateMoveDropdowns(data.moves);

        // Display pokemon images
        const imgUrl = data.sprites.other["official-artwork"].front_default;
        const img = document.createElement("img");
        img.src = imgUrl;
        img.alt = data.name;
        img.width = 250;
        display.appendChild(img);

        // Display pokemo name
        const name = document.createElement("p");
        name.textContent = data.name.toUpperCase();
        display.appendChild(name);

        // Create audio object
        const audio = document.getElementById("pokemonAudio");
        audio.src = `https://play.pokemonshowdown.com/audio/cries/${data.name}.mp3`;

    } catch (error) {
        display.innerHTML = "<p>Error fetching Pokémon data.</p>";
        console.error(error);
    }
}