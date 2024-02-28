
var shop = [
  {
    title: 'Max',
    image: 'golden retriever puppy.jpg',
    price: "Adoption Fee: $150",
    description: 'Golden Retriever puppy.'
  },
  {
    title: 'Ruffie',
    image: 'german shepherd puppy.jpeg',
    price: "Adoption Fee: $150",
    description: 'German Shephard puppy.'
  },
  {
    title: 'Sam',
    image: 'pitbull.jpg',
    price: "Adoption Fee: $150",
    description: 'Pitbull.'
  },
  {
    title: 'Sara',
    image: './ilya-shishikhin-SCIRnLEtqWc-unsplash.jpg',
    price: "Adoption Fee: $150",
    description: 'Alaskan Husky.'
  },
  {
    title: 'Spike',
    image: './reba-spike-ISahwf9hCNg-unsplash.jpg',
    price: "Adoption Fee: $150",
    description: 'Husky.'
  },
  {
    title: 'Lu',
    image: './black lab.jpg',
    price: "Adoption Fee: $150",
    description: 'Black Lab.'
  },
  {
    title: 'Wolf Mix',
    image: './rodrigo-rodrigues-wolf-r-t-1vIgqMIeDDI-unsplash.jpg',
    price: "Adoption Fee: $150",
    description: 'Husky.'
  }
];





var postHTML = "";


shop.forEach(function (item) {
  postHTML += `
    <div class="card">
      <img src="${item.image}" class="card-img-top" alt="${item.title}">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.description}</p>
        <p class="card-text"><strong>Price:</strong> ${item.price}</p>
      </div>
    </div>
  `;
});


document.getElementById("shop-items").innerHTML = postHTML;