import React, { useEffect, useState } from 'react'
import styles from '../styles/Marketplace.module.css'
import Card from '../components/Card';



export default function Marketplace() {
    const [user, setUser] = useState(null);
   

    return (

        <div className={styles.marketcontainer}>

           <h3>NFT Marketplace</h3> 

           <div className={styles.card}>
            <Card 
            title= "Ski"
            desc= "Slide Session"
            price= "25€"
            />

            <Card 
            title= "Ski"
            desc= "Slide Session"
            price= "25€"
            />
             </div>    
        </div>
    );
}


