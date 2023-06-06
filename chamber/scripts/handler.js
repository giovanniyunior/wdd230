
window.onload = function () {
  const date = new Date(document.lastModified);
  document.getElementById("lastModifiedDate").innerHTML = date.toLocaleString();
  console.log('IN JS');

  document.querySelector("span.copyright").innerHTML = "&copy; " + date.getFullYear();

  function navFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
}
