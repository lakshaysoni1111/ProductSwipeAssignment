import React, { useState } from "react";
import TinderCardStack from "./components/TinderCardStack";
import productsData from "./data/products.json";

function App() {
  const [liked, setLiked] = useState([]);
  const [disliked, setDisliked] = useState([]);
  const [cart, setCart] = useState([]);

  const handleSwipe = (dir, product) => {
    if (dir === "left") {
      setDisliked((prev) => [...prev, product]);
    } else if (dir === "right") {
      setLiked((prev) => [...prev, product]);
    } else if (dir === "up") {
      setCart((prev) => [...prev, product]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-200 flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-xl font-semibold mb-4 text-pink-800">
        Swipe to Explore Products
      </h1>

      <div className="p-4 text-center w-full max-w-md mb-6">
  <p className="text-base sm:text-lg font-medium text-gray-800 leading-relaxed tracking-wide">
    Swipe 
    <span className="inline-flex items-center gap-1 text-green-600 font-semibold mx-1">
      👉 right
    </span> to <span className="text-green-600">like</span>, 
    <span className="inline-flex items-center gap-1 text-red-500 font-semibold mx-1">
      👈 left
    </span> to <span className="text-red-500">pass</span>, and 
    <span className="inline-flex items-center gap-1 text-blue-600 font-semibold mx-1">
      ⬆️ up
    </span> to <span className="text-blue-600">add to cart</span>.
  </p>
</div>


      <TinderCardStack products={productsData} onSwipe={handleSwipe} />
      <div className="w-full max-w-sm mt-6 p-2 text-sm text-gray-700 bg-white rounded-xl shadow-md border border-gray-200">
  
  <div className="space-y-2">
    <p className="text-gray-600 font-medium flex items-center gap-2">
      <span className="text-green-500">👍</span>
      <span className="text-gray-700">Liked: </span>
      <span className="text-green-600">{liked.map((p) => p.id).join(", ")}</span>
    </p>

    <p className="text-gray-600 font-medium flex items-center gap-2">
      <span className="text-red-500">👎</span>
      <span className="text-gray-700">Disliked: </span>
      <span className="text-red-600">{disliked.map((p) => p.id).join(", ")}</span>
    </p>

    <p className="text-gray-600 font-medium flex items-center gap-2">
      <span className="text-blue-500">🛒</span>
      <span className="text-gray-700">Cart: </span>
      <span className="text-blue-600">{cart.map((p) => p.id).join(", ")}</span>
    </p>
  </div>
</div>

    </div>

  );
}

export default App;
