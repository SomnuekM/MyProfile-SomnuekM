window.addEventListener('load', function() {
    // Selecting all required elements
    const wrapper = document.querySelector(".wrapper-toast"),
        toast = wrapper.querySelector(".toast-div"),
        title = toast.querySelector(".span-toast"),
        subTitle = toast.querySelector(".p-toast"),
        wifiIcon = toast.querySelector(".icon-toast"),
        closeIcon = toast.querySelector(".close-icon-toast");

    function ajax() {
        let xhr = new XMLHttpRequest(); //creating new XML object
        xhr.open("GET", "https://raw.githubusercontent.com/SomnuekM/MyProfile-SomnuekM/main/index.html", true); //sending get request on this URL
        xhr.onload = () => {
            //once ajax loaded
            //if ajax status is equal to 200 or less than 300 that mean user is getting data from that provided url
            //or his/her response status is 200 that means he/she is online
            if (xhr.status == 200 && xhr.status < 300) {
                toast.classList.remove("offline");
                title.innerText = "You're online now";
                subTitle.innerText = "Hurray! Internet is connected.";
                wifiIcon.innerHTML = '<i class="material-icons">wifi</i>';
                closeIcon.onclick = () => { //hide toast notification on close icon click
                    wrapper.classList.add("hide");
                    // console.log("hide")
                }
                setTimeout(() => { //hide the toast notification automatically after 5 seconds
                    wrapper.classList.add("hide");
                }, 5000);
                // console.log("Online")

            } else {
                offline(); //calling offline function if ajax status is not equal to 200 or not less that 300
            }
        }
        xhr.onerror = () => {
            offline(); //calling offline function if the passed url is not correct or returning 404 or other error
        }
        xhr.send(); //sending get request to the passed url

    }

    function offline() { //function for offline
        wrapper.classList.remove("hide");
        toast.classList.add("offline");
        title.innerText = "You're offline now";
        subTitle.innerText = "Opps! Internet is disconnected.";
        wifiIcon.innerHTML = '<span class="material-icons">wifi_off</span>';
        // console.log("OFFline")
    }

    setInterval(() => { //this setInterval function call ajax frequently after 100ms
        ajax();
    }, 1000);
});