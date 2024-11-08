const imageElement = document.getElementById('randomImage');
const button = document.getElementById('newImage');



const fetchRandomImage = () => {
    fetch('https://picsum.photos/500') 
    
        .then(response => {
           
            
            imageElement.src = response.url;
        })
        .catch(err => {
            console.error('Error fetching image:', err);
        });
};



fetchRandomImage();



button.addEventListener('click', fetchRandomImage);





