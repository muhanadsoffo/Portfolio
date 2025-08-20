import {BrowserRouter, Routes,Route} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {NotFound} from "./pages/NotFound.jsx";
import {SanctuarAI} from "./pages/SanctuarAI.jsx";
import {StarBackground} from "@/components/StarBackground.jsx";


function App() {


  return (
    <>
        <StarBackground/>
     <BrowserRouter>
         <Routes>
             <Route index element={<Home />}/>
             <Route path="*" element={<NotFound/>}/>
             <Route path="/sanctuarai" element={<SanctuarAI/>}/>
         </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
