VANTA.NET({
    el: "#vantaCanvas",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xd03fff,
    backgroundColor: 0x121215
  })



let typed = new Typed("#auto-typing", {
  strings: [
 "Hello, My name is..."
 ],
 typeSpeed: 100,
 backSpeed: 60,
 loop: true,
});

function sendMail() {
    var params = {
        user_name: document.getElementById("user_name").value,
        user_email: document.getElementById("user_email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

const serviceID = "Contact_Service";
const templateID = "Contact_form";

emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
        document.getElementById("user_name").value = "",
        document.getElementById("user_email").value = "",
        document.getElementById("subject").value = "",
        document.getElementById("message").value = "";
        console.log(res);
        alert("Thanks for your message, I will be in touch shortly");
    })
    .catch((err) => console.log(err));
};