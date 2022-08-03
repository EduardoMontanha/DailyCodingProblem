import { useState } from "react";


const Problem1 = () => {

    const [input1, setInput1] = useState("");

    return (
        <div className="problem-wrap">
            <section className="problem-header">
                <h1>Problem #1</h1>

                <p>This problem was recently asked by <strong>Google</strong>.</p>
                <p>
                    Given a list of numbers and a number <code>k</code>, return whether
                    any two numbers from the list add up to <code>k</code>.
                </p>
                <p>
                    For example, given <code>[10, 15, 3, 7]</code> and <code>k</code> of&nbsp;
                    <code>17</code>, return true since <code>10 + 7</code> is <code>17</code>.
                </p>
                <p>Bonus: Can you do this in one pass?</p>
            </section>

            <hr />

            <section className="problem-solution"></section>
        </div>
    );
}

export default Problem1;