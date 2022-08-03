import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import Return from "../components/Return";


const Year = () => {
    const { year } = useParams();
    const [yearData, setYearData] = useState();

    useEffect(() => {
        const intYear = parseInt(year);

        if (intYear === 2020) {
            setYearData(require("../assets/data/2020.json"));
        } else if (intYear === 2021) {
            // setYearData(require("../assets/data/2021.json"));
        } else if (intYear === 2022) {
            // setYearData(require("../assets/data/2022.json"));
        }

    }, [year]);

    return (
        <>
            <Return />

            <main>
                <h1>{year}</h1>

                <section className="months">
                    {!!yearData ? 
                        Object.keys(yearData).slice(0).reverse().map((month, key) => {
                            const monthData = yearData[month];
                            let amountSolved = 0;

                            for (let i = 0; i < monthData.length; i++) {
                                const problem = monthData[i];

                                if (problem.solved || !problem.canBeSolved) {
                                    amountSolved++;
                                }
                            }

                            return (
                                <div className="card" key={key}>
                                    <div className="card-header">
                                        <h2>{month}</h2>
                                        <h3>{amountSolved}/{monthData.length}</h3>
                                    </div>

                                    <div className="card-body">
                                        <ol reversed>
                                            {monthData.slice(0).reverse().map((problem, problemKey) => {
                                                return (
                                                    <li key={problemKey}>
                                                        <Link to={`/problem/${problem.id}`}>
                                                            Problem #{problem.id} - {problem.askedBy} - {problem.difficulty}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ol>
                                    </div>
                                </div>
                            );
                        })
                        :
                        <p>Nada</p>
                    }
                </section>
            </main>
        </>
    );
}

export default Year;