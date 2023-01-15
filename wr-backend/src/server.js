const app = require('./app');
require('./db'); // Connect to db

const PORT = process.env.PORT === undefined ? 3001 : process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
