import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Pages
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';

// Panel
import Panel from './Panel';
import Dashboard from '../pages/Dashboard/Dashboard';
import Categories from '../pages/Categories/Categories';
import Profile from '../pages/Profile/Profile';

const Router = function() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Global Routes */}
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/panel" element={<Panel/>}>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="works" element={<h2>Works</h2>}/>
                    <Route path="teachers" element={<h2>Teachers</h2>}/>
                    <Route path="lessons" element={<h2>Lessons</h2>}/>
                    <Route path="categories" element={<Categories/>}/>
                </Route>
                <Route path="*" element={<h2>Error 404 - Page don't found</h2>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;