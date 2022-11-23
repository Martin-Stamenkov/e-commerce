import { Grid } from '@mui/material';
import { getProductsByCategoryId } from 'api/api'
import { Product } from 'api';
import { Card, Category, Spinner } from 'components'
import { useEffect, useState } from 'react'
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

  return (
    !products ? <Spinner /> :
      <Category title='Мъже' totalProducts={products?.length}>
        <Grid container spacing={0.5} >
          {products.map(({ image, description, id, name, slug, price }) =>
            <Grid key={id} item >
              <Card.Product
                name={name}
                image={image}
                path={id}
                id={id}
                description={description}
                price={price}
              />
            </Grid>
          )}
        </Grid>
      </Category>
  )
}
