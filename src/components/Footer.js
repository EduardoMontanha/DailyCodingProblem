import themeIcon from '../assets/images/theme-icon.svg';


const Footer = () => {
    const toggleDarkTheme = () => {
        document.body.classList.toggle("theme-dark");
    }

    return (
        <footer>
            <button onClick={() => toggleDarkTheme()}>
                <img src={themeIcon} alt="Theme switch" />
            </button>
        </footer>
    );
}

export default Footer;