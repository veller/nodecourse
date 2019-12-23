const yargs = require('yargs');
const notes = require('./notes');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    const currentNotes = notes.loadNotes();
    const newNotes = notes.addNote(argv.title, argv.body, currentNotes);
    notes.saveNotesToFile(newNotes);
  }
});

yargs.command({
  command: 'delete',
  describe: 'Delete a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {}
});

yargs.command({
  command: 'update',
  describe: 'update a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'New body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    const currentNotes = notes.loadNotes();
    const updatedNodes = notes.updateNote(argv.title, argv.body, currentNotes);
    notes.saveNotesToFile(updatedNodes);
  }
});

yargs.parse();
