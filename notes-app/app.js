const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//console.log(process.argv);

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Add Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Add Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNotes(argv.title,argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    type: 'string',
    builder: {
        title:{
            describe:'Remove a title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNotes(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'List all note',
    type: 'string',
    handler: function(){
        notes.listNotes();
    }
});

yargs.command({
    command: 'read',
    describe: 'Read the notes',
    builder: {
        title:{
            describe: 'Search a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.readNotes(argv.title);
    }
});

console.log(yargs.argv);

// const command = process.argv[2];
// if( command == 'add'){
//     console.log('Adding a new note');
// }
// else if( command == 'remove'){
//     console.log('Removing note');
// }





//const validator = require('validator');
//console.log(notes());
//console.log(chalk.bgWhite.red('Haha!!!'));
//console.log(process.argv[2]);
//console.log(validator.isEmail('kushagra@example.com'));
//console.log(validator.isURL('https://abcd.com/a?re'));
// //const name = require('./util.js');
// const add = require('./util');
// console.log(add(1,2));
// //console.log(name);
//console.log("This text is from app.js");
//const fs = require('fs');
//fs.writeFileSync('notes.txt','This is text from Node JS');
//fs.appendFileSync('notes.txt','\nThis is a new line from append function');