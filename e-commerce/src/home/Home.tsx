import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import womanFashionBanner from "assets/woman-fashion.jpg"
import manFashionBanner from "assets/man-fashion.jpg"
import boyFashionBanner from "assets/girl-fashion.jpg"
import girlFashionBanner from "assets/boy-fashion.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { makeStyles } from '@mui/styles'
import { Banner } from 'components'
import { Box } from '@mui/material'
import { ShopNavigation } from './components'

const useStyles = makeStyles(() => ({
    carousel: {
        "& .carousel.carousel-slider .control-arrow": {
            borderRadius: 50,
            height: 50,
            width: 50,
            top: "400px !important"
        },

        "& .carousel .slider": {
            height: "890px"
        }
    },
}));

export function Home() {
    const classes = useStyles();
    return (
        <Carousel className={classes.carousel} infiniteLoop showStatus={false} showThumbs={false} dynamicHeight={false}>
            <Box>
                <Banner src={manFashionBanner} />
                <ShopNavigation title="За него" path="men" buttonCaption="Пазарувай" />
            </Box>
            <Box>
                <Banner src={womanFashionBanner} />
                <ShopNavigation title="За нея" path="women" buttonCaption="Пазарувай" />
            </Box>
            <Box>
                <Banner src={boyFashionBanner} />
                <ShopNavigation title="За малките дами" path="boys" buttonCaption="Пазарувай" />
            </Box>
            <Box>
                <Banner src={girlFashionBanner} />
                <ShopNavigation title="За младите джентълмени" path="girls" buttonCaption="Пазарувай" />
            </Box>
        </Carousel>
    )
}
