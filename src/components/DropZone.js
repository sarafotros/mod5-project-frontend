import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import useStyles from '../styles/components/DropZone';


function MyDropzone(props) {
    const { value, onChange, showImageError } = props;
	const onDrop = useCallback(acceptedFiles => {
		onChange(acceptedFiles)
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
	const classes = useStyles();
    
	return (
		<div className={classes.DropzoneBox} {...getRootProps()}>
			<input {...getInputProps()} />
			{isDragActive ? (
				<p>Drop the file here ...</p>
			) : (
				  <p style={{ color : showImageError ? 'red' : 'black'}}>Drag & drop a files here, or click to select file</p>
			)}
		</div>
	);
}
export default MyDropzone;