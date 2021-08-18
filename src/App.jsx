import { useState } from 'react';
import ProductList from './components/ProductList';
import './App.css';
import products from './dummydata';

function App() {
  const [taskData, setTaskData] = useState(products);
  return (
    <div className="App container">
      <h1>BEST SELLERS</h1>
      <ProductList products={taskData} />
    </div>
  );
}

export default App;
