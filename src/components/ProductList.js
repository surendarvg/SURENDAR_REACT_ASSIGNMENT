import React, { Component } from 'react';
import './Style.css';
import { Link } from 'react-router-dom';
class Productlist extends Component {
    Data = (numbr, index) => {
        return (
            <tbody key={index}>
                <tr key={index}>
                    <td>{numbr.id}</td>
                    <td>{numbr.productName}</td>
                    <td>{numbr.price}</td>
                    <td>{numbr.quantity}</td>
                    <td>{numbr.rol}</td>
                    <td>    <Link to="/Edit"><button onClick={() => {
                        this.props.editItem(numbr);
                    }}>&#x270E;</button></Link>
                        <button onClick={() => {
                            this.props.confirmDelete(numbr.id);
                        }}>&#x2716;</button></td>
                </tr>
            </tbody>
        )
    }
    Table = (fun) => {
        return (<table>
            <thead>
                <th>ID</th>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>R.O.L</th>
                <th>ACTION</th>
            </thead>
            {fun.map((numbr, index) => {
                return this.Data(numbr, index);
            })}
        </table>);
    };
    showtable = (product, curpage, prodPerPage) => {
        const lastVal = curpage * prodPerPage;
        const firstVal = lastVal - prodPerPage;
        const fun = product.slice(firstVal, lastVal);
        console.log(fun)
        return (this.Table(fun))
    }
    pagination = (product, prodPerPage) => {
        const pagenumbers = [];
        for (let i = 1; i <= Math.ceil(product.length / prodPerPage); i++) {
            pagenumbers.push(i);
        }
        const pageNum = pagenumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.props.pageDisplayClick}>
                    {number}
                </li>
            );
        });
        return (
            <ul id="page-numbers">
                {pageNum}
            </ul>
        )
    }
    render() {
        return (
            <div>
                <h1 className="heading_style">ProductList</h1>
                <Link to="/Add"> <button className="addbuttnstyle" 
                >Add New Product</button></Link>
                {this.showtable(this.props.product, this.props.curpage, this.props.prodPerPage)}
                {this.pagination(this.props.product, this.props.prodPerPage)}
            </div>
        );
    }
}
export default Productlist;