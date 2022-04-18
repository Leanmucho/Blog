
key = "6BAGWsn5nlBio2nAqOXrIDw0lDCW31Gc";
api = `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${key}`;
secret = "MreqcQMg6RE2zGa8";
id = "63a77566-ce1c-4ca5-994d-d5ed9eda2e87";

// Get the news
fetch(api)
    .then(response => response.json())
    .then(data => {
        // Get the news
        let news = data.results;
        // Get the news container
        let newsContainer = document.getElementById("news");
        // Loop through the news
        for (let i = 0;i < news.length - 24; i++) {
            // Create a new div
            let newDiv = document.createElement("div");
            // Add the class
            newDiv.classList.add("news-item");
            // Add the news
            newDiv.innerHTML = `
                <h3 translate="yes">${news[i].title}</h3>
                <p>${news[i].abstract}</p>
                <a href="${news[i].url}">Read more</a>
            `;
            // Add the div to the container
            newsContainer.appendChild(newDiv);
        }
    }
    // If there is an error
    ).catch(error => {
        console.log(error);
    }
    // If there is an error
    );


    // un for que se repite 5 veces