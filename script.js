function getDogIMG() {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/110`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const container = document.getElementById('image-container');
            // Se você quiser, pode exibir a imagem ou os detalhes de alguma maneira
            if (data.primaryImage) {
                const img = document.createElement('img');
                img.src = data.primaryImage;
                container.appendChild(img);
            } else {
                console.log('No image found.');
            }
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
}

getDogIMG();
