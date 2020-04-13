import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const CardBasic = ({ title, linkName, onClick }) => {
  return <>
    <Card className="text-center" border="light" style={{ width: '18rem' }}>
      <Button variant='link' onClick={(e) => onClick(e, linkName)}>
        {title}
      </Button>
    </Card>
  </>
}

export default CardBasic;