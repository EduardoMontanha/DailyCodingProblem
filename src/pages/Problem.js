import { useParams } from 'react-router-dom';
import useGetProblem from '../hooks/useGetProblem';
import Return from '../components/Return';


const Problem = () => {
    const { id } = useParams();
    const problem = useGetProblem(id);
    
    return (
        <>
            <Return />

            <main className="problem">
                {!!problem ?
                    problem
                    :
                    <section>
                        Problema não encontrado
                    </section>
                }
            </main>
        </>
    );
}

export default Problem;