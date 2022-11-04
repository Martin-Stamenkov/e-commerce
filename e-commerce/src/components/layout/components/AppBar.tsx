import { Badge, IconButton, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { SearchBar } from './SearchBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { makeStyles } from '@mui/styles';
import { useCommerce } from 'provider';
import { useNavigate } from 'react-router-dom';
import { Category } from 'api';
import { Card } from 'components';

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
    const navigate = useNavigate()
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
                        onClick={() => navigate("/")}
                        sx={{ flexGrow: 1, justifyContent: "center", display: { xs: 'none', sm: 'flex' }, cursor: "pointer", marginRight: "160px" }}
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
            <Box display="flex" justifyContent="center">
                {categories && (categories as Category[]).map(({ assets, description, id, name, slug }) => <Card.Category name={name} key={id} assets={assets} path={slug?.toString()} id={id} description={description} />).reverse()}
            </Box>
        </Box>
    );
}


