import React, {Component} from 'react';
import './App.css';
import Productlist from "./components/ProductList";
import Addproduct from "./components/Addproduct";
import Editproduct from "./components/Editproduct";
import { bindActionCreators } from "redux";
import * as productActions from "./actionCreators/product";
import { Route, Switch} from "react-router-dom";
import {withRouter} from 'react-router'
import { connect } from "react-redux";;
class App extends Component {
    componentWillMount() {
      this.props.actions.getproducts();
    }
    Additems = (e) => {
      let addItem = {};
      let name = e.target.name;
      let val = e.target.value;
      addItem[name] = val;
      this.props.actions.addproduct(addItem);
    }
    Additemsclick = (addItem) => {
      this.props.actions.addproductsuccess(addItem);
      window.location.href = "/"
   }
    editItembutton = (e) => {
  this.props.actions.editproduct(e);
   }
   Edititems = (e) => {
  let editItem = {};
  let name = e.target.name;
  let val = e.target.value;
  editItem[name] = val;
  this.props.actions.newprod(editItem);
}
Edititemsclick = (editItem) => {
  this.props.actions.editproductsuccess(editItem);
  window.location.href = "/"
}
confirmDelete = (e) => {
  if (window.confirm("Do you really want to delete?")) {
    this.props.actions.deleteproduct(e);
    window.location.href = "/"
  }
  else {
    window.location.href = "/"
  }
}
pageDisplayClick = (e) => {
  console.log(e.target.id)
  const curpage = Number(e.target.id);
  this.props.actions.pagination(curpage);
}
    render(){
        return (
            <div>
                <Switch>
                    <Route exact
                     path= "/"
                      render = {props => 
                            <Productlist {...props}
                            product = {this.props.product}
                            AddItem = {this.handleAddItem}
                            editItem = {this.editItembutton}
                            confirmDelete = {this.confirmDelete}
                            pageDisplayClick ={ this.pageDisplayClick}
                            curpage = {this.props.curpage}
                            prodPerPage = {this.props.prodPerPage}
                            />
                    }
       />
       <Route  path = "/Add"
       render = {props => (
         <Addproduct
         {...props}
         addItem =  {this.props.addItem}
         handleAddItems = {this.Additems}
         Additemsclick = {this.Additemsclick}
         />
       )}
       />
       <Route  path = "/Edit"
       render = {props => (
         <Editproduct
         {...props}
         editItem = {this.props.editItem}
         Edititems = {this.Edititems}
         Edititemsclick = {this.Edititemsclick}

         />)}
         />
       )}
       </Switch>
       </div>
       )
}
}
function mapStateToProps(state)
{
    return{
        product:state.product,
        addItem: state.addItem,
        editItem: state.editItem,
        curpage: state.curpage,
        prodPerPage: state.prodPerPage
    }
}
function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(productActions, dispatch)
    }
  }
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));