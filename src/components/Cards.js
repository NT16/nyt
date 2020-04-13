import React from 'react'
import { useHistory } from 'react-router-dom'
import CardColumns from 'react-bootstrap/CardColumns'
import CardBasic from './CardBasic'

const Cards = ({ data }) => {

    let history = useHistory()

    const onClick = (event, text) => {
        event.preventDefault()
        console.log(event)
        console.log('clicked etxt', text)
        history.push({
            pathname: '/bestsellers',
            category: text
        })
    }

    return (<CardColumns>
        {
            data.map(category => <CardBasic
                title={category.display_name}
                linkName={category.list_name_encoded}
                onClick={onClick}
                key={category.list_name_encoded}
            />
            )
        }

    </CardColumns>
    )
}

export default Cards;

//display_name: "Combined Print & E-Book Fiction"
//list_name_encoded