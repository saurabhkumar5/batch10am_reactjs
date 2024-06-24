// import "./App.css";
// import nature from "./nature.jpg";
// import home from "./home.png";

// function App() {
//   return (
//     <div>
//       {/* <h1 style={{backgroundColor:'red',color:'blue'}}> hello </h1>
//           <h1>world</h1>
//           <p>hello how are you</p> 
//           <img src="https://img1.wsimg.com/isteam/ip/1172a89b-094a-415b-99fe-cc1e7d3cd9b0/blob.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1500,h:1000,cg:true" />
//           <img src={nature}/>
//           <img src={home} className="home" id='home'/> */}

//       <header className="header">
//         <div>Govinda</div>
//         <div>
//           <span>Home</span>
//           <span>About</span>
//           <span>Services</span>
//           <span>contact</span>
//         </div>
//       </header>

//       <div className="container">
//         <div className="box">
//           <img src={nature} className="nature" />
//           <h1>its beautiful nature</h1>
//         </div>

//         <div className="box">
//           <img src={home} className="nature" />
//           <h1>its beautiful home</h1>
//         </div>

//         <div className="box">
//           <img src={home} className="nature" />
//           <h1>its beautiful nature</h1>
//         </div>

//         <div className="box">
//           <img src={home} className="nature" />
//           <h1>its beautiful nature</h1>
//         </div>

//         <div className="box">
//           <img src={home} className="nature" />
//           <h1>its beautiful nature</h1>
//         </div>

//         <div className="box">
//           <img src={home} className="nature" />
//           <h1>its beautiful nature</h1>
//         </div>

//         <div className="box">
//           <img src={home} className="nature" />
//           <h1>its beautiful nature</h1>
//         </div>

//         <div className="box">
//           <img src={home} className="nature" />
//           <h1>its beautiful nature</h1>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;






// import "./App.css";
// import Img from "./Img";

// function App() {

//    const data =[
//     {name:"dosa", rating:"4", sector:"21", img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/27/863202cb-4195-46d1-b916-65a81072122b_555174.jpg"},
//     {name:"berger", rating:"2" ,sector:"40" ,img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/7693df43-93dc-4347-abbc-a813c9678521_42803.JPG"},
//     {name:"gulabjamun", rating:"5" ,sector:"51" ,img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ac3df9254bed073f249ea176ca62265e"},
//     {name:"rasgulla" ,rating:"5" ,sector:"51" ,img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ac3df9254bed073f249ea176ca62265e"},
//     {name:"rasgulla" ,rating:"5" ,sector:"51" ,img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ac3df9254bed073f249ea176ca62265e"},
//     {name:"samosa" ,rating:"5" ,sector:"51" ,img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uizlzyxwzxsb0lkgelov"}
//    ]

//   return (
//     <div>
//         {/* header */}
//         <header className="header">
//          <div>Swiggy</div>
//          <div>
//            <span>Home</span>
//            <span>About</span>
//            <span>Services</span>
//            <span>contact</span>
//          </div>
//       </header>
//        <div className="container">
        
//           {
//             data.map((value)=>{
//                  console.log(value.name)
//                return <Img name={value.name} rating={value.rating} sector={value.sector} img={value.img}/>
//             })
//           }
//        </div>

      /* <div className="container">
      <div className="box">
         <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/27/863202cb-4195-46d1-b916-65a81072122b_555174.jpg"/>
         <h1>Uttam Sweets Bakery & Restaurant</h1>
         <span>rating 5star</span>
         <p>location: sector-75</p>
       </div>

       <div className="box">
         <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/7693df43-93dc-4347-abbc-a813c9678521_42803.JPG"/>
         <h1>Uttam Sweets Bakery & Restaurant</h1>
         <span>rating 5star</span>
         <p>location: sector-75</p>
       </div>

       <div className="box">
         <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/7693df43-93dc-4347-abbc-a813c9678521_42803.JPG"/>
         <h1>Uttam Sweets Bakery & Restaurant</h1>
         <span>rating 5star</span>
         <p>location: sector-75</p>
       </div>
      </div> */
//     </div>
//   );
// }

// export default App;

















import "./App.css";
import Body from "./Body/Body";
import About from "./header/About";
import Header from "./header/Header";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Services from "./header/services/Services";
import Mobile from "./header/services/Mobile";
import Contact from "./header/Contact";
import Footer from "./footer/Footer";

function App() {

  return (
    <div>
        
        <BrowserRouter>
        <Header/>
           <Routes>
             <Route path="/" element={<Body/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/services" element={<Services/>}/>
             <Route path="/contact" element={<Contact/>}/>
             <Route path="*" element={<h1>Error, page not found</h1>}/>
           </Routes>
           
           <Footer/>
        </BrowserRouter>
       </div>
  );
}

export default App;

