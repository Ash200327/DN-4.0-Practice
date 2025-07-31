// src/components/OfficeList.js
import React from 'react';

const officeSpaces = [
  {
    name: "DBS",
    rent: 50000,
    address: "Chennai",
    image: "https://imgs.search.brave.com/anzEbbZBL2q1iZNvtDnwM3zyM_M9a_ZR1-2ee34l_Kc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/OS8xOC8xMS8wMy9v/ZmZpY2UtOTQ1MzQ4/XzY0MC5qcGc"
  },
  {
    name: "WeWork",
    rent: 75000,
    address: "Bangalore",
    image: "https://imgs.search.brave.com/EgfYxdoe-17WWpSIkS_Td4K0aLerrIKvtJ_dpPjIEMA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMS8x/Mi8xOC8xNy81Mi9v/ZmZpY2UtNjg3OTQ2/NV82NDAuanBn"
  },
  {
    name: "Cowrks",
    rent: 60000,
    address: "Mumbai",
    image: "https://imgs.search.brave.com/S7PtIOhSvaAt370lfsgeb9Wl80nenZwDD1iXnu1Q9WA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/ZWF1dGlmdWwtb2Zm/aWNlLXNwYWNlLWNh/cnRvb24tc3R5bGVf/MjMtMjE1MTA0MzMy/NC5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQw"
  }
];

const OfficeList = () => {
  return (
    <div>
      <h1>Office Space, at Affordable Range</h1>
      {officeSpaces.map((item, index) => {
        const rentClass = item.rent <= 60000 ? 'text-red' : 'text-green';
        return (
          <div className="office-card" key={index}>
            <img src={item.image} alt="Office Space" className="office-image" />
            <h2>Name: {item.name}</h2>
            <h3 className={rentClass}>Rent: Rs. {item.rent}</h3>
            <h3>Address: {item.address}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default OfficeList;
