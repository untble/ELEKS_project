import styles from './Header.css'
function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src="images/logo.svg" className="header__logo-img" alt="Store Logo"></img>
                <div className="header__logo-text">Online Store</div>
            </div>
        </header>
    );
}

export default Header;