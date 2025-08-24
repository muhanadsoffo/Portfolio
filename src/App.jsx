import {BrowserRouter, Routes,Route} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {NotFound} from "./pages/NotFound.jsx";
import {SanctuarAI} from "./pages/SanctuarAI.jsx";
import {StarBackground} from "@/components/StarBackground.jsx";
import {SparkFlow} from "@/pages/SparkFlow.jsx";
import {CarRoyal} from "@/pages/CarRoyal.jsx";


function App() {


  return (
    <>


     <BrowserRouter>
         <StarBackground/>
         <Routes>
             <Route index element={<Home />}/>
             <Route path="*" element={<NotFound/>}/>
             <Route path="/sanctuarai" element={<SanctuarAI/>}/>
             <Route path="/sparkflow" element={<SparkFlow/>}/>
             <Route path="/carroyal" element={<CarRoyal/>}/>
         </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
