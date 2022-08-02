import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Return from '../components/Return';
import Problems100 from '../problems/1-100';


const Problem = () => {
    const { id } = useParams();
    const [problem, setProblem] = useState();
    
    useEffect(() => {
        const intId = parseInt(id);

        if (intId <= 100) {
            setProblem(Problems100[intId]);
        }
    }, []);

    return (
        <>
            <Return />

            <main className="problem-wrap">
                {problem}
            </main>
        </>
    );
}

export default Problem;