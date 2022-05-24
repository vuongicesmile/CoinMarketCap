import './App.css';
import { Button,Row,Col } from 'antd';

import React, { useState, useEffect } from "react";
import {Currency} from './Currency';


function App() {
 const [valueCurrency,setValueCurrency] = useState('USD')
 console.log(valueCurrency);
  return (
    <div className="App">
      <Currency  readOnly={false} value={valueCurrency} onChange={setValueCurrency} />
    </div>
  );
}

export default App;
