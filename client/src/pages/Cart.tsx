import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {getFromCart} from "../store/reducers/device/deviceActions";
import CartItem from "../components/CartItem";
import {Device} from "../store/reducers/device/deviceSlice";
import {$authHost} from "../http";

const Cart = () => {
    const dispatch = useAppDispatch()
    // const {cart} = useAppSelector(state => state.deviceSlice)
    const [cart, setCart] = useState<Device[]>([])

    useEffect(() => {
        $authHost.get('api/basket')
            .then(({data}) => setCart(data))
        // dispatch(getFromCart())
    }, [dispatch])

    const handleDelete = (id: number) => {
        $authHost.delete(`api/basket/${id}`)
            .then(() => setCart(prev => prev.filter(item => item.id !== id)))
    }

    return (
        <Container>
            <Row className="mt-2">
                <Col md={9}>
                    {/*<h1>lol</h1>*/}
                    <Row className="d-flex">
                        {
                            cart.length !== 0
                                ? <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <h1>Корзина</h1>
                                    {cart.map(device =>
                                        <CartItem
                                            handleDelete={handleDelete}
                                            key={device.id}
                                            device={device}
                                        />
                                    )}</div>
                                : <h1>Корзина пуста</h1>
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;
