import React from 'react';
import {Pagination} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {setPage} from "../store/reducers/device/deviceSlice";

const Pages = () => {
    const dispatch = useAppDispatch()
    const {limit, totalCount, page} = useAppSelector(state => state.deviceSlice)
    const pageCount = Math.ceil(totalCount / limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className="mt-3">
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={page === page}
                    onClick={() => dispatch(setPage(page))}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
};

export default Pages;
