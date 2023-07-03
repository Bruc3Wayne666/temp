import React, {FC} from 'react';
import Image from "react-bootstrap/Image";
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";
import {Device} from "../store/reducers/device/deviceSlice";

interface ItemProps {
    device: Device
    handleDelete: (id: number) => void
}

const DeviceItem: FC<ItemProps> = ({device, handleDelete}) => {
    const history = useHistory()
    return (
        <div
            style={{
                border: '1px solid red',
                padding: 20,
                borderRadius: 16,
                margin: 24,
            }}>
            {/*<Image height={150} src={process.env.REACT_APP_API_URL + device.img}/>*/}
            <Image height={150} src={'http://localhost:5000/' + device.img}/>

            <h4
                // style={{cursor: 'pointer'}}
                onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}
                style={{cursor: 'pointer'}}
            >{device.name}</h4>

            <h5
                //@ts-ignore
                onClick={() => handleDelete(device.id)}
                style={{cursor: 'pointer', padding: 4, backgroundColor: 'red', borderRadius: 8}}
            >Удалить &times;</h5>
        </div>
    );
};

export default DeviceItem;
