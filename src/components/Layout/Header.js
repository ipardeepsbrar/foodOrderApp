import mealsImage from '../../assets/meals.jpeg';
import classes from './Header.module.css';
import HeaderCartBtn from './HeaderCartBtn';
import cartContext from "../../store/cartContext";
import {useContext} from 'react';
import Cart from '../Cart/Cart';

const Header = props => {
    const cartCtx = useContext(cartContext);
    return(
        <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartBtn onClick={cartCtx.cartClick}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Food Items" />
        </div>
        {cartCtx.cartOpen && <Cart />}
        </>
    );
}

export default Header;