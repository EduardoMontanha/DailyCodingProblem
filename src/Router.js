import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Problem from './pages/Problem';
import Year from './pages/Year';


const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:year" element={<Year />}/>
            <Route path="/problem/:id" element={<Problem />} />
            <Route path="*" element={<Home />} />
        </Routes>
    );
}
  
export default Router;