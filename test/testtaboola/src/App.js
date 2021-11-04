import './App.css';
import React, { Component } from 'react'


class App extends Component {
 state = {}

 componentDidMount(){

  const mainData = {"placements":[{"name":"Below Article Thumbnails","recCount":6,"organicType":"mix","thumbnail":{"width":640,"height":480}}],"user":{"session":"init","realip":"24.126.139.0","agent":"Mozilla%2F5.0+(Windows+NT+10.0%3B+Win64%3B+x64%3B+ServiceUI+13)+AppleWebKit%2F537.36+(KHTML%2C+like+Gecko)+Chrome%2F64.0.3282.140+Safari%2F537.36+Edge%2F17.17134","device":"14A7B4BB0B5B63781A90BE1B0F5B6019"},"app":{"type":"WEB","apiKey":"7be65fc78e52c11727793f68b06d782cff9ede3c","name":"take-home-challenge","origin":"CLIENT"},"view":{"id":"a558e7763d614902a3689c69b23c25a7"},"source":{"type":"TEXT","id":"resources/articles","url":"https://blog.taboola.com/digiday-publishing-summit"}}

  fetch("", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(mainData),
})
  .then((r) => r.json())
  .then((articleObj) => console.log(articleObj));

  
 }

 render() {
  return(
   <div>App</div>
    )
   }
 }


App.propTypes = {}
export default App
