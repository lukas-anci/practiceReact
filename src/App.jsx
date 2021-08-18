import { useState } from 'react';

import './App.css';
import Product from './components/Product';
const cardInfo = [
  {
    title: 'Off-White Air Jordan 1 canvas',
    description:
      'This is an original print illustrated by me.  Professionally hand stretched, stapled & taped to rear giving a nice clean finish.',
    priceRange: '16.00 eur - 32.00 eur',
    price: '16.00 eur',
    sku: 'N/A',
    category: 'Canvases',
  },
];

function App() {
  const [taskData, setTaskData] = useState(cardInfo);

  return (
    <div className="App container">
      <h1>Product</h1>
      <Product item={taskData} />
    </div>
  );
}

export default App;
