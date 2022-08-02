import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import Return from "../components/Return";


const Year = () => {
    const { year } = useParams();

    useEffect(() => {
        
    });

    return (
        <>
            <Return />

            <main>
                <h1>{year}</h1>
            </main>
        </>
    );
}

export default Year;