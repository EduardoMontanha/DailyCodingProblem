import { Link } from 'react-router-dom';
import Header from "../components/Header";


const Home = () => {

    return (
        <>
            <Header />

            <main className='home'>
                <ul>
                    <li>
                        <Link to="/2022">2022</Link>
                    </li>
                    <li>
                        <Link to="/2021">2021</Link>
                    </li>
                    <li>
                        <Link to="/2020">2020</Link>
                    </li>
                </ul>
            </main>
        </>
    );
}

export default Home;