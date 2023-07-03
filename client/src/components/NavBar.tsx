import React from 'react';
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {logout} from "../store/reducers/user/userSlice";

const NavBar = () => {
    const dispatch = useAppDispatch()
    const {isAuth, user} = useAppSelector(state => state.userSlice)
    const history = useHistory()

    const logOut = () => {
        dispatch(logout())
    }

    return (
        <header style={{
            height: 100,
            backgroundColor: 'black',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 12,
            paddingRight: 12
        }}>
            <div style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>
                    <h1>DigitalTown</h1>
                </NavLink>
                {isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        {
                            user.role === 'ADMIN'
                                ? <Button
                                    variant={"outline-success"}
                                    onClick={() => history.push(ADMIN_ROUTE)}
                                >
                                    Админ панель
                                </Button>
                                : <Button
                                    variant={"outline-success"}
                                    onClick={() => history.push(BASKET_ROUTE)}
                                >
                                    Корзина
                                </Button>
                        }

                        <Button
                            variant={"outline-danger"}
                            onClick={logOut}
                            className="ml-2 border-12"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </div>
        </header>
    );
};

export default NavBar;
