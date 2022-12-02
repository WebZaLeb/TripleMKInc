document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        const serviceID = "service_v00s6s3";
        const templateID = "template_qpxu0zk";

        var params = {
            nameInput: document.getElementById("nameInput").value,
            lastnameInput: document.getElementById("lastnameInput").value,
            emailInput: document.getElementById("emailInput").value,
            phoneInput: document.getElementById("phoneInput").value,
            message: document.getElementById("message").value,
        };

        emailjs.send(serviceID, templateID, params).then(
            (response) => {
                document.getElementById("nameInput").value = ""
                document.getElementById("lastnameInput").value = ""
                document.getElementById("emailInput").value = ""
                document.getElementById("phoneInput").value = "" 
                document.getElementById("message").value = ""
                console.log("SUCCESS!", response.status, response.text);
            },
            (error) => {
                console.log("FAILED...", error);
                alert("FAILED...", error);
            }
        );
    });