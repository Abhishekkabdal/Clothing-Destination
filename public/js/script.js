document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('searchBar');
    const searchResults = document.getElementById('searchResults');

    searchBar.addEventListener('input', function () {
        const query = searchBar.value.trim().toLowerCase();

        // Clear previous results
        searchResults.innerHTML = '';

        if (query.length > 3) {
            fetch(`/search?q=${query}`)
                .then(response => response.json())
                .then(data => {
                    searchResults.innerHTML = ''; // Clear previous results
                    if (data.length > 0) {
                        const rowElement = document.createElement('div');
                        rowElement.className = 'row justify-content-center'; // Center the row
                        
                        data.forEach(item => {
                            const itemElement = document.createElement('div');
                            itemElement.className = 'col-md-3 search-item mb-4'; // Use Bootstrap classes for spacing
                            itemElement.innerHTML = `
                            <div class="card" style="width: 100%;">
                                <img src="${item.imageUrl}" class="card-img-top" alt="${item.name}" style="height: 200px; object-fit: contain;">
                                <div class="card-body">
                                    <h5 class="card-title">${item.name}</h5>
                                    <p class="card-text">$${item.price}</p>
                                    <a href="#" class="btn btn-primary">Add to Cart</a>
                                </div>
                            </div>
                            `;
                            rowElement.appendChild(itemElement); // Add each item to the row
                        });
        
                        searchResults.appendChild(rowElement); // Append the row to the searchResults container
                    } else {
                        searchResults.innerHTML = '<p class="text-center">No results found.</p>';
                    }
                })
                .catch(error => console.error('Error fetching search results:', error));
        }
        
        
    });
});

document.addEventListener('DOMContentLoaded', () => {
    fetchFeaturedProducts();
});

function fetchFeaturedProducts() {
    fetch('/api/featured-products')
        .then(response => response.json())
        .then(data => {
            const featuredProducts = document.getElementById('featuredProducts');
            featuredProducts.innerHTML = ''; // Clear any existing content

            data.forEach(item => {
                const productElement = document.createElement('div');
                productElement.className = 'col-md-4';
                productElement.innerHTML = `
                    <div class="card mb-4" style="width: 18rem;">
                      <img src="${item.imageUrl}" class="card-img-top" alt="${item.name}" style="height: 200px; object-fit: contain;">
                      <div class="card-body">
                          <h5 class="card-title">${item.name}</h5>
                          <p class="card-text">$${item.price}</p>
                          <a href="#" class="btn btn-primary">Add to Cart</a>
                      </div>
                    </div>

                `;
                featuredProducts.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error fetching featured products:', error));
}

