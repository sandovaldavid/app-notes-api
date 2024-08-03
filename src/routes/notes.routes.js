const { Router } = require("express");
const pool = require("../db");
const router = Router();
const {
	getAllNotes,
	getNote,
	createNote,
	deleteNote,
	updateNote,
} = require("../controllers/notes.controller");

router.get("/notes", getAllNotes);

router.get("/notes/:id", getNote);

router.post("/notes", createNote);

router.delete("/notes/:id", deleteNote);

router.put("/notes/:id", updateNote);

module.exports = router;
