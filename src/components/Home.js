import React from 'react';
import { useHistory } from 'react-router-dom'
import Cards from './Cards';

const Home = ({ loading, categories, dispatch }) => {
    let history = useHistory();
    
    const onClick = (event, text) => {
        event.preventDefault()
        const api = '/api/nyt/categories/' + text;

        dispatch({ type: "FETCHING" });
        fetch(api)
            .then(res => res.json())
            .then(res => {
                dispatch({ type: "BOOKS_RECEIVED", data: res.results });
            });

        history.push('/bestsellers');
    };

    return (
        <div className="App">
            <h1 className='main-header'>NY Times Bestsellers</h1>
            <ul>
                {
                    loading &&
                    <div>Loading...</div>
                }
                {
                    (!loading && categories) &&
                    <Cards data={categories} onClick={onClick} />
                }
            </ul>
        </div>
    );
}

export default Home;