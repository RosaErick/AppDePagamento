import react, { Component }  from "react";

const API_URL = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce';


const getUser = async () => {
const response = await fetch(API_URL);
const data = await response.json();
     

 console.log(data)
    return ([data]);
}
  

export { getUser }