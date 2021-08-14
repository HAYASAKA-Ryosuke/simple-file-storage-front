import React, {useCallback} from 'react';
import { useDropzone, DropzoneOptions } from "react-dropzone";


export const Dropzone = () => {
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();
      reader.onload = () => {
        const binaryStr = reader.result;
	console.log(binaryStr);
      }
      const formData = new FormData();
      formData.append('file', file);
      const options = {
        method: 'POST',
        body: formData,
  //      headers: {
  //        'Content-Type': 'multipart/form-data'
  //}
      };
      fetch('http://127.0.0.1:9090/api/files/', options)
      reader.readAsArrayBuffer(file)
    })
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop});

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ? <p>Drop the file here</p> : <p>Drag n drop some file here</p>
      }
    </div>
  )
}
