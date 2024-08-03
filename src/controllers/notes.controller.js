const pool = require("../db");

const getAllNotes = async (req, res, next) => {
	try {
		const allNotes = await pool.query("SELECT * FROM notes");
		res.json(allNotes.rows);
	} catch (error) {
		next(error);
	}
};

const getNote = async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await pool.query("SELECT * FROM notes WHERE id = $1", [
			id,
		]);
		if (result.rows.length === 0)
			return res.status(404).json({ message: "Note not found" });
		res.json(result.rows[0]);
	} catch (error) {
		next(error);
	}
};

const createNote = async (req, res, next) => {
	const { title, content } = req.body;
	try {
		const result = await pool.query(
			"INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *",
			[title, content]
		);
		res.json(result.rows[0]);
	} catch (error) {
		next(error);
	}
};

const deleteNote = async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await pool.query("DELETE FROM notes WHERE id = $1", [
			id,
		]);
		if (result.rowCount === 0)
			return res.status(404).json({ message: "Note not found" });
		return res.sendStatus(204);
	} catch (error) {
		next(error);
	}
};
const updateNote = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { title, content } = req.body;
		const result = await pool.query(
			"UPDATE notes SET title = $1, content = $2 WHERE id = $3 RETURNING *",
			[title, content, id]
		);
		if (result.rows.length === 0)
			return res.status(404).json({ message: "Note not found" });
		return res.json(result.rows[0]);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getAllNotes,
	getNote,
	createNote,
	deleteNote,
	updateNote,
};
