// functions/filterArray.js
export const filterArray = (arr, choose, searchTerm) => {
    searchTerm = searchTerm.trim().toLowerCase();

    const newArr = arr.filter(item => {
        // Filter by type
        const matchesType = choose === '' || item.type === choose.toLowerCase();
        
        // Filter by search term
        const matchesSearchTerm = searchTerm === '' || item.name.toLowerCase().includes(searchTerm);
        
        return matchesType && matchesSearchTerm;
    });

    return newArr;
};
