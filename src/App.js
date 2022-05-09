import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import React from 'react';

import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import CourseReview from "./pages/CourseReview";

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = { <Homepage /> } /> 
                <Route path = "/courses" element = { <CourseReview /> } />
                <Route path = "*" element = { <PageNotFound /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;