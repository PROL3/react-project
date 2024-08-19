// functions/pixabayApi.js
export const fetchImages = async (query, setImages) => {
      const API_KEY = '44413627-00d0b125b34019d80074980f7';
      try {
        const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo`);
        const data = await response.json();
        if (data.hits && data.hits.length > 0) {
          const images = data.hits.map(hit => ({
            image: hit.webformatURL,
            description: hit.tags,
            price: `${(Math.random() * (20 - 10) + 10).toFixed(2)}`, // Generating a random price between $10 and $20
  
          }));
          setImages(images);
        } else {
          setImages(pizzaArray); // הצגת התמונות מה-JSON במקרה שאין תמונות מה-API
        }
      } catch (error) {
        console.error('Error fetching images:', error);
        setImages(pizzaArray); // הצגת התמונות מה-JSON במקרה של שגיאה
      }
    };
    