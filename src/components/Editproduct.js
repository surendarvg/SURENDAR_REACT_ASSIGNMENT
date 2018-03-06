import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Editproduct extends Component {
    render() {
        console.log(this.props.editItem)
        return (
            <div>
                <h2 className="Addhead"><center>EDIT ITEM</center></h2>
                <p><center>PRODUCT NAME:<input type="text" className="Margin2" name="productName" defaultValue={this.props.editItem.productName}
                    onChange={(e) => { this.props.Edititems(e) }}></input></center></p>
                <p><center>PRICE:<input type="text" className="Margin3" name="price" defaultValue={this.props.editItem.price}
                    onChange={(e) => { this.props.Edititems(e) }}></input></center></p>
                <p><center>QUANTITY:<input type="text" className="Margin4" name="quantity" defaultValue={this.props.editItem.quantity}
                    onChange={(e) => { this.props.Edititems(e) }}></input></center></p>
                <p><center>ROL:<input type="text" className="Margin5" name="rol" defaultValue={this.props.editItem.rol}
                    onChange={(e) => { this.props.Edititems(e) }}></input></center></p>
                <Link to="/" ><button type="button" className="bttn" onClick={() => {
                    this.props.Edititemsclick(this.props.editItem);
                }}>EDIT</button></Link>
            </div>
        )
    }
}
export default Editproduct;