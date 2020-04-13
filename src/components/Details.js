import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useFetchCategories } from '../hooks/index'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import BookDetails from './BookDetails'

const Details = () => {

    let location = useLocation();
    let history = useHistory()
    console.log('category', location.category, typeof (location.category))
    
    const data = useFetchCategories(location.category)
    console.log(data)
    const { results } = data

    const backToHome = (event) => {
        event.preventDefault()
        history.push('/')
    }

    return (
        Object.keys(data).length !== 0 &&
        <div className='text-center'>
            <h2 className='title'>{results.display_name}</h2>
            <Button className='home' variant='info' onClick={backToHome}>Home</Button>
            <CardColumns className='books-column'>
                {
                    results.books.map(book => <BookDetails book={book} key={book.title}/>)
                }
            </CardColumns>
            <footer className='footer'>{data.copyright}</footer>
        </div>
    )
}

export default Details;