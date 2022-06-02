import React, { useState } from 'react'
import { setReversePage } from '../Redux/slices'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from 'react-redux'

const TableHead = ({ setQuery, store, setData, data }) => {

    const [toggleID, setToggleID] = useState()
    const dispatch = useDispatch()

    const handleSort = () => {
        setData(!data)
        if (!data) {
            setToggleID(dispatch(setReversePage()))
        } else {
            setToggleID(dispatch(setReversePage()))
        }
    }

    return (
        <div>
            <form className="d-flex headform ">
                <input className="mb-2 inputform" type="search" placeholder="Поиск"
                    aria-label="Search" onChange={event => setQuery(event.target.value)} />
            </form>
            <table className="mainTable table-sort">
                <thead>
                    <tr>
                        <td className="col-1 table_header id" onClick={() => handleSort()}>ID ▼</td>
                        <td className="col-4 table_header">Заголовок</td>
                        <td className="col-4 table_header">Описание</td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default TableHead