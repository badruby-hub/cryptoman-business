"use client";

import classes from "./circles.module.css";
import { BitcoinCoin, EthereumCoin, TetherCoin, TronCoin } from "./Coins";



export default function Circles() {
        
    const circles = [
        {
          top: "20%",
          right: "30%",
          coin: <TetherCoin />,
          shadow: "0px 0px 140px 150px rgba(37, 134, 106, 0.4)"
        },
        {
          top: "35%",
          left: "30%",
          coin: <BitcoinCoin />,
          shadow: "0px 0px 140px 150px rgba(37, 134, 106, 0.4)"
        },
        {
          bottom: "42%",
          right: "35%",
          coin: <EthereumCoin />,
          shadow: "0px 0px 140px 150px rgba(37, 134, 106, 0.4)"
        },
        {
          bottom: "15%",
          left: "20%",
          coin: <TronCoin />,
          shadow: "0px 0px 140px 150px rgba(37, 134, 106, 0.4)"
        },
    ]
      
    return <>
         {circles.map((circle, i )=>{
         return  <div
         key={i}
         className={`${classes.circle} ${classes[`circle__${i + 1}`]}`}
         style={{
            top:circle?.top,
            left: circle?.left,
            bottom:circle?.bottom,
            right:circle?.right,
            boxShadow:circle?.shadow,
            
         }}
         >
            <div className={classes.coin}>{circle.coin}</div>
           </div>
        })}
    </>
   
    
}