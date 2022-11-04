import { Box, Grid } from '@mui/material';
import { getProductsByCategoryId } from 'api/api'
import { Product } from 'api';
import { Card, Category } from 'components'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function Men() {
  const { id } = useParams();
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const getProducts = async () => {
      const response = await getProductsByCategoryId(id)
      setProducts(response.data);
    }
    getProducts()
  }, [id])

  console.log(id)
  console.log(products)

  return (
    <>
      <Category title='Мъже'>
        <Grid container spacing={0.5} >
          {products && products.map(({ image, description, id, name, slug, price }) =>
            <>
              <Grid item>
              <Card.Product
                name={name}
                key={id}
                image={image}
                path={slug?.toString()}
                id={id}
                description={description}
                price={price}
              />
            </Grid>                          
            </>
          )}
      </Grid>
    </Category>
    </>
  )
}
