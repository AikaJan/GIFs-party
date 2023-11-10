
document.getElementById('searchform').addEventListener('submit', function (event) {
    event.preventDefault();

    const searchTerm = document.getElementById('search').value;

    axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
        .then(function (response) {
            const gifUrl = response.data.data[0].images.original.url;

            const gifContainer = document.getElementById('gifContainer');
            const imgElement = document.createElement('img');
            imgElement.src = gifUrl;
            gifContainer.appendChild(imgElement);
        })
        .catch(function (error) {
            console.error('Error fetching GIF:', error);
        });
});

document.getElementById('removeGifs').addEventListener('click', function () {
    const gifContainer = document.getElementById('gifContainer');


    while (gifContainer.firstChild) {
        gifContainer.removeChild(gifContainer.firstChild);
    }
});


console.log("Let's get this party started!");

