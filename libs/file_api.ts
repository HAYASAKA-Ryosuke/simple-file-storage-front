

export const fetchFiles = async () => {
  const res = await fetch('http://127.0.0.1:9090/api/files/');
  const files = await res.json()
  return files
}

export const detailFiles = async (fileId: Number) => {
  const res = await fetch(`http://127.0.0.1:9090/api/files/${fileId}/`);
  const files = await res.json()
  return files
}