import React from 'react';
import {Row} from "react-bootstrap";
import {useAppSelector} from "../hooks/redux";
import DeviceItem from "./DeviceItem";

const DeviceList = () => {
    const {devices} = useAppSelector(state => state.deviceSlice)

    return (
        <Row className="d-flex">
            {devices.map(device =>
                <DeviceItem
                    key={device.id}
                    device={device}
                />
            )}
        </Row>
    );
};

export default DeviceList;
