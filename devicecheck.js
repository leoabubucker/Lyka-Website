const userAgent = navigator.userAgent.toLowerCase();

var isMobile = /iPhone|Android/i.test(navigator.userAgent);
console.log(isMobile);

const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
console.log(isTablet)


var subdetails = document.getElementsByClassName('subdetail');
var gridDetails = document.getElementsByClassName('gridDetail');

if (isMobile) {
    console.log("Mobile");
    document.getElementById('popup-content').style.width = "80%";
    document.getElementById('mobile-nav').style.display = "grid";

    
    for (let i = 0; i < subdetails.length; i++) {
        subdetails[i].dataset.mobile = "true";
      }
    for (let i = 0; i < gridDetails.length; i++) {
        gridDetails[i].dataset.mobile = "true";
      }
   }

else if (isTablet) {
    console.log("Tablet");
    document.getElementById('popup-content').style.width = "80%";
    document.getElementById('mobile-nav').style.display = "grid";
    document.getElementsByTagName('footer')[0].dataset.mobile = "true";
    
    for (let i = 0; i < subdetails.length; i++) {
        subdetails[i].dataset.mobile = "true";
      }
    for (let i = 0; i < gridDetails.length; i++) {
        gridDetails[i].dataset.mobile = "true";
      }
}
else{
    
    for (let i = 0; i < subdetails.length; i++) {
        subdetails[i].dataset.mobile = "false";
      }

    
    for (let i = 0; i < gridDetails.length; i++) {
        gridDetails[i].dataset.mobile = "false";
      }
}

// function toggleul() {
//     console.log(document.getElementById("mobile-ul").style.display);
//     if (document.getElementById("mobile-ul").style.display == "none") {
//         console.log("pne");
//         document.getElementById("mobile-ul").style.display = "grid";
//         console.log(document.getElementById("mobile-ul").style.display);
//     }
//     else if (document.getElementById("mobile-ul").style.display == "grid") {
//         console.log("tw");
//         document.getElementById("mobile-ul").style.display = "none";
//         console.log(document.getElementById("mobile-ul").style.display);
//     }

// };