import React, { useEffect, useRef, useState } from 'react'
import Spinner from './Spinner';
import gsap from "gsap";

const Transaction = () => {
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        const timer = setTimeout(()=>{
            setLoader(false);
        }, 2000);
        return () => {
            clearTimeout(timer);
        }
    }, [])

    const comp = useRef(null);

    useEffect(()=>{
        if(!loader){
            const transactionComplete = document.getElementById('transactionComplete');
            if(transactionComplete){
                gsap.from(transactionComplete,{
                    y: 18,
                    opacity: 0,
                    duration: 0.8, 
                    delay: 0.3
                });
            }
        }
    }, [loader]);

  return (
    <div ref={comp}>
        {loader && (
            <div id='transaction' className=' relative'>
                <Spinner/>
                <div className='flex justify-center -mt-52 font font-semibold text-lg'>Wait while your transaction is processed</div>
            </div>
        )}
        {
            !loader && (
                <div id='transactionComplete' className='flex h-[500px] justify-center items-center font-semibold font-mono text-3xl'>Thank You for your patronage!</div>
            )
        }
    </div>
  )
}

export default Transaction