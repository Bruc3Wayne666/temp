import React from 'react';
import {Card, Row} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {setSelectedBrand} from "../store/reducers/device/deviceSlice";

const BrandBar = () => {
    const dispatch = useAppDispatch()
    const {brands, selectedBrand} = useAppSelector(state => state.deviceSlice)

    return (
        <Row className="d-flex">
            <Card
                style={{cursor:'pointer'}}
                className="p-3"
                onClick={() => dispatch(setSelectedBrand({}))}>
                All
            </Card>
            {brands.map(brand =>
                <Card
                    style={{cursor:'pointer'}}
                    key={brand.id}
                    className="p-3"
                    onClick={() => dispatch(setSelectedBrand(brand))}
                    border={brand.id === selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
};

export default BrandBar;
