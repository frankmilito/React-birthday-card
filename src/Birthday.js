import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Data from './Data'

function Birthday() {
    const [data, setData] = useState(Data)

    const clearItems = () => {
        setData([])
    }
    const remove = (id) => {
        const newData = data.filter(item => item.id !== id)
        setData(newData)
    }
    const msg = 'Birthdays today'
    return (

        <>
            <div className="container">
                <h1>{data.length} {data.length > 1 ? msg : 'Birthday today'}</h1>

                {data.map(item => {
                    const { id, name, url, age } = item
                    return (
                        <section key={id} className='d-flex justify-content-between align-items-center'>

                            <div className="content d-flex justify-content-start align-items-center m-3 ">
                                <div className="img mr-4">
                                    <img src={url} alt="" />
                                </div>
                                <div className="details text-capitalize">
                                    <h3>{name}</h3>
                                    <p className='text-secondary'>{age}</p>
                                </div>
                            </div>
                            <button className="btn btn-danger" onClick={() => remove(id)}>Remove</button>
                        </section>
                    )
                })}
                <button className="btn btn-success btn-block" onClick={clearItems}>Clear All</button>
            </div>
        </>
    )
}

export default Birthday
