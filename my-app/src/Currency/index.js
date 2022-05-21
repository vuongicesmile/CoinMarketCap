import react from "react";
import React, { useState, useEffect } from "react";
import { Modal, Button, Row, Col, Input, Select, Tabs } from "antd";
import "./Currency.scss";
import check from './assets/image.svg'




function Currency({onChange, readOnly, value, visible, onClose}) {
  const { Search } = Input;

  
  const [listCurrency,setlistCurrency] = useState(value);

 

  const handleActive = (itemCurrency) => {
    let newArray = [];
    listCurrency.map((item) => {
      if (item.id == itemCurrency.id) {
        item.isActive = true;
        newArray.push(item);
      } else {
        item.isActive = false;
        newArray.push(item);
      }
    });
    setlistCurrency(newArray);
    onChange(itemCurrency);
    onClose();
  };


  
  const [searchTerm , setsearchTerm] = useState("");
  return (
    <>
      <Modal
        title="Add Currency"
        visible={visible}
        bodyStyle={{ paddingTop: "0px" }}
        width={648}

      >
        <div className="currency-container">
          <div className="mt-4 mb-4">
           {/* input search */}
           <Search placeholder="input search text" 
           readOnly={readOnly}
            onChange={(event) => {
              setsearchTerm(event.target.value);
              } }
              />
          </div>

          <div className="container">
            <Col span={24}>
              <p className="m-0 title-label">Popular currencies</p>
            </Col>
            <Row gutter={[2, 2]}>
              {
              listCurrency.filter((item) => {
                if (searchTerm == "") {
                  return item
                }
                else if (item.value.toLowerCase().includes(searchTerm) )
                {
                  return item
                }
              })              
              .map((item, index) => {
                // console.log(item.className);
                // console.log('re render');
                return (
                  <Col
                    xl={12}
                    xxl={12}
                    lg={24}
                    md={24}
                    sm={24}
                    xs={24}
                    className=""
                    key={item.id}
                  >
                    <div
                      className={
                        item.isActive
                          ? "content p-2  w-100  selected"
                          : "content p-2  w-100"
                      }
                      onClick={() => handleActive(item)}
                    >
                      <Row gutter={10}>
                        <Col className="d-flex align-items-center" span={4}>
                          <img id={item.id} src={item.flag} alt=""></img>
                        </Col>
                        <Col className="d-flex flex-column " span={16}>
                        
                            <span>{item.name}</span>                          
                              <span className="currency-label">
                                {item.value + " - " + item.label}
                              </span>
                        
                        </Col>
                        <Col span={4}>
                          {item.isActive && (
                            <div className="currency-check h-100 d-flex align-items-center">
                              <img src={check}></img>
                            </div>
                          )}
                        </Col>
                      </Row>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>

      
      </Modal>
    </>
  );
}

export default Currency;
