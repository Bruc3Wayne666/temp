import React from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {setSelectedType} from "../store/reducers/device/deviceSlice";

const TypeBar = () => {
    const dispatch = useAppDispatch()
    const {types, selectedType} = useAppSelector(state => state.deviceSlice)
    return (
        <div>
            <div
                onClick={() => dispatch(setSelectedType({}))}
                style={{
                    cursor: 'pointer',
                    padding: '10px 12px',
                    borderRadius: 8,
                    marginBottom: 6,
                    border: '1px solid red'
                }}>
                <h5>All</h5>
            </div>
            {types.map(type =>
                <div
                    style={{
                        cursor: 'pointer',
                        border: `${type.id === selectedType.id ? 3 : 1}px solid red`,
                        padding: '10px 12px',
                        borderRadius: 8,
                        marginBottom: 6
                    }}
                    onClick={() => dispatch(setSelectedType(type))}
                    key={type.id}
                >
                    {type.name}
                </div>
            )}
        </div>
    );
};

export default TypeBar;
