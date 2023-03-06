import {MathJaxContext } from 'better-react-mathjax';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./components/Home";
import Ques from "./components/Ques";



function App() {
  return (
    <div className="App">
    <MathJaxContext>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
         <Route path="/question/:que" element={<Ques />}/> 
      </Routes>
    </BrowserRouter>


    </MathJaxContext>
    
    </div>
  );
}

export default App;
