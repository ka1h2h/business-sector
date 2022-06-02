import React from 'react'
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../Redux/slices'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Pagination({ currentPage }) {

    const dispatch = useDispatch()
    const pages = [1, 2, 3, 4, 5]
    const clsFirst = ['btn shadow-none']
    const clsLast = ['btn shadow-none']

    if (currentPage == 1) {
        clsFirst.push('disabled')
    }

    if (currentPage == 5) {
        clsLast.push('disabled')
    }

    return (
        <div className='d-flex justify-content-between'>
            <div><a className={clsFirst.join(' ')} href="#"
                onClick={() => dispatch(setCurrentPage(currentPage - 1))}>Назад</a></div>
            <div className='d-flex'>
                {pages.map((item, index) => <a href="#"
                    className={currentPage == item ? 'nav-link current-page' : 'nav-link'}
                    key={index} onClick={() => dispatch(setCurrentPage(item))}>{item}</a>)}
            </div>
            <div><a className={clsLast.join(' ')} href="#"
                onClick={() => dispatch(setCurrentPage(currentPage + 1))}>Далее</a></div>
        </div>
    )
}

export default Pagination