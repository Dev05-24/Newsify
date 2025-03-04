import { useState } from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


const App = () =>{
  const[category, setCategory] = useState('general');
  return(
    <>
    <div className="flex flex-col min-h-screen">
      <Navbar setCategory={setCategory}/>

      <div className="flex-grow">
        <Card category={category}/>
      </div>

      <Footer />
    </div>
    </>
  )
};
export default App;