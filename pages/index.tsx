import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import { DataGrid } from '@material-ui/data-grid';
import { fetchFiles } from '../libs/file_api';

export default function Index() {

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
    renderCell: (params: any) => <Button><a href={`http://files/${params.id}/download/`} download>download</a></Button>
    },
  ];
  const rows = [
    { id: 1, title: 'Snow', createdAt: Date.now(), updatedAt: Date.now()},
    { id: 2, title: 'test', createdAt: Date.now(), updatedAt: Date.now()},
    { id: 3, title: 'test', createdAt: Date.now(), updatedAt: Date.now()},
    { id: 4, title: 'test', createdAt: Date.now(), updatedAt: Date.now()},
    { id: 5, title: 'test', createdAt: Date.now(), updatedAt: Date.now()},
    { id: 6, title: 'test', createdAt: Date.now(), updatedAt: Date.now()},
    { id: 7, title: 'test', createdAt: Date.now(), updatedAt: Date.now()}
  ];
  return (
    <Container>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </Container>
  );
}
export async function getStaticPaths() {
  const data = await fetchFiles();
  console.log(data);
  return {
    props: {
      files: {
        ...data
      },
    },
  }
}
