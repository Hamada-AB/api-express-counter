const app = require("./server.js");
const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
