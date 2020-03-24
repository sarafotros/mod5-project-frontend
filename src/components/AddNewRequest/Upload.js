import React, { Component } from 'react';
import DropZone from '../DropZone';
import { Typography, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/components/AddNewRequest/Upload'


class Upload extends Component {
  state = {
    description: '',
  };

 

  render() {
    const {imageName , description , changeImage , changePhotoDescription , classes} = this.props
    return (
			<div>
				<Typography className={classes.uploadTextTitle} variant="h2">
					Upload a Photo
				</Typography>
				<DropZone onChange={changeImage} />

				<Typography variant="caption">{imageName}</Typography>
        <br/>
				<TextField
					className={classes.uploadTextField}
					variant="outlined"
					name="description"
					label="Description"
					multiline
					rows="4"
					placeholder="More description about your request"
					value={description}
					onChange={changePhotoDescription}
				/>
			</div>
		);
  }
}

export default withStyles(styles)(Upload);
