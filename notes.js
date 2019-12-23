const chalk = require('chalk');
const fs = require('fs');

const addNote = (title, body, currentNotes) => {
  const duplicatedNote = currentNotes.find(note => note.title === title);

  if (duplicatedNote) {
    console.log(chalk.red.inverse('Note already taken'));
  } else {
    currentNotes.push({
      title,
      body
    });
    console.log(chalk.green.inverse('Note taken'));
  }

  return currentNotes;
};

const removeNote = (title, currentNotes) => {
  const newNotes = currentNotes.filter(note => note.title !== title);
  return newNotes;
};

const updateNote = (noteTitle, newBody, currentNotes) => {
  return currentNotes.map(note => {
    if (note.title === noteTitle) {
      note.body = newBody;
    }
    return note;
  });
};

// const listNotes = (title) => {}

const saveNotesToFile = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  addNote,
  removeNote,
  saveNotesToFile,
  loadNotes,
  updateNote
};
