import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import Teacherform from './pages/Teacherform';

function Routes() {

    return (
        
        <BrowserRouter>
            <Route path="/" exact component ={Landing} />
            <Route path="/study" component ={TeacherList} />
            <Route path="/give-classes" component ={Teacherform} />
        </BrowserRouter>
        
    )
}

export default Routes;