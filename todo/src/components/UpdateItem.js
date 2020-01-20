import React, { Component } from 'react'

export class UpdateItem extends Component {
  
    // state={
    //     id:this.props.updateData.id,
    //     task: this.props.updateData.task,
    //     isUpdate: this.props.updateData.isUpdate
    // }
    handleChange= (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
                [name]: value
            })
    }
    render() {
        return (           
            <div className="editItemcol-12">
                <p>{JSON.stringify(this.props.updateData)}</p>
               
                    <div className="row">
                        <div className="col-6">
                            {/* value={this.state.task} */}
                            <input type="text" className="form-control" name="task" onChange={this.handleChange} /> 
                        </div>
                        <div className="col-4">
                            <div className="btn btn-primary">Update Item</div>
                            <div className="btn btn-primary">Cancel</div>
                            </div>
                    </div>
                </div>
        )
    }
}

export default UpdateItem
