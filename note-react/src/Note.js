import React,{Component} from 'react'
import Createnote from './Createnote.js'
import Deletenote from './Deletenote.js'

class Note extends Component{
    constructor(props){
        super(props)
        this.state={
            
            create:false,
            delete:false
        }
        this.handleCreate=this.handleCreate.bind(this)
        this.handleDelete=this.handleDelete.bind(this)
        
    }
    render(){
        return(
            <div>
                <form>
                    <button onClick={this.handleCreate} type='button'>Create</button>
                    <br/>
                    <br/>
                    <button onClick={this.handleDelete} type='button'>Delete</button>
                </form>
                {this.state.create?<Createnote/>:null},
                {this.state.delete?<Deletenote/>:null}
            </div>
        )
    }
    handleCreate(){
        this.setState({
            create:!this.state.create,
            Delete:this.state.delete
        })
    }
    handleDelete(){
        this.setState({
            create:this.state.create,
            delete:!this.state.delete
        })
    }
}
export default Note