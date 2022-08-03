import { useNavigate } from "react-router-dom";


const Return = () => {
    const navigate = useNavigate();

    return (
        <header className="return">
            <button onClick={() => navigate(-1)}>
                <span>&#8678;</span> Return
            </button>
        </header>
    );
}

export default Return;