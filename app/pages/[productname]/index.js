import React, { useEffect } from "react"
import Navbar from "../../components/Navbar"
import { useRouter } from 'next/router'
import Card from "../../components/Card"
import styles from "../../styles/product.module.css"

export default function product() {

 const Pageproduct = () => {
     
 }

    return(
        <div >
            <Navbar />
         
            <div className={styles.card}>
                
            <h3> <a href="/">NFT Marketplace</a> </h3> 
            <Card 
             title= "Ski"
             desc= "Slide Session"
             price= "25€"
            />
            </div>
         

        </div>
    )
}