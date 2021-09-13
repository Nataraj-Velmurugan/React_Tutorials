import React, { Component } from "react";

export default class LazyClass extends Component {
    render() {
        return (
            <div>
                I am Lazy class comp
            </div>
        )
    }
}

// const LazyClass = React.lazy(() => import('./Components/Lazy_Loading/LazyClass'));

{/* <LazyFunc />
      <Suspense fallback={<Loader/>}>
        <LazyClass />
      </Suspense> */}