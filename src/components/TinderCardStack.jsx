import React, { useState } from "react";
import TinderCard from "react-tinder-card";

const TinderCardStack = ({ products, onSwipe }) => {

  const [currentIndex, setCurrentIndex] = useState(products.length - 1);

  const handleSwipe = (dir,product,index)=> {
    onSwipe(dir, product);
    console.log(`${dir} swipe on`, product.id);
    if (index === currentIndex) {
      setCurrentIndex((prev) => prev - 1);
    }
  }
  
  return (
    <div className="relative w-full max-w-xs h-[500px] mx-auto flex items-center justify-center">
      {
        currentIndex < 0 ? (
          <div className="text-center text-gray-600 text-lg font-medium">
            🎉 All products viewed
          </div>
        ) :
      
      products.map((product, index) => (
        <TinderCard
          className="pressable absolute w-full h-full"
          key={product.id}
          onSwipe={(dir)=>handleSwipe(dir, product, index)}
          preventSwipe={["down"]}
          flickOnSwipe={true}
        >
          <div
            className="bg-white rounded-2xl h-full flex flex-col shadow-lg border border-pink-300 
                       overflow-hidden transition-transform duration-300 ease-in-out"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-3/5 w-full object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-pink-600">{product.brand}</p>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-pink-800 font-bold text-lg">
                  ₹{product.price}
                </span>
                <span className="line-through text-gray-400 text-sm">
                  ₹{product.originalPrice}
                </span>
                <span className="text-green-600 text-sm">
                  ({product.discountPercentage}% OFF)
                </span>
              </div>
            </div>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default TinderCardStack;
