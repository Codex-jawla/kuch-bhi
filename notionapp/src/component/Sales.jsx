import {BsFillArchiveFill, BsFillBellFill, BsFillGrid3X3GapFill, BsPeopleFill} from "react-icons/bs";
import React from "react";

function Sales() {

    return (
        <div className='w-fit shadow-md p-2 h-52 bg-white rounded-lg '>
            <h1 className='text-2xl'>Todays's Sales</h1>
            <p>sales summery</p>
            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>PRODUCTS</h3>
                        <BsFillArchiveFill className='card_icon'/>
                    </div>
                    <h1>300</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>CATEGORIES</h3>
                        <BsFillGrid3X3GapFill className='card_icon'/>
                    </div>
                    <h1>12</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>CUSTOMERS</h3>
                        <BsPeopleFill className='card_icon'/>
                    </div>
                    <h1>33</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>ALERTS</h3>
                        <BsFillBellFill className='card_icon'/>
                    </div>
                    <h1>42</h1>
                </div>
            </div>
        </div>
    )
}

export default Sales