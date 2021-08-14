import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import { DataGrid } from '@material-ui/data-grid';
import { fetchFiles } from '../libs/file_api';
import { Dropzone } from '../components/dropzone';

export default function Index({files}) {

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'title',
      headerName: 'title',
      width: 150,
      editable: true,
    },
    {
      field: 'createdAt',
      headerName: 'createdAt',
      type: 'datetime',
      width: 150,
      editable: true,
    },
    {
      field: 'updatedAt',
      headerName: 'updatedAt',
      type: 'datetime',
      width: 110,
      editable: true,
    },
    {
    field: 'downloadUrl',
    headerName: 'download',
    sortable: false,
    width: 90,
    disableClickEventBubbling: true,
    renderCell: (params: any) => <Button><a href={`http://127.0.0.1:9090/api/files/${params.id}/download/`} download>download</a></Button>
    },
  ];
  return (
    <Container>
      <div style={{ height: 400, width: '100%' }}>
        <Dropzone></Dropzone>
        <DataGrid
          rows={files}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </Container>
  );
}
export async function getStaticProps({params}) {
  let data = await fetchFiles();
  if (!!!data.files){
    data.files = [];
  }

  return {
    props: {
      files: data.files
    },
  }
}
