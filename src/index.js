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

app.listen(3000);
console.log("Server started on port 3000");