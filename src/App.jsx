import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes,Route } from "react-router-dom";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import {routes} from "./Components/utils/routes";
import Detail from "./Routes/Detail";


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={routes.home} element={<Home/>}  />
        <Route path={routes.contact} element={<Contact/>}  />
        <Route path={routes.favs} element={<Favs/>}  />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path={routes.notFound} element={<h4>Error 404 - Page not Found</h4>}  />
      </Routes>
      <Footer/> 
    </>
  );
}

export default App;
