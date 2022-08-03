import Problems100 from '../problems/1-100';
import Problems200 from '../problems/101-200';


const useGetProblem = (id) => {

    const intId = parseInt(id);
    let ProblemComponent = undefined;

    if (intId <= 100) {
        ProblemComponent = Problems100[intId];
    } else if (intId <= 200) {
        ProblemComponent = Problems200[intId];
    }

    return !!ProblemComponent ? <ProblemComponent /> : undefined;
}

export default useGetProblem;