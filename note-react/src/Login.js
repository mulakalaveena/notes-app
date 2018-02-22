import React,{Component} from 'react'
import axios from 'axios'
import Note from './Note.js'


class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            loggedin:false
        }
        this.handleUsername=this.handleUsername.bind(this)
        this.handlePassword=this.handlePassword.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    render(){
        return(
            <div>
                <form>
                    <label>Name:</label>
                    <br/>
                    <input type='text' placeholder='username' onChange={this.handleUsername}/>
                    <br/>
                    <label>password:</label>
                    <br/>
                    <input type='password' placeholder='password' onChange={this.handlePassword}/>
                    <br/>
                    <button type='button'onClick={this.handleClick}>login</button>
                    <br/>
                </form>
                    {this.state.loggedin?<Note/>:null}
            </div>
        )
    }
    handleUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    handlePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    handleClick(){
        axios({
            method:'post',
            url:'http://localhost:3001/user/login',
            data:{
                username:this.state.username,
                password:this.state.password
            },
            withCredentials: true
        })
        .then((res)=>{
            this.setState({
                loggedin:!this.state.loggedin
            })
            alert('user is loggedin')
        })
        .catch(error=>{
            alert('user not found')
        })
    }
}
export default Login