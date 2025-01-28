const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const notesRoutes = require("./routes/notes.routes");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(notesRoutes);

app.use((err, req, res, next) => {
	return res.json({ message: err.message });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Server running on port ${PORT}`);