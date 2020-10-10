import React from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import CardBasic from './CardBasic'

const Cards = ({ data, onClick }) => {
    return (<CardColumns>
        {
            data &&
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