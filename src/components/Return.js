import { useNavigate } from "react-router-dom";


const Return = () => {
    const navigate = useNavigate();

    return (
        <header className="return">
            <button onClick={() => navigate(-1)}>
                Return
            </button>
        </header>
    );
}

export default Return;