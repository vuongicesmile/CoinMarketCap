import React, { useState, useRef, useEffect } from "react";
import { Button, Row, Col } from "antd";
import "antd/dist/antd.css";
// import Header from '@/components/ModuleHeader';
import "./Restaurant.scss";
import kitchenfloor1 from "./assets/area2.svg";
import dinningRoom from "./assets/area3.svg";
import bar from "./assets/barroom.svg";
import coffeeroom from "./assets/coffeeroom.svg";
import diningroom from "./assets/diningroom.svg";
import evmroom from "./assets/evmroom.svg";
import floor3room from "./assets/floor3room.svg";
import floorroom from "./assets/floorroom.svg";
import livingroom from "./assets/livingroom.svg";
import meetingroom from "./assets/meetingromm.svg";
import mordernroom from "./assets/mordernroom.svg";
import normallroom from "./assets/normalroom.svg";
import receptionroom from "./assets/reception.svg";
import trandintionrom from "./assets/trandintionrom.svg";

function Restaurant() {
  //   const { location } = useModel('hoteldata');
  //   console.log(location);

  const location = [
    {
      id: "vn-flag",
      area: null,
      name: "Vietnamese Dong",
      label: "₫",
      value: "VND",
    },
    {
      id: "cny-flag",
      area: null,
      name: "Chinese Yuan",
      label: "¥",
      value: "CNY",
    },
    {
      id: "rub-flag",
      area: null,
      name: "Russian Ruble",
      label: "₽",
      isActive: false,
      value: "RUB",
    },
    {
      id: "dola-flag",
      area: null,
      name: "United States Dollar",
      label: "$",
      isActive: false,
      value: "USD",
    },
    {
      id: "thaiBaht-flag",
      area: null,
      name: "Thai Baht",
      label: "฿",
      isActive: false,
      value: "THB",
    },
    {
      id: "cambodia-flag",
      area: null,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
    {
      id: "cambodia-flag",
      area: null,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
    {
      id: "cambodia-flag",
      area: null,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
    {
      id: "cambodia-flag",
      area: null,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
    {
      id: "cambodia-flag",
      area: null,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
    {
      id: "cambodia-flag",
      area: null,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
    {
      id: "cambodia-flag",
      area: null,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
    {
      id: "cambodia-flag",
      area: null,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
    {
      id: "cambodia-flag",
      area: null,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
    {
      id: "cambodia-flag",
      area: null,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
    {
      id: "cambodia-flag",
      area: null,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
    {
      id: "cambodia-flag",
      area: null,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
    {
      id: "cambodia-flag",
      area: null,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
    {
      id: "cambodia-flag",
      area: null,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
    {
      id: "cambodia-flag",
      area: null,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
    {
      id: "cambodia-flag",
      area: null,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
    {
      id: "cambodia-flag",
      area: null,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
    {
      id: "cambodia-flag",
      area: null,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
    {
      id: "cambodia-flag",
      area: null,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
    {
      id: "cambodia-flag",
      area: null,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
    {
      id: "cambodia-flag",
      area: null,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
    {
      id: "cambodia-flag",
      area: null,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
    {
      id: "cambodia-flag",
      area: null,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
    {
      id: "cambodia-flag",
      area: null,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
  ];

  const listImage = [
    kitchenfloor1,
    dinningRoom,
    bar,
    coffeeroom,
    diningroom,
    evmroom,
    floor3room,
    floorroom,
    livingroom,
    meetingroom,
    mordernroom,
    normallroom,
    receptionroom,
    trandintionrom,
    kitchenfloor1,
    dinningRoom,
    bar,
    coffeeroom,
    diningroom,
    evmroom,
    kitchenfloor1,
    dinningRoom,
    bar,
    coffeeroom,
    diningroom,
    evmroom,
    kitchenfloor1,
    dinningRoom,
    bar,
    coffeeroom,
    diningroom,
    evmroom,
  ];

  const locationAddImage = location.map((item, index) => {
    return {
      id: item.id,
      area: listImage[index],
      name: item.name,
    };
  });

  return (
    <>
      <Row className="header-layout">
        {/* <Header /> */}
        hien thi menu
      </Row>
      <div className="area-container">
        <Col
          offset={1}
          span={4}
          className="header-container d-flex align-items-center"
        >
          <button>add</button>
        </Col>
        <div className="location-container">
          <Row gutter={[0, 39]} className="p-4">
            {locationAddImage.map((items, index) => {
              return (
                <Col
                    xxl={4}
                    xl= {6}
                    lg ={12}
                    md ={12}
                    sm ={24}
                    xs ={24}
                  className="d-flex flex-column align-items-center"
                  
                  key={index}
                >
                  <div className="locationinfo-container">
                    <img src={items?.area} alt="" />
                  </div>
                  <span>{items?.name} </span>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
}

export default Restaurant;
