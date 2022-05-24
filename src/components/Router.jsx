import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import {useContext, Fragment} from 'react';
import SessionContext from '../context/SessionContext';

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
    
    const {session} = useContext(SessionContext);
    
    return (
        <BrowserRouter>
            <Toaster/>
            <Routes>
                {session 
                    /* If exist a session */
                    ?   <Fragment>
                            <Route path="/" element={<Navigate to='/panel/dashboard' replace/>}/>
                            <Route path="/login" element={<Navigate to='/panel/dashboard' replace/>}/>
                            <Route path="/signup" element={<Navigate to='/panel/dashboard' replace/>}/>
                            <Route path="/panel" element={<Panel/>}>
                                <Route path="dashboard" element={<Dashboard/>}/>
                                <Route path="profile" element={<Profile/>}/>
                                <Route path="works" element={<h2>Works</h2>}/>
                                <Route path="teachers" element={<h2>Teachers</h2>}/>
                                <Route path="lessons" element={<h2>Lessons</h2>}/>
                                <Route path="categories" element={<Categories/>}/>
                            </Route>
                        </Fragment>

                    /* If NO exist a session */
                    :   <Fragment>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/signup" element={<Signup/>}/>
                            <Route path="/panel/*" element={<Navigate to="/" replace/>}/>
                        </Fragment>
                }
                <Route path="*" element={<h2>Error 404 - Page don't found</h2>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;