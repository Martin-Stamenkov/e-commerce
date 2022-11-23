import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductById } from './api';
import { Product as ProductInterface } from 'api';
import { Carousel } from 'react-responsive-carousel';
import { Spinner } from 'components';
import { makeStyles } from '@mui/styles';
import { Box, Typography, Autocomplete, TextField, Button } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const useStyles = makeStyles(() => ({
  carousel: {
    "& .thumb": {
      height: 100,
    },
    "& .slider-wrapper": {
      "& ul": {
        "& li": {
          "& img": {
            height: 420,
          }
        }
      }
    }
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: 20,
    marginRight: "10%",
    marginLeft: "10%"
  },
  button: {
    width: 300,
    height: 56,
    backgroundColor: "#000000 !important",
    "&:hover": {
      backgroundColor: "#000000d6 !important",
    },
    "& span": {
      marginLeft: 6,
    }
  },
  orderContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
}))


export function Product() {
  const classes = useStyles();
  const [product, setProduct] = useState<ProductInterface>();
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      if (id) {
        const response = await getProductById(id)
        setProduct(response);
      }
    }
    getProduct();
  }, [id])

  console.log(product)

  return (
    !product ? <Spinner /> :
      <Box className={classes.container}>
        <Box style={{ width: 360, height: 300 }}>
          <Carousel className={classes.carousel}>
            {product?.assets.map((a: any) => <img alt="assets" src={a.url} />
            )}
          </Carousel>
        </Box>
        <Box className={classes.orderContainer}>
          <Typography>{product.name}</Typography>
          <Typography variant='h4'>{product.price.formatted_with_code}</Typography>
          {product.variant_groups && product?.variant_groups.length > 0 &&
            <Autocomplete
              disablePortal
              id="auto-complete"
              options={product.variant_groups[0].options}
              getOptionLabel={((option: { name: string }) => (option).name)}
              sx={{ width: 300 }}
              renderInput={(params) =>
                <>
                  <Typography color="GrayText" variant="caption">{product.variant_groups && product.variant_groups[0]?.name}</Typography>
                  <TextField {...params} />
                </>
              }
            />}
          <Box marginTop="10px">
            <Button variant="contained" className={classes.button}>
              <ShoppingBagIcon />
              <Typography variant="caption">Добави в количката</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
  )
}
