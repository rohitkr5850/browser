const fileIcons = { 
    txt: 'https://via.placeholder.com/200?text=TXT',
    pdf: 'https://via.placeholder.com/200?text=PDF',
   mp3 : 'https://via.placeholder.com/200?text=MP3',
   exe: 'https://via.placeholder.com/200?text=EXE',
   rar: 'https://via.placeholder.com/200?text=RAR',
   docx: 'https://via.placeholder.com/200?text=DOCX',
   jpg: 'https://via.placeholder.com/200?text=JPG',
   png: 'https://via.placeholder.com/200?text=PNG',
   gif: 'https://via.placeholder.com/200?text=GIF',
   zip: 'https://via.placeholder.com/200?text=ZIP',
};
var files = [
    {id: 1, name: 'document1.txt'},
    {id: 2, name: 'presentation1.pdf'},
    {id: 3, name: 'song1.mp3'},
    {id: 4, name: 'installer1.exe'},
    {id: 5, name: 'archive1.rar'},
    {id: 6, name: 'report1.docx'},
    {id: 7, name: 'image1.jpg'},
    {id: 8, name: 'graphic1.png'},
    {id: 9, name: 'animation1.gif'},
    {id: 10, name: 'compressed1.zip'},
];

var bin = [];
document.addEventListener('DOMcontentLoaded',() => {
  displayFiles();
});

function displayFiles(){
    const fileList = document.getElementById('fileList');
    if(!fileList) return;
    fileList.innerHTML = '';
    files.forEach(file => {
        const ext = file.name.split('.').pop();
        const icon = fileIcons[ext] || 'icons/file.png';
        const fileDiv = document.createElement('div');
        fileDiv.className = 'file';
        fileDiv.innerHTML = `<img src = "${icon}" alt="${ext}"> 
        <p>${file.name.replace(`.${ext}`,'')}
        </p>
              <button onclick="editFileName(${file.id})">Edit</button>
              <button onclick="moveToBin(${file.id})">Delete</button>`;

              fileList.appendChild(fileDiv);
    });
         
    function moveToBin(id){
const file = files.find(f => f.id === id);
if(file){
bin.push(file);
files = files.filter(f => f.id !== id);
displayFiles();
displayBin();
}
    }

function displayBin(){
const binContainer = document.getElementById('bin');
if(!binContainer) return;
binContainer.innerHTML = '';
bin.forEach(file => {
    const ext = file.name.split('.').pop();
    const icon = fileIcons[ext] || 'icons/file.png';

    const fileDiv = document.createElement('div');
        fileDiv.className = 'file';
        fileDiv.innerHTML = `<img src = "${icon}" alt="${ext}"> 
        <p>${file.name}</p>
              <buttononclick="restoreFile(${file.name})">Restore</button>
              <buttononclick="removeFromBin(${file.name})">Delete</button>`;

              binContainer.appendChild(fileDiv);
    });
}
function restoreFile(name){
    const file = bin.find(f => f.name === name);
    if(file){
   files.push(file);
   bin = bin.filter(f => f.name !== name);
   displayFiles();
   displayBin();
}
}
function searchFiles(){
    const query = 
    document.getElementById('searchInput').ariaValueMax.toLowerCase();
    const filteredFiles = files.filter(f => f.name.toLowerCase().includes(query));
    displayFiles(filteredFiles);
}
}





































