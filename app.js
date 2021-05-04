const port = process.env.PORT || 5000;
const app = require('./routes');

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
