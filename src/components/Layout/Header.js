import mealsImage from '../../assets/meals.jpeg';
import classes from './Header.module.css';
import HeaderCartBtn from './HeaderCartBtn';

const Header = props => {

    return(
        <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartBtn/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Food Items" />
        </div>
        </>
    );
}

export default Header;