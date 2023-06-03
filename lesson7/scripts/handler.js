
window.onload = function(){
    const date = new Date(document.lastModified);
    document.getElementById("lastModifiedDate").innerHTML = date.toLocaleString();
    console.log('IN JS');

    document.querySelector("span.copyright").innerHTML = "&copy; "+ date.getFullYear();

}
const images = document.querySelectorAll("[data-src]");
function preloadImage(img){
    const src = img.getAttribute("data-src");
    if(!src){
        return;
    }
    img.src = src;
}
const imgOptions = {};
const imgObserver = new IntersectionObserver((entries,imgObserver) => {
    if(!FileSystemEntry.isIntersecting){
        return;
    } else{
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);
    }
},imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
})