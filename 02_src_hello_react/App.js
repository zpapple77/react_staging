//创建外壳组件

import React from "react";
import Hello from "./Components/Hello/Hello";
import Welcome from "./Components/Welcome/Welcome";

// 创建并且暴露App组件
export default class App extends React.Component{
    render(){
        return (
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}
