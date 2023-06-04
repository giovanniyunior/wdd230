
window.onload = function(){
    const date = new Date(document.lastModified);
    document.getElementById("lastModifiedDate").innerHTML = date.toLocaleString();
    console.log('IN JS');

    document.querySelector("span.copyright").innerHTML = "&copy; "+ date.getFullYear();

}
const images = document.querySelectorAll("img[data-src]");
function preloadImage(img){
    const src = img.getAttribute("data-src");
    if(!src){
        return;
    }
    img.src = src;
    img.style.opacity = 1;
    img.style.transition = "opacity 0.5s";


}
const imgOptions = {
    threshold:0,
    rootMargint: "opx 0px 300px 0px"
};
const imgObserver = new IntersectionObserver((entries,imgObserver) => {
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        } else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });

},imgOptions);

images.forEach(image => {
    image.style.opacity = 0;
    imgObserver.observe(image);
});

// Check if local storage is supported
if (typeof Storage !== "undefined") {
    const lastVisitTimestamp = localStorage.getItem("lastVisitTimestamp");
  
    // Get the current date as UTC timestamp
    const currentTimestamp = Math.floor(Date.now() / 1000);
  
    // Calculate the difference in seconds between the current visit and the last visit
    const timeDifference = currentTimestamp - (lastVisitTimestamp || currentTimestamp);
  
    // Calculate the number of days between the visits
    const daysDifference = Math.round(timeDifference / (60 * 60 * 24));
  
    // Save the current visit timestamp in local storage
    localStorage.setItem("lastVisitTimestamp", currentTimestamp);
  
    // Display the number of days since the last visit
    const daysSinceLastVisitElement = document.getElementById("daysSinceLastVisit");
    if (daysSinceLastVisitElement) {
      daysSinceLastVisitElement.textContent = daysDifference;
    }
  } else {
    console.error("Local storage is not supported.");
  }