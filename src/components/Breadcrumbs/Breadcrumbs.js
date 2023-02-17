import './Breadcrumbs.css'
import HouseIcon from '@mui/icons-material/House';

function Breadcrumbs() {
    return (
        <ul className="breadcrumbs">
            <li className="breadcrumbs__item">
                <a href="/" className="breadcrumbs__home">
                    <img src="images/icons/home.svg" alt="arrow left" />
                </a>
            </li>
            <img src="images/icons/chevrons-right.svg" alt="arrow left" className="chevrons-right"/>
            <li className="breadcrumbs__item">
                <a href="/eCommerce" className="breadcrumbs__link">eCommerce</a>
            </li>
            <img src="images/icons/chevrons-right.svg" alt="arrow left" className="chevrons-right"/>
            <li className="breadcrumbs__item">
                <span className="breadcrumbs__current">Electronics</span>
            </li>
        </ul>
    );
}

export default Breadcrumbs;