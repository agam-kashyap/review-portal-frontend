import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import React from 'react';

import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import CourseReview from "./pages/CourseReview";
import ProfessorReview from "./pages/ProfessorReview";
import Professors from "./pages/Professors";

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = { <Homepage /> } /> 
                <Route path = "/course" element = { <CourseReview /> } />
                <Route path = "/professor" element = { <ProfessorReview /> } />
                <Route path = "/professors" element = { <Professors /> } />
                <Route path = "*" element = { <PageNotFound /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;