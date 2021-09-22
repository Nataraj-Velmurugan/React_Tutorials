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

    console.log("render");

    let todoList =  response.slice(0, 10)

    // response[0].hasOwnProperty("title") ? response.slice(0, 10) :

    return (

        <div>
            {/* <h1> {val1} </h1>
            <button onClick={() => setVal1(val1 + 10)}> click me !!!</button>
            <h1> {val2} </h1>
            <button onClick={() => setVal2(val2 + 100)}> click me !!!</button>
            
            <h1>{todo.length !== 0  ? singleTodo.id : "no post found"}</h1> */}

            <button onClick={() => setPage('posts')}> posts !!!</button>
            <button onClick={() => setPage('comments')}> comments !!!</button>

            <table>
                <tr>
                   
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>

                {todoList.map((item, index) => {
                    return (
                        <>
                            <tr key={index}>
                                <td>{page === "posts" ? item.userId : item.postId}</td>
                                <td>{item.id} </td>
                                <td>{page === "posts" ? item.title : item.email} </td>
                                <td> {item.body.substring(0, 30)} </td>
                            </tr>
                        </>
                    )
                }
                )}
            </table>

        </div>
    )
}

export default UseEffectFunc;


