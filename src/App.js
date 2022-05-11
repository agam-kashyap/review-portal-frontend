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
import EditForm from "./pages/EditForm";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/course" element={<CourseReview />} />
                <Route path="/professor" element={<ProfessorReview />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/professors" element={<Professors />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/add-review" element={<ReviewForm />} />
                <Route path="/edit-review" element={
                    <EditForm
                        course_name='MAchine Learning'
                        course_quality={2}
                        course_difficulty={2}
                        course_recommended="Yes"
                        course_grade="A"
                        course_attendance="Yes"
                        course_project="Yes"
                        course_review="Lorem Ipsum"
                        course_tags={['Get Ready To Read', 'Participation Matters', 'Group Projects']}
                    />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;