import React, {FC, forwardRef} from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";
import {Device} from "../store/reducers/device/deviceSlice";


interface ItemProps {
    device: Device
}

const DeviceItem: FC<ItemProps> = ({device}) => {
    const history = useHistory()
    return (
        <Col
            md={3}
            className={"mt-3"}
            onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}
        >
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
}

export default DeviceItem
