        const searchInput = document.getElementById('searchInput');
    const searchResultsDiv = document.getElementById('searchResults');

        searchInput.addEventListener('keyup', function() {
        const searchTerm = searchInput.value.toLowerCase(); // Get the search term and convert to lowercase for case-insensitive search
        // Call a function to perform the search and update results
        performSearch(searchTerm); 
    });
    
    function performSearch(searchTerm) {
        const products = [
            { name: "Laptop", category: "Electronics" },
            { name: "Mouse", category: "Electronics" },
            { name: "Keyboard", category: "Peripherals" }
        ];

        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.category.toLowerCase().includes(searchTerm)
        );

        // Clear previous results
        searchResultsDiv.innerHTML = '';

        // Display filtered results
        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                const productElement = document.createElement('p');
                productElement.textContent = `${product.name} (${product.category})`;
                searchResultsDiv.appendChild(productElement);
            });
        } else {
            searchResultsDiv.textContent = "No results found.";
        }
    }