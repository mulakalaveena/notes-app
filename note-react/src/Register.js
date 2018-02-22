import React,{Component} from 'react';
import axios from 'axios';

class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            
        }
        this.handleChangeUsername=this.handleChangeUsername.bind(this)
        this.handleChangePassword=this.handleChangePassword.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }
    render(){
        return(
            <div>
                <form>
                    <label>Name:</label>
                    <br/>
                    <input type='text' placeholder='username' value={this.state.username} onChange={this.handleChangeUsername}/>
                    <br/>
                    <label>password:</label>
                    <br/>
                    <input type='password' placeholder='password' value={this.state.password} onChange={this.handleChangePassword}/>
                    <br/>
                    <button type='button'onClick={this.handleClick}>Register </button>
                </form>  
            </div>  
        )
    }
    handleChangeUsername(event){
        this.setState({username:event.target.value})
    }
    handleChangePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    handleClick(){
        axios({
            method:'post',
            url:'http://localhost:3001/user/register',
            data:{
                username:this.state.username,
                password:this.state.password
            },
            withCredentials: true
        })
        .then(()=>{
            this.setState({
                username:'',
                password:''
            })
            alert('register successful')
        })
        .catch(error=>{
            alert('username should be unique')
        })
       
    }
}
export default Register;