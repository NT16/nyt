import React from 'react'
import { useHistory } from 'react-router-dom'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import BookDetails from './BookDetails'

const Details = ({data, loading }) => {
    let history = useHistory();
 
    const backToHome = (event) => {
        event.preventDefault()
        history.push('/')
    }

    return (
        <div>
            {
                loading && 
                <div className='text-center'>Loading books. Please wait...</div>
            }
            {
                data &&
                <div className='text-center'>
                    <h2 className='title'>{data.display_name}</h2>
                    <Button className='home' variant='info' onClick={backToHome}>Home</Button>
                    <CardColumns className='books-column'>
                        {
                            data.books.map(book => <BookDetails book={book} key={book.title} />)
                        }
                    </CardColumns>
                </div>
            }
        </div>
    )
}

export default Details;