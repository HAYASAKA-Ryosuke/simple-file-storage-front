import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { DataGrid } from '@material-ui/data-grid';
import { fetchFiles } from '../libs/file_api';
import { Dropzone } from '../components/dropzone';

export default function Index({files}) {

  const columns = [
    { field: 'id', headerName: 'ID', width: 40 },
    {
      field: 'title',
      headerName: 'title',
      width: 350,
      editable: true,
    },
    {
      field: 'createdat',
      headerName: 'createdAt',
      type: 'datetime',
      width: 250,
      editable: true,
    },
    {
      field: 'updatedat',
      headerName: 'updatedAt',
      type: 'datetime',
      width: 250,
      editable: true,
    },
    {
    field: 'downloadUrl',
    headerName: 'DL',
    sortable: false,
    width: 100,
    disableClickEventBubbling: true,
    renderCell: (params: any) => <Button><a href={`:9090/api/files/${params.id}/download/`} download>download</a></Button>
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
