import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
import khataContext from "../../context/khataContext"
import Navbar from './Navbar';

const Navbar2 = () => {
	return (
		<nav className="navbar navbar-expand-lg  navbar-dark bg-primary" style={{ color: "#ffffff" }
		}>
			<div className="container-fluid" >
				<div className="collapse navbar-collapse" id="navbarSupportedContent" >
					<ul className="navbar-nav me-auto mb-2 mb-lg-0" >
						<li className="nav-item" >
							Add New Supplier
						</li >

					</ul >
				</div >
			</div >
		</nav >
	)
}

const AddSupplier = () => {
	let history = useHistory();
	const context = useContext(khataContext);
	const { addSupplier } = context;
	const [supplier, setSupplier] = useState({ title: "Mr", name: "", payment: 0,purchase:0 });

	const onChange = (e) => {
		setSupplier({ ...supplier, [e.target.name]: e.target.value })
	}

	const handleClick = (e) => {
		e.preventDefault();
		addSupplier(supplier.title, supplier.name, supplier.payment,supplier.purchase);
		setSupplier({ title: "Mr", name: "", payment: 0 ,purchase:0});
		history.push('/khatabook/suppliers');
	}

	return (
		<>
			<Navbar a="/khatabook/addcustomer" b="/khatabook/addsupplier" />
			<br />
			<Navbar2 />
			<br />
			<form onSubmit={handleClick}>
				<div className="row">
					<div className="col-sm col-lg-4">
						<label htmlFor="exampleFormControlSelect1">Enter Title</label>
						<select className="form-select" id="exampleFormControlSelect1" name="title" value={supplier.title} onChange={onChange} >
							<option value="Mr">Mr</option>
							<option value="Mrs">Mrs</option>
						</select>
					</div>
					<div className="col-sm col-lg-4">
						<label htmlFor="name">Name</label>
						<input required="required" type="text" className="form-control" id="name" name="name"
							value={supplier.name} onChange={onChange} />
					</div>
					<div className="col-sm col-lg-4">
						<label htmlFor="amount">Your Payment</label>
						<input
							required="required"
							type="number"
							className="form-control"
							id="amount"
							value={supplier.payment}
							onChange={onChange}
							name="payment"
						/>
					</div>
					<div className="col-sm col-lg-4">
						<label htmlFor="amount">Your Purchase</label>
						<input
							required="required"
							type="number"
							className="form-control"
							id="amount"
							value={supplier.purchase}
							onChange={onChange}
							name="purchase"
						/>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-sm">
						<button type="submit" className="btn btn-primary">
							Add New Supplier
						</button>
					</div>
				</div>
			</form>
		</>
	)
}

export default AddSupplier;





