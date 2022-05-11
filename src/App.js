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
import Courses from "./pages/Courses";
import Professors from "./pages/Professors";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ReviewForm from "./pages/ReviewForm";

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = { <Homepage /> } /> 
                <Route path = "/course" element = { <CourseReview /> } />
                <Route path = "/professor" element = { <ProfessorReview /> } />
                <Route path = "/courses" element = { <Courses /> } />
                <Route path = "/professors" element = { <Professors /> } />
                <Route path = "/signup" element = { <SignUp /> } />
                <Route path = "/login" element = { <Login /> } />
                <Route path = "/add-review" element = { <ReviewForm /> } />
                <Route path = "*" element = { <PageNotFound /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;