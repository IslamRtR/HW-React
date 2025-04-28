import React, { useState } from 'react';
import './App.css';

const products = [
  { id: 1, name: 'Sun-Glass', time: '07H 09M 12S', currentBid: '1.75 ETH', type: 'sun-glass', image: 'https://contents.mediadecathlon.com/p2879183/k$12453964bf4fe0388fc82a418764a019/adult-hiking-sunglasses-mh100-category-3-quechua-8738921.jpg?f=1920x0&format=auto' },
  { id: 2, name: 'Sun-Glass', time: '07H 09M 12S', currentBid: '1.75 ETH', type: 'sun-glass', image: 'https://contents.mediadecathlon.com/p2879183/k$12453964bf4fe0388fc82a418764a019/adult-hiking-sunglasses-mh100-category-3-quechua-8738921.jpg?f=1920x0&format=auto' },
  { id: 3, name: 'Sun-Glass', time: '07H 09M 12S', currentBid: '1.75 ETH', type: 'sun-glass', image: 'https://contents.mediadecathlon.com/p2879183/k$12453964bf4fe0388fc82a418764a019/adult-hiking-sunglasses-mh100-category-3-quechua-8738921.jpg?f=1920x0&format=auto' },
  { id: 4, name: 'NuEvey', time: '19H 09M 12S', currentBid: '1.25 ETH', type: 'nuevey', image: 'https://static.vecteezy.com/system/resources/previews/003/512/586/non_2x/five-minutes-past-nine-free-photo.jpg' },
  { id: 5, name: 'Sun-Glass', time: '07H 09M 12S', currentBid: '1.75 ETH', type: 'sun-glass', image: 'https://contents.mediadecathlon.com/p2879183/k$12453964bf4fe0388fc82a418764a019/adult-hiking-sunglasses-mh100-category-3-quechua-8738921.jpg?f=1920x0&format=auto' },
  { id: 6, name: 'NuEvey', time: '18H 09M 12S', currentBid: '1.25 ETH', type: 'nuevey', image: 'https://static.vecteezy.com/system/resources/previews/003/512/586/non_2x/five-minutes-past-nine-free-photo.jpg' },
  { id: 7, name: 'Sun-Glass', time: '07H 09M 12S', currentBid: '1.75 ETH', type: 'sun-glass', image: 'https://contents.mediadecathlon.com/p2879183/k$12453964bf4fe0388fc82a418764a019/adult-hiking-sunglasses-mh100-category-3-quechua-8738921.jpg?f=1920x0&format=auto' },
  { id: 8, name: 'Sun-Glass', time: '07H 09M 12S', currentBid: '1.75 ETH', type: 'sun-glass', image: 'https://contents.mediadecathlon.com/p2879183/k$12453964bf4fe0388fc82a418764a019/adult-hiking-sunglasses-mh100-category-3-quechua-8738921.jpg?f=1920x0&format=auto' },
];

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <div className="w-11/12 mx-auto flex flex-wrap justify-center gap-4 mb-10">
        {['All', 'Category', 'Collection', 'Price'].map((filter, index) => (
          <button
            key={index}
            className={`border border-gray-300 px-4 py-2 rounded-full font-medium transition ${
              filter === 'All' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-11/12 mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="nft-image">
              <img 
                src={product.image} 
                alt={product.name} 
                className="nft-img cursor-pointer"
                onClick={() => setSelectedImage(product.image)}
              />
              <span className="timer">{product.time}</span>
            </div>
            <div className="p-4 w-full">
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-500 text-sm">Current Bid</p>
                <h2 className="font-bold text-lg text-black">{product.currentBid}</h2>
              </div>
              <button className="bg-black text-white rounded-lg px-6 py-2 text-sm font-semibold hover:bg-gray-800 transition w-full">
                Place Bid
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Enlarged" className="max-w-full max-h-full" />
        </div>
      )}
    </div>
  );
}

export default App;