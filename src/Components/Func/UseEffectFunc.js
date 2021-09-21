import React, { useState, useEffect } from "react";

const UseEffectFunc = () => {
    const [val1, setVal1] = useState(10);
    const [val2, setVal2] = useState(100);

    const [todo, setTodo] = useState([]);

    const [page, setPage] = useState('posts');
    const [response, setResponse] = useState([]);

    

    // useEffect(() => {
    //     console.log("useEffect")
    // }, []) // componentDidMount.

    // useEffect(() => {
    //     console.log("useEffect")
    //     setVal2(val1 * 10)
    // }, [val1]) // componentDidUpdate.

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then(response => response.json())
    //         .then(json => {
    //             console.log(json)
    //             return setTodo(json)
    //     })
    // }, []) // componentDidMount

    useEffect(() => {
        console.log(`https://jsonplaceholder.typicode.com/${page}`)
        fetch(`https://jsonplaceholder.typicode.com/${page}`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                return setResponse(json)
        })
    }, [page]) // componentDidMount

    console.log("render")

    let singleTodo = todo[0];

    return (
        
        <div>
            {/* <h1> {val1} </h1>
            <button onClick={() => setVal1(val1 + 10)}> click me !!!</button>
            <h1> {val2} </h1>
            <button onClick={() => setVal2(val2 + 100)}> click me !!!</button>
            
            <h1>{todo.length !== 0  ? singleTodo.id : "no post found"}</h1> */}

    <button onClick={() => setPage('posts')}> posts !!!</button>
    <button onClick={() => setPage('comments')}> comments !!!</button>
    <h1>{JSON.stringify(response.length)}</h1>
        </div>
    )
}

export default UseEffectFunc;


