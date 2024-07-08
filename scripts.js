document.addEventListener('DOMContentLoaded', function() {
    fetch('https://fakestoreapi.com/products/1')
        .then(response => response.json())
        .then(data => {
            document.getElementById('product-title').textContent = data.title;
            document.getElementById('product-image').src = data.image;
            document.getElementById('product-description').textContent = data.description;
            document.getElementById('product-price').textContent = `$${data.price}`;
        })
        .catch(error => console.error('Error fetching data:', error));
});
