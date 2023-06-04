
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
if (typeof(Storage) !== "undefined") {
    // Retrieve the last visit timestamp from local storage
    var lastVisitTimestamp = localStorage.getItem("lastVisitTimestamp");

    // Get the current date
    var currentDate = new Date();

    // Convert the current date to a UTC timestamp
    var currentTimestamp = Math.floor(currentDate.getTime() / 1000);

    // Calculate the difference in seconds between the current visit and the last visit
    var timeDifference = currentTimestamp - (lastVisitTimestamp || currentTimestamp);

    // Calculate the number of days between the visits
    var daysDifference = Math.round(timeDifference / (60 * 60 * 24));

    // Save the current visit timestamp in local storage
    localStorage.setItem("lastVisitTimestamp", currentTimestamp);

    // Display the number of days since the last visit
    document.getElementById("daysSinceLastVisit").textContent = daysDifference;
  } else {
    // Local storage is not supported
    document.getElementById("daysSinceLastVisit").textContent = "Local storage is not supported.";
  }