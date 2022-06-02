import React, { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsData } from '../Redux/slices';
import THead from './THead';
import TBody from './TBody';
import Pagination from './Pagination';

const Table = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState(true)
    const [query, setQuery] = useState("")
    const store = useSelector(state => state.posts)
    const currentPage = useSelector(state => state.currentPage)

    useEffect(() => {
        dispatch(fetchPostsData(currentPage))
    }, [currentPage])

    return (
        <>
            <div className='mainCointainer pt-2'>
                <THead store={store} data={data} setData={setData} setQuery={setQuery} />
                <TBody store={store} query={query} />
                <Pagination currentPage={currentPage} />
            </div>
        </>
    )
}

export default Table