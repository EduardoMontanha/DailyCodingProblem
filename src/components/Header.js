import logo from '../assets/images/logo.svg';


const Header = () => {

    return(
        <header className='header'>
            <img src={logo} alt="Logo" />

            <div>
                <h1>Daily Coding Problem</h1>

                <h2>
                    Problems given by&nbsp;
                    <a href='https://www.dailycodingproblem.com/' target="_blank" rel="noreferrer">
                        dailycodingproblem.com
                    </a>
                </h2>
            </div>
        </header>
    );
}

export default Header;