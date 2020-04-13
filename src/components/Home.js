import React, { useEffect } from 'react';
import Cards from './Cards'
import { useFetchLists } from '../hooks/index'

const Home = () => {
    const response = useFetchLists()

    function bestsellerLists() {
        if (response.results) {
            console.log('app.js, res value', response.results)
            return <Cards data={response.results} />
        }
    }

    return (
        <div className="App">
            <h1 className='main-header'>NY Times Bestsellers</h1>
            <ul>
                {
                    bestsellerLists()
                }
            </ul>
        </div>
    );
}

export default Home;