import React from 'react'
import Bargraph from './maps/Bargraph'
import Linegraph from './maps/Linegraph'
import Sales from './Sales'
import Lineupeer from './maps/Lineupeer'


function Home() {

    return (
        <main className='main-container'>
            <div className='charts'>
                <Sales/>
                <Lineupeer/>
            </div>
            <div className='charts'>
                <Bargraph/>
                <Linegraph/>
            </div>
            <div className='charts'>
                <Bargraph/>
                <Linegraph/>
            </div>
        </main>
    )
}

export default Home