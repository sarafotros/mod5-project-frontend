import React, { Component } from 'react';
import API from '../API';

class Upload extends Component {
    state = { 
        photo: null
    }

    postPhoto = (url) => {
        const formData = new FormData()
        formData.append('picture')

        return fetch(url, {
            method: 'POST',
            bode: formData
        }).then(resp => resp.json())
        .then(data => console.log(data))
    }

    handlePhotoChange = e => {

    }

    handleSubmit  


    render() { 
        return (
            <div>
                <h2> Upload a Photo</h2>
                <form onSubmit={this.handleSubmit}>
                    {/* <label>Title: </label>
                    <input name="title" value={this.state.title} onChange={this.updateFormData} />
                    <label>Description: </label> */}
                    <label>Choose a file</label><br />
                    <input type="file" name="picture" onChange={e => this.handlePhotChange(e)} /><br />
                    <button type="submit" value="Sign In" class="button">Upload</button>
                </form>

            </div>

          );
    }
}
 
export default Upload;