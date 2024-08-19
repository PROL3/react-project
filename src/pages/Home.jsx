import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { pizzaGenerator } from '../functions/pizzaGenerator.jsx';
import pizzaArray from '../PizzaArray.json';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [images, setImages] = useState([]);
  const API_KEY = '44413627-00d0b125b34019d80074980f7';
  const query = 'beer'; // או כל מונח חיפוש אחר שמתאים לתוכן שאתה רוצה לקבל

useEffect(() => {
    // שליפת תמונה מה-API של Pixabay
    const fetchImages = async () => {
      try {
        const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&per_page=5`);
        const data = await response.json();
        if (data.hits && data.hits.length > 0) {
          // קח את כל התמונות מה-API
          const beerImages = data.hits.map(hit => ({
            image: hit.webformatURL,
            description: hit.tags,
            name: 'Beer'
          }));
          setImages(beerImages);
        }

      } catch (error) {
        console.error('Error fetching images:', error);
        setImages(pizzaArray); // במקרה של שגיאה, הצג רק את התמונות מה-JSON
      }
    };

    fetchImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const carouselMap2 = () => {
    const carouselArr = images.map((item, index) => (
      <div key={index} className="p-4">
        <img src={item.image} alt={item.name || item.description} className="w-full h-64 object-cover rounded-md" />
        <h2 className="text-xl font-bold mt-2">{item.name || 'Beer Image'}</h2>
        <p className='font-medium'>{item.description}</p>
      </div>
    ));
    return carouselArr;
  };

  const carouselMap1 = () => {
    const carouselArr = pizzaArray.map((pizza, index) => (
      <div key={index} className="p-4">
        <img src={pizza.image} alt={pizza.name} className="w-full h-64 object-cover rounded-md" />
        <h2 className="text-xl font-bold mt-2">{pizza.name}</h2>
        <p className='font-medium'>{pizza.description}</p>
      </div>
    ));
    return carouselArr;
  };

  return (
    <div className='mx-auto bg-cover bg-center backdrop-blur-lg' style={{ backgroundImage: 'url("../images/bg-home1.jpeg")' }}>
      <Header />
      <main className=" pt-32">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 mb-5">
            <Slider {...settings}>
              {carouselMap1()}
            </Slider>
          </div>
          <div className="w-full md:w-1/2 mb-5">
            <Slider {...settings}>
              {carouselMap2()}
            </Slider>
          </div>
          
          <div className="container card-container">
            <div className="card-wrapper">
              <div className="card-background " style={{ backgroundImage: 'url("../images/bg-home.jpeg")' }}></div>
              <div className="card-content">
                <h1 className="card-title">Welcome to Pizza Bar!</h1>
                <p className="card-text">
                  At Pizza Bar, we believe that pizza is more than just food—it's an experience! Each slice brings the unique flavors of traditional Italian pizzas with a modern twist.
                </p>
                <h2 className="card-subtitle">What Makes Us Special?</h2>

                <h3 className="card-section-title">Uncompromising Quality</h3>
                <p className="card-text">
                  Every pizza at our place is handmade with only the freshest and highest quality ingredients. Our dough, made fresh daily, combines traditional techniques with a modern touch, and the toppings—simple and delicious—create a festival of flavors in every bite.
                </p>

                <h3 className="card-section-title">Love for Food</h3>
                <p className="card-text">
                  Our passion for pizza started many years ago when the founders of our chain, the Bar family, dreamed of bringing the unique flavors of pizzas they encountered during their travels around the world to Israel. Since then, we've kept to the highest standards and brought our customers the best pizzas.
                </p>

                <h3 className="card-section-title">A Unique Experience</h3>
                <p className="card-text">
                  When you enter Pizza Bar, you immediately feel the warm and family-friendly atmosphere. Our space is designed to be welcoming and inviting, filled with a sense of fun and relaxation. Good music, smiles, and unbeatable service are always waiting for you here.
                </p>

                <h2 className="card-subtitle">Our Story</h2>
                <p className="card-text">
                  The journey of Pizza Bar began in 1995 when the Bar family decided to open their first pizzeria in the small town of Nahariya. The success was immediate, thanks to the combination of authentic flavors and captivating atmosphere. Over time, the chain grew and spread across the country, bringing unique flavors and atmosphere to each city.
                </p>

                <p className="card-footer">
                  We invite you to come and experience the magic of Pizza Bar—a place where great food, fantastic atmosphere, and excellent service come together for an unforgettable experience. We're here to bring you the best pizza with lots of love and a smile!
                </p>
              </div>
            </div>
          </div>



        </div>
       </main>
      <Footer />
    </div>

  );
};

export default Home;
