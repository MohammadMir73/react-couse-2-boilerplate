import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//----
import DashboardPage from '../components/DashboardPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import { connect } from 'react-redux';
//----

const AppRouter = (props) => (
    <BrowserRouter>
        <div>
            {!!props.isAuth && <Header/>}
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/dashboard' element={<DashboardPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </div>
    </BrowserRouter>
)
//----

const mapStateToProps = (state) => ({
    isAuth: state.isAuth
});

export default connect(mapStateToProps)(AppRouter);