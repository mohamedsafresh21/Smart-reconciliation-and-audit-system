useEffect(() => {
  axios.get("/api/dashboard").then(res => setData(res.data));
}, []);

