import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

import {useParams} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {getOneDevice} from "../store/reducers/device/deviceActions";
import {addItemRating, addToCart, getRating} from "../http/deviceAPI";
import {Device} from "../store/reducers/device/deviceSlice";

const DevicePage = () => {
    const dispatch = useAppDispatch()
    const {currentDevice} = useAppSelector(state => state.deviceSlice)
    const {user} = useAppSelector(state => state.userSlice)
    const {id} = useParams()
    const [cart, setCart] = useState<Device[]>([])
    const [rating, setRating] = useState(0)
    const [addRating, setAddRating] = useState(0)

    // useEffect(() => {
    //     $authHost.get('api/basket')
    //         .then(({data}) => setCart(data))
    //     // dispatch(getFromCart())
    // }, [dispatch])

    useEffect(() => {
        dispatch(getOneDevice(id))
    }, [])

    const fetchRating = async () => {
        const res = await getRating(currentDevice.id)
        setRating(res.total / res.count)
    }

    useEffect(() => {
        if (currentDevice.id) {
            fetchRating()
        }
    }, [currentDevice.id])

    const handleAddRating = () => {
        if (addRating) {
            addItemRating({rate: addRating, deviceId: id})
                .then(res => {
                    alert('Ваш отзыв учтён!')
                    fetchRating()
                })
        } else {
            alert('Выберите рейтинг')
        }
    }

    const handleClick = () => {
        addToCart(id)
            .then(res => alert('Товар добавлен в корзину'))
    }

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <img
                        style={{borderRadius: 16}}
                        width={300}
                        // height={300}
                        src={process.env.REACT_APP_API_URL + currentDevice.img}
                        alt='device photo'
                    />
                    <h2>{currentDevice.name}</h2>
                    <h3>Средний рейтинг: {rating ? `${String(rating).slice(0, 4)} из 5` : 'Нет отзывов'}</h3>
                </Col>
                <Card
                    className="d-flex flex-column align-items-center justify-content-around"
                    style={{width: 200, height: 200, fontSize: 32, border: '2px solid lightgreen', borderRadius: 16}}
                >
                    <h3>От: {currentDevice.price} руб.</h3>
                    {
                        user.role !== 'ADMIN' &&
                        <>
                            {
                                cart.find(item => item.id === parseInt(id))
                                    ? <Button
                                        variant={"success"}
                                    >Добавлено в корзину</Button>
                                    : <Button
                                        onClick={handleClick}
                                        variant={"outline-success"}
                                    >Добавить в корзину</Button>
                            }
                        </>
                    }
                    <div style={{fontSize: 14}}>
                        <select onChange={e => setAddRating(e.currentTarget.value)} name="rating">
                            <option value={1}>&#9733;</option>
                            <option value={2}>&#9733;&#9733;</option>
                            <option value={3}>&#9733;&#9733;&#9733;</option>
                            <option value={4}>&#9733;&#9733;&#9733;&#9733;</option>
                            <option value={5}>&#9733;&#9733;&#9733;&#9733;&#9733;</option>
                        </select>
                        <button
                            onClick={handleAddRating}
                            style={{
                                fontSize: 12,
                                border: 'none',
                                padding: 6,
                                borderRadius: 6,
                                backgroundColor: 'skyblue'
                        }}
                        >Оставить отзыв</button>
                    </div>
                </Card>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h4>Характеристики</h4>
                {currentDevice.info.map((info, index) =>
                    <Row key={info.id} style={{
                        background: '#222',
                        color: 'white',
                        borderRadius: 16,
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: 10,
                        marginBottom: 12
                    }}>
                        <span>{info.title}: </span>
                        <span>{info.description}</span>
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;
