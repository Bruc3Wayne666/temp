import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {useAppDispatch} from "../../hooks/redux";
import {addBrand} from "../../store/reducers/device/deviceActions";

const CreateBrand = ({show, onHide}: {show: boolean, onHide: () => void}) => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState('')

    const handleClick = () => {
        dispatch(addBrand({name: value}))
        setValue('')
        onHide()
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название типа"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={handleClick}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;
