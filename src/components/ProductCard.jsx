import React from 'react'
import { useProduct } from '../context/ProductContext';

//css
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = (props) => {
   
  const {id,name,price,category,imageURL} = props;

  const { handleAdd , addRemovecartLoading} = useProduct();

  return (

    <Card>
      <Card.Img variant ="top" src={imageURL}/>
      <Card.Body className="m-0">
        <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Price: {price}</Card.Text>
      </Card.Body>

      <Card.Body>
        <div className="d-grid">
          <Button disabled={addRemovecartLoading} onClick={() => handleAdd({ id,name,price,imageURL,category})} variant="primary">Add To Cart</Button>
        </div>
      </Card.Body>
    </Card>
    
  )
}

export default ProductCard