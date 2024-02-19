// window.onscroll = function() {setupSticky()};
// Get the header


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
export function setupSticky() {
   const header = document.getElementById("main-menu-container");

   // Get the offset position of the navbar
   const sticky = header.offsetTop;
   if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
   } else {
      header.classList.remove("sticky");
   }
   console.log("RAN SETUP STICKY");
} 
