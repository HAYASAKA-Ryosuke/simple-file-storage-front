

export const fetchFiles = async (req: any) => {
  const res = await fetch(`http://${req.headers.host.split(":")[0]}:9090/api/files/`);
  const files = await res.json()
  return files
}