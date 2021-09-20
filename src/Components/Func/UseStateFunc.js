import { useState } from "react"

const UseStateFunc = () => {

    function arrayLooping() {
        let arr = [];

        for (let i = 0; i < 1000; i++) {
            console.log("arrayLooping")
            arr.push(i)
        }
        return arr;
    }

    const [count, updateCount] = useState(0);

    const [stateObj, updateObj] = useState({
        alpha: 1,
        beta: 2
    });

    // const [arr, updateArr] = useState(arrayLooping())

    const [arr, updateArr] = useState(() => {
        let arr = [];

        for (let i = 0; i < 1000; i++) {
            console.log("arrayLooping")
            arr.push(i)
        }

        return arr;
    })

    let wrapCounter = () => {

        // Batch Operations is perfomred

        updateCount(count + 1);
        updateCount(count + 1);

        // updateCount((prevCount) => {
        //     console.log("prevCount");
        //     console.log(prevCount);
        //     console.log("count")
        //     console.log(count)
        //     return prevCount + 1
        // });

        // updateCount((prevCount) => {
        //     console.log("prevCount");
        //     console.log(prevCount);
        //     console.log("count")
        //     console.log(count)
        //     return prevCount + 1
        // });
    }

    let updateStateObj = () => {
        // overrides the total object

        // updateObj ((prevObj) => {
        //     console.log(prevObj)
        //     return {
        //         alpha: prevObj.alpha + 10
        //     }
        // })

        updateObj((prevObj) => {
            console.log(prevObj)
            return {
                ...prevObj,
                alpha: prevObj.alpha + 10
            }
        })
    }

    console.log("re - rendinering")

    return (

        <div>
            {/* <h1 onClick={wrapCounter}>I will increase {count}</h1> */}

            {/* <h1 onClick={updateStateObj}>{stateObj.alpha}</h1>

                <h1 >{stateObj.beta}</h1> */}

            <h1 onClick={() => updateArr([...arr, arr.length+1])}>{arr[arr.length -1]}</h1>

        </div>


    )
}

export default UseStateFunc;