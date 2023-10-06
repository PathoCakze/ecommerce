import React from 'react'
import { Route, Routes} from "react-router-dom";
import { URL_ADMIN, URL_BASKET, URL_HOME, URL_DETAILS } from '../constants/urlFront';
import Homeview from '../views/Homeview';
import Adminview from '../views/Adminview';
import Basketview from '../views/Basketview';
import DetailsProductview from '../views/DetailsProductview';

function Routing() {
  return (

    <Routes>
        <Route path={URL_HOME} element={<Homeview />}/>
        <Route path={URL_ADMIN} element={<Adminview />} />
        <Route path={URL_BASKET} element={<Basketview />} />
        <Route path={URL_DETAILS} element={<DetailsProductview />} />
    </Routes>
    
  )
}

export default Routing