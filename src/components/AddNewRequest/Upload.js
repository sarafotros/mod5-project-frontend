import React, { Component } from 'react';
import API from '../../API';
const URLUpload = 'http://localhost:3001/upload-photos';

class Upload extends Component {
  state = {
    description: '',
  };

  // const getPhotoUrl = url => {
  //     fetch(url, {
  //         headers: {
  //         Authorization: localStorage.token
  //         }
  // }).then(resp => resp.json())

  // postPhoto = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   formData.append('description', this.state.description);
  //   formData.append('user_id', localStorage.user_id);
  //   formData.append('service_id', 2);

  //   return fetch(URLUpload, {
  //     method: 'POST',
  //     headers: {},
  //     body: formData,
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => console.log(data.image_url));
  // };


  handleSubmit;

  render() {
    const {imageName , description , changeImage , changePhotoDescription } = this.props
    return (
			<div>
				<h2> Upload a Photo</h2>

				<label>Choose a file</label>
				<br />
				<input
					type="file"
					name="photo"
					value={imageName}
					onChange={changeImage}
				/>
				<br />
				<label>More description about your case</label>
				<br />
				<textarea
					name="description"
					value={description}
					onChange={changePhotoDescription}
				/>
				<br />
				{/* <img src={this.data.image_url} alt="oh no" /> */}
			</div>
		);
  }
}

export default Upload;
