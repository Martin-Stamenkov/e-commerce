import * as React from 'react';
import { Badge, Card, CardMedia, IconButton, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { SearchBar } from './SearchBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { makeStyles } from '@mui/styles';
import { useCommerce } from 'provider/CommerceProvider';
import { CardList } from 'components/card/CardList';

const useStyles = makeStyles((theme: Theme) => ({
    badge: {
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    },
    contentContainer: {
        display: "flex",
        flex: 1,
        alignItems: "center"
    }
}));


export default function AppBar() {
    const classes = useStyles();
    const { categories } = useCommerce();

    console.log(categories)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Toolbar>
                <Box className={classes.contentContainer}>
                    <SearchBar />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        color="black"
                        sx={{ flexGrow: 1, justifyContent: "center", display: { xs: 'none', sm: 'flex' } }}
                    >
                        Commerce
                    </Typography>
                </Box>
                <IconButton aria-label="cart">
                    <Badge className={classes.badge} badgeContent={4} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
         <CardList categories={categories} />
        </Box>
    );
}


