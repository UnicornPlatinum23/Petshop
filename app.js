// Get references to elements
const carouselContainer = document.getElementById('carouselContainer');
const totalSlides = shop.length;
let currentIndex = 0;

// Function to move the carousel
function moveCarousel(direction) {
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  updateCarousel();
}

// Function to update the carousel position
function updateCarousel() {
  carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`; // Adjust as needed
}

// Initialize the carousel
function initializeCarousel() {
  // Loop through shop items and create carousel items
  for (let i = 0; i < totalSlides; i++) {
    const item = document.createElement('div');
    item.classList.add('carousel-item');
    item.innerHTML = `
      <div class="product">
        <span>
          <h5>${shop[i].title}</h5>
          <img src="${shop[i].image}" alt="${shop[i].title}">
          <p>${shop[i].price}</p>
          <div>
            <p>${shop[i].description}</p>
            <button type="button" class="btn btn-warning">Add to Cart</button>
          </div>
        </span>
      </div>
    `;
    carouselContainer.appendChild(item);
  }
}

// Call the initializeCarousel function when the page loads
initializeCarousel();






var shop = [
    {
      title: 'Dog',
      image: 'pitbull.jpg',
      price: '$7,500-15,000',
      description
    },
    {
      title: 'Dog',
      image: './ilya-shishikhin-SCIRnLEtqWc-unsplash.jpg',
      price: '$7,500-15,000',
      description
    },
    {
      title: 'Dog',
      image: './reba-spike-ISahwf9hCNg-unsplash.jpg',
      price: '$7,500-15,000',
      description
    },
    {
      title: 'Dog',
      image: './black lab.jpg',
      price: '$7,500-15,000',
      description
    },
    {
      title: 'Dog',
      image: './rodrigo-rodrigues-wolf-r-t-1vIgqMIeDDI-unsplash.jpg',
      price: '$7,500-15,000',
      description
    },
    
    
  
    
    ]
    
    var postHTML = " "
  
    for (var i = 0; i < shop.length ; i++){
        var heading = '<div class="product ' + '"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img src="' + shop[i].image + '"/'
        var price = '<p> $' + shop[i].price + '</p></span>'
        var description = '<div class=""><p>'+shop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML
  