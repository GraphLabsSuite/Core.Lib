import React, { Component } from 'react';
import './App.css';
import {Matrix} from "./Matrix";

class App extends Component {
    render() {
        return (
            <Matrix
                rows={2}
                readonly
                columns={3}
                handler={(val) => console.log(val)}
                defaultValues={[[1,2],[2,3], [3,4]]}
                matrixFilling = {false}
                edgeNaming={false}
            />
        );
    }
}

export default App;
