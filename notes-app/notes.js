const fs = require('fs');
const forEach = require('foreach');
const chalk = require('chalk');

const getN = function (){
    return 'Your notes are here...';
}

const addNotes = function (title, body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);
    
    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log("notes added");
    }else{
        console.log("title taken");
    }

    
    console.log(notes);
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('abc.json',dataJson);
}

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('abc.json'); 
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
        //console.log('inside');
    }
    catch(e){
        return [];
        //console.log(e);
    }
}

const removeNotes = (title) => {
    const loadExistingNotes = loadNotes();
    const duplicateRemoveNotes = loadExistingNotes.filter((tit)=>{return tit.title === title;});
    const duplicateRemoveNote = loadExistingNotes.find((tit) => tit.title === title);
    if(!duplicateRemoveNote){
        console.log(chalk.bgRed("Nothing to remove"));
    }
    else{
        loadExistingNotes.forEach(function(element,i) {
            if(loadExistingNotes[i] === duplicateRemoveNotes[0]){
                loadExistingNotes.splice(loadExistingNotes.indexOf(duplicateRemoveNotes[0]),1);
                console.log(chalk.bgGreen('Note Removed'));
            }
        });
        
        saveNotes(loadExistingNotes);
    }
}    

const listNotes = () => {
    const loadN = loadNotes();
    console.log(chalk.bgGreen.bold('Your Notes:'))
    console.log(loadN)
    loadN.forEach((note) => {
        console.log(note.title)
    })
    
}

const readNotes = (title) => {
    const loadN = loadNotes()
    const searchNotes = loadN.find((search) => {
        return title === search.title
    })

     if(searchNotes){
        console.log("Title is: "+chalk.bgGreen.bold(searchNotes.title)+" and body is: "+searchNotes.body)
     }
     else{
         console.log(chalk.red.inverse('No note found!'))
     }
}

module.exports = {
    getN: getN,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
};