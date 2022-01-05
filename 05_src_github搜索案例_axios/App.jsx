import React, { Component } from 'react'
import List from './Components/List'
import Search from './Components/Search'

export default class App extends Component {
    state = {//初始化状态
        users:[],//users初始值为数组
        isFirst:true,//是否为第一次打开页面
        isLoading:false,//标识页面是否处于加载中
        err:'',//存储请求相关错误信息
    }
    //更新App的state
    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }
    render() {
        const {users} = this.state
        return (
                <div className="container">
                    <Search updateAppState = {this.updateAppState}/>
                    <List {...this.state}/>
                </div>
        )
    }
}
