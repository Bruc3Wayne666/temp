import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {Spinner} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {checkLogin} from "./store/reducers/user/userActions";

const App = () => {
    const dispatch = useAppDispatch()
    const {isLoading} = useAppSelector(state => state.userSlice)

    useEffect(() => {
        dispatch(checkLogin())
    }, [dispatch])

    if (isLoading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    );
};

export default App;
