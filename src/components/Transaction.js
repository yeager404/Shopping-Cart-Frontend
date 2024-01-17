import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';

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

  return (
    <div>
        {loader && (
            <div className=' relative'>
                <Spinner/>
                <div className='flex justify-center -mt-52 font font-semibold text-lg'>Wait while your transaction is processed</div>
            </div>
        )}
        {
            !loader && (
                <div className='flex h-[500px] justify-center items-center font-semibold font-mono text-3xl'>Thank You for your patronage!</div>
            )
        }
    </div>
  )
}

export default Transaction