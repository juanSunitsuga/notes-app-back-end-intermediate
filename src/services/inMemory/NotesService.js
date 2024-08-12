class NotesService {
    constructor() {
        this._notes = [];
    }

    addNote({title, body, tags}) {

    }

    getNotes() {
        return this._notes;
    }


    getNoteById(id) {
        const note = this._notes.filter((n) => n.id === id)[0];
        if (!note) {
            throw new Error('Catatan tidak ditemukan');
        }
        return note;
    }

    editNoteById(id, {title, body, tags}) {
        const index = this._notes.findIndex((note) => note.id === id);

        if (index === -1) {
            throw new Error('Gagal memperbarui catatan. Id tidak ditemukan');
        }

        const updatedAt = new Date().toISOString();

        this._notes[index] = {
            ...this._notes[index],
            title,
            tags,
            body,
            updatedAt,
        };
    }

    deleteNoteById(id) {
        const index = this._notes.findIndex((note) => note.id === id);
        if (index === -1) {
            throw new Error('Catatan gagal dihapus. Id tidak ditemukan');
        }
        this._notes.splice(index, 1);
    }
}

module.exports = NotesService;
