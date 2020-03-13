import React, { Component } from 'react';
import API from '../../API';
const URLUpload = 'http://localhost:3001/upload-photos';

class Upload extends Component {
	state = {
		description: ''
	};

	// const getPhotoUrl = url => {
	//     fetch(url, {
	//         headers: {
	//         Authorization: localStorage.token
	//         }
	// }).then(resp => resp.json())

	postPhoto = e => {
		e.preventDefault();
		const formData = new FormData(e.target);
		formData.append('description', this.state.description);
		formData.append('user_id', 1);
		formData.append('service_id', 1);

		return fetch(URLUpload, {
			method: 'POST',
			headers: {},
			body: formData
		})
			.then(resp => resp.json())
			.then(data => console.log(data.image_url));
	};

	handlePhotoChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit;

	render() {
		return (
			<div>
				<h2> Upload a Photo</h2>
				<form onSubmit={this.postPhoto}>
					{/* <label>Title: </label>
                    <input name="title" value={this.state.title} onChange={this.updateFormData} />
                    <label>Description: </label> */}
					<label>Choose a file</label>
					<br />
					<input
						type="file"
						name="photo"
						onChange={e => this.handlePhotoChange(e)}
					/>
					<br />
					<label>More description about your case</label>
					<br />
					<textarea name="description" />
					<br />
					<button type="submit" value="Sign In" className="button">
						Upload
					</button>
				</form>
			</div>
		);
	}
}

export default Upload;
