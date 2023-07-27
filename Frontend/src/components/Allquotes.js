import React, { useEffect } from 'react'
import style from './css/allquotes.module.css'
import { useState } from 'react';

function Allquotes() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch("http://localhost:4500/list")
            .then((response) => {
                if (!response.ok) {
                    alert('Network response was not ok.');
                }
                return response.json();
            })
            .then((data) => {
                setData(data); 
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    };


    useEffect(() => {
        fetchData(); 
    }, []);

    const fetchingData = data.map((item) => {
        return (
            <div key={item._id} className={style.container}>
                <div className={style.box}>
                    <p className={style.content}>{item.quote}</p>
                    <p className={style.authorname}>- {item.author}</p>
                </div>
                <a href='/viewfullquote'>
                <span className={style.button} onClick={()=>{
                    localStorage.setItem('authorname', item.author);
                    localStorage.setItem('authorquote', item.quote);
                }}>
                    
                    View full Quote
                </span>
                    </a>
            </div>
        );
    });

    return (
        <>
            <div className={style.heading}>AllQuotes</div>
            {fetchingData}
        </>
    );
}



export default Allquotes