import {useState} from "react";
import "../static/counterstyle.css";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div className="container">
                <h1 className="number">{count}</h1>
            </div>
            <section className="btns-container">
                <button onClick={() => setCount(count + 1)} className="increment">+</button>
                <button onClick={() => setCount(count - 1)} className="decrement">-</button>
            </section>
        </>
    )
}

export default Counter;