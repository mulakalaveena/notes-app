import React,{Component} from 'react'
import axios from 'axios'

class Deletenote extends Component{
    constructor(props){
        super(props)
        this.state={
            title:''
        }
        this.handleDelete=this.handleDelete.bind(this)
        this.handleTitle=this.handleTitle.bind(this)
    }
    render(){
        return(
            <div>
                <form>
                    <label>Title:</label>
                    <br/>
                    <br/>
                    <input type='String' onChange={this.handleTitle} placeholder='Title'/>
                    <br/>
                    <button type='button' onClick={this.handleDelete}>Delete</button>
                </form>
            </div>
        )
    }
    handleTitle(event){
        this.setState({
            title:event.target.value
        })
    }
    handleDelete(){
        axios({
            method:'post',
            url:'http://localhost:3001/notes/delete',
            data:{
                title:this.state.title
            },
            withCredentials:true
        })
        .then(()=>{
            this.setState({
                title:''
            })
            alert('note deleted')
        })
        .catch(error=>{
            alert('can not delete the note')
        })
    }
}
export default Deletenote