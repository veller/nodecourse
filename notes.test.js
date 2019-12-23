const notes = require('./notes');

it('adds a note', () => {
  const note = {
    title: 'fodasse',
    body: 'blablabla'
  };
  const currentNotes = [];
  const newNotes = notes.addNote(note.title, note.body, currentNotes);

  expect(newNotes).toEqual([note]);
});

it('adds two notes, once at time', () => {
  const firstNote = { title: 'nada', body: 'nada' };
  const secondNote = { title: 'bari', body: 'camba' };
  const currentNotes = [];

  let newNotes = notes.addNote(firstNote.title, firstNote.body, currentNotes);
  NewNotes = notes.addNote(secondNote.title, secondNote.body, newNotes);

  expect(newNotes).toEqual([firstNote, secondNote]);
});

it('removes a note', () => {
  const noteTitle = 'nada';
  const currentNotes = [
    { title: 'nada', body: 'nada' },
    { title: 'bari', body: 'camba' }
  ];

  const newNotes = notes.removeNote(noteTitle, currentNotes);

  expect(newNotes).toEqual([currentNotes[1]]);
});

it('edits a note body', () => {
  const noteTitle = 'nada';
  const newBody = 'fodasse';
  const currentNotes = [
    { title: 'nada', body: 'nada' },
    { title: 'bari', body: 'camba' }
  ];

  const newNotes = notes.updateNote(noteTitle, newBody, currentNotes);

  expect(newNotes).toEqual([
    { title: 'nada', body: 'fodasse' },
    { title: 'bari', body: 'camba' }
  ]);
});
