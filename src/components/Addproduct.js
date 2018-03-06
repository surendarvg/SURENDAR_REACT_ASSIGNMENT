import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Addproduct extends Component {
    render() {
        return (
            <div>
                <h2 className="Addhead"><center>ADD ITEM</center></h2>
                <p><center>ID:<input type="text" className="Margin1" name="id" onChange={(e) => { this.props.handleAddItems(e) }}></input></center></p>
                <p><center>PRODUCT NAME:<input type="text" className="Margin2" name="productName" onChange={(e) => { this.props.handleAddItems(e) }}></input></center></p>
                <p><center>PRICE:<input type="text" className="Margin3" name="price" onChange={(e) => { this.props.handleAddItems(e) }}></input></center></p>
                <p><center>QUANTITY:<input type="text" className="Margin4" name="quantity" onChange={(e) => { this.props.handleAddItems(e) }}></input></center></p>
                <p><center>ROL:<input type="text" className="Margin5" name="rol" onChange={(e) => { this.props.handleAddItems(e) }}></input></center></p>
                <Link to="/" ><button type="button" className="bttn" onClick={() => {
                    this.props.Additemsclick(this.props.addItem);
                }}>SAVE</button></Link>
            </div>
        )
    }
}
export default Addproduct;