import React, {useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import Pages from "../components/Pages";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {getBrands, getDevices, getTypes} from "../store/reducers/device/deviceActions";

const Shop = observer(() => {
    const dispatch = useAppDispatch()
    const {devices, selectedBrand, selectedType, page} = useAppSelector(state => state.deviceSlice)

    useEffect(() => {
        dispatch(getTypes())
        dispatch(getBrands())
        dispatch(getDevices({
            typeId: null,
            brandId: null,
            page: 1,
            limit: 2
        }))
    }, [])

    useEffect(() => {
        dispatch(getDevices({
            limit: 5,
            typeId: selectedType,
            brandId: selectedBrand,
            page
        }))
    }, [page, selectedType, selectedBrand])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
