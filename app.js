document.addEventListener('DOMContentLoaded', function() {
    const typeButtons = document.querySelectorAll('[data-type]');
    const foodCategories = document.getElementById('foodCategories');
    const drinkCategories = document.getElementById('drinkCategories');
    const filterButtons = document.querySelectorAll('[data-filter]');
    const menuItems = document.querySelectorAll('.menu-item');

    typeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const type = button.getAttribute('data-type');
            
            typeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            if (type === 'food') {
                foodCategories.classList.remove('hidden');
                drinkCategories.classList.add('hidden');
                
                // Default filter for food
                setDefaultFilter('food', 'pizza');
            } else {
                foodCategories.classList.add('hidden');
                drinkCategories.classList.remove('hidden');
                
                // Default filter for drinks
                setDefaultFilter('drinks', 'coffee');
            }
        });
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            const type = button.closest('.btn-group').id === 'foodCategories' ? 'food' : 'drinks';

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            filterItems(type, filter);
        });
    });

    function setDefaultFilter(type, defaultFilter) {
        // Clear active state for all filter buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Activate the default filter button
        const defaultButton = document.querySelector(`[data-filter="${defaultFilter}"]`);
        if (defaultButton) {
            defaultButton.classList.add('active');
        }

        // Apply the filter
        filterItems(type, defaultFilter);
    }

    function filterItems(type, filter) {
        menuItems.forEach(item => {
            if (item.getAttribute('data-type') === type && item.getAttribute('data-category') === filter) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    // Set default visibility
    setDefaultFilter('food', 'pizza');
});
