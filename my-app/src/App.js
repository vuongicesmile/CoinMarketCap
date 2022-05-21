import './App.css';
import { Button,Row,Col } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import  euro from './Currency/assets/EUR.svg';
import React, { useState, useEffect } from "react";
import Currency from './Currency';

import vnd from "./Currency/assets/CHF.svg";
import cny from "./Currency/assets/CNY.svg";
import thaiBaht from "./Currency/assets/EUR.svg";
import cambodia from "./Currency/assets/GBP.svg";
import dola from "./Currency/assets/HKD.svg";
import rub from "./Currency/assets/IDR.svg";


function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const listCurrency =[
    {
      id: "vn-flag",
      flag: vnd,
      name: "Vietnamese Dong",
      label: "₫",
      isActive : false,
      value : "VND"
    },
    {
      id: "cny-flag",
      flag: cny,
      name: "Chinese Yuan",
      label: "¥",
      isActive : false,
      value : "CNY"
    },
    {
      id: "rub-flag",
      flag: rub,
      name: "Russian Ruble",
      label: "₽",
      isActive : false,
      value : "RUB"
    },
    {
      id: "dola-flag",
      flag: dola,
      name: "United States Dollar",
      label: "$",
      isActive : false,
      value : "USD"
    },
    {
      id: "thaiBaht-flag",
      flag: thaiBaht,
      name: "Thai Baht",
      label: "฿",
      isActive : false,
      value : "THB"
    },
    {
      id: "cambodia-flag",
      flag: cambodia,
      name: "Cambodian Riel",
      label: "៛",
      isActive : false,
      value : "Riel"
    },
  ];

  const [itemCurrency,setitemCurrency] = useState({
    id: "vn-flag",
    flag: vnd,
    name: "Vietnamese Dong",
    label: "₫",
    isActive : false,
    value : "VND"
  });
  
  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="App">
     <Button 
     type="dashed"
     onClick={showModal}
     >
       <Row gutter={4}>
       <Col><img src={itemCurrency.flag}></img></Col>
       <Col> {itemCurrency.value}</Col>
       <Col className="d-flex align-items-center"><CaretDownOutlined /></Col>
       </Row>
      </Button>

      <Currency onChange={setitemCurrency} readOnly={false} value={listCurrency} visible={isModalVisible} onClose={() => {setIsModalVisible(false)}} />
    </div>
  );
}

export default App;
