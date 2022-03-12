import React, { useContext, useState, useEffect } from 'react'
import SupplierContext from '../../../context/SupplierContext'

const SupplierDetail = (props) => {
	const { singleSupplier } = props;
	const { editSupplier } = useContext(SupplierContext);
	const [credentials, setCredentials] = useState({ title: singleSupplier.title, name: singleSupplier.name, phone: singleSupplier.phone })
	useEffect(() => {
		setCredentials({ title: singleSupplier.title, name: singleSupplier.name, phone: singleSupplier.phone })
	}, [singleSupplier]);
	const onChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { title, name, phone } = credentials;
		await editSupplier(singleSupplier._id, title, name, phone);
	}
	return (
		<form onSubmit={handleSubmit}>
			<div className="form-row align-items-center">
				<div className="col-sm-3 my-1">
					<label className="sr-only" htmlFor="inlineFormInputName">Title</label>
					<select className="form-control" id="inlineFormInputName"
						name="title" placeholder="Title" value={credentials.title} onChange={onChange} >

						<option value="Mr">Mr</option>
						<option value="Mrs">Mrs</option>
					</select>
				</div>
				<div className="col-sm-3 my-1">
					<label className="sr-only" htmlFor="inlineFormInputName">Name</label>
					<input type="text" className="form-control" id="inlineFormInputName" name="name" placeholder="Name" value={credentials.name} onChange={onChange} required />
				</div>
				<div className="col-sm-3 my-1">
					<label className="sr-only" htmlFor="inlineFormInputName">Phone</label>
					<input type="tel" className="form-control" id="inlineFormInputName" name="phone" placeholder="Phone" value={credentials.phone} onChange={onChange} required />
				</div>

				<div className="col-auto my-1">
					<button type="submit" className="btn btn-primary">Update</button>
				</div>
			</div>
		</form>
	)
}
export default SupplierDetail;
