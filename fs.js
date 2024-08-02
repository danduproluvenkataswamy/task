  
//// Learn about Node.js modules and npm. Explore core modules (fs, path, http). Create a simple file server.
const fs = require('fs'); // require the file system module

fs.readFile('notes.txt', 'utf8', (err, data) => {
    if (err) { 
        console.error('Error reading file:', err);
    return;  // exit the function if there is an error reading the file
    }
    console.log('File contents:', data);  
});


const path = require('path'); // require the path module
const filePath = '/task_1/http/notes.txt'; 
console.log(path.dirname(filePath));     //     console.log file              
console.log("working directory: "); 
