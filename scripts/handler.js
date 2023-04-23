
window.onload = function(){
    const date = new Date(document.lastModified);
    document.getElementById("lastModifiedDate").innerHTML = date.toLocaleString();
    console.log('IN JS');
}
