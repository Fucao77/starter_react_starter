import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Card.module.css'
import Router from 'next/router';

export default function Card(props) {

    const [selected, setSelected] = useState(null);
    useEffect(() => {
        console.log(selected)
    }, [selected]);

    const gotoproductpage = (title) => {
        localStorage.setItem('selected_product', props);
        Router.push(props.title);
    }


    return (

        <div className={styles.cardContainer}>
            <p>{props.title}</p>
            <Image width="350vw" height="250vw"
                src="https://images.unsplash.com/photo-1418662589339-364ad47f98a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80" />
            <p>{props.desc}</p>
            <h2>{props.price} euros</h2>
            <div className={styles.button1}><button className={styles.button} onClick={()=>{
                    gotoproductpage(props.title),
                    localStorage.getItem("selected_product", props)}} >
                    acheter la carte
                </button></div>

        </div>

    )
}
