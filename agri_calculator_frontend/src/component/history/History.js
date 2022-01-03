import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { coreAxios } from '../../utils/axios';
import { dataProcess } from './Data';
import "./History.css"

export default function History() {
    const [finalProcess, setAPIData] = useState([]);

    useEffect((e) => {
        //e.preventDefault();
        setUsername();
    }, []);


    const setUsername = () => {
        const username = localStorage.getItem('username');
        getCalcultion(username);
    }

    const getCalcultion = (username) => {
        coreAxios
            .get(`http://127.0.0.1:8000/api/calculation/?search=${username}`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <>{finalProcess.map((data) => (
            <div className='row calc_history'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <div className='result '>
                        <table>
                            <thead>
                                <tr>
                                    <th>হিসাবের নাম</th>
                                    <th>হিসাবকৃত ফলাফল</th>
                                </tr>
                            </thead>
                            <tbody>
                            {console.log(data)}
                            {dataProcess(data).map(([name, value]) => (
                                // <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                                <tr className="table-row">
                                    <td>{name}</td>
                                    <td style={{ textTransform: 'capitalize' }}>{value}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='col-md-3'></div>
            </div>
        ))}
        </>
    )
}
