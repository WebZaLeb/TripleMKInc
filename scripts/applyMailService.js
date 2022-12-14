document
    .getElementById("applyForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        const serviceID = "service_nbsdas3";
        const templateID = "template_pxwsrc7";

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

                const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

                const wrapper = document.createElement('div')
                wrapper.innerHTML = [
                    `<div class="alert alert-success alert-dismissible" role="alert">`,
                    `   <div>Thank you for applying. We will get back to you as soon as possible.</div>`,
                    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                    '</div>'
                ].join('')

                alertPlaceholder.append(wrapper)
                
                document.getElementById('contact-btn').style.display = "none";
                console.log("SUCCESS!", response.status, response.text);
            },
            (error) => {
                console.log("FAILED...", error);
                alert("FAILED...", error);
            }
        );
    });