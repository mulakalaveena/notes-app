import React,{Component} from 'react'
import axios from 'axios'


class Createnote extends Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            body:''
        }
        this.handleTitle=this.handleTitle.bind(this)
        this.handleBody=this.handleBody.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }
    render(){
        return(
            <div>
                <form>
                    <label>Title:</label>
                    <br/>
                    <input type='String' placeholder='Title' onChange={this.handleTitle}/>
                    <br/>
                    <label>Body:</label>
                    <br/>
                    <input type='String' placeholder='Body' onChange={this.handleBody}/>
                    <br/>
                    <button type='button' onClick={this.handleClick}>Create </button>
                </form>
            </div>
        )
    }
    handleTitle(event){
        this.setState({
            title:event.target.value
        })
    }
    handleBody(event){
        this.setState({
            body:event.target.value
        })
    }
    handleClick(){
        axios({
            method:'post',
            url:'http://localhost:3001/notes/create',
            data:{
                title:this.state.title,
                body:this.state.body
            },
            withCredentials: true
        })
        .then(()=>{
            this.setState({
                title:'',
                body:''
            })
            
            alert('note created')
        })
        .catch(error=>{
            alert('can not create the note')
        })

    }
}
export default Createnote;