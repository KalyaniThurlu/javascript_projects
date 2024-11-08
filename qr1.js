
function qrGenerator1() {
    let qrText = document.getElementById("qrtext").value; // Get the value from the input
    let qrImage = document.getElementById("qrImage"); // Get the image element

    // Check if the user has entered text
    if (qrText !== "") {
        // Construct the QR code API URL using the entered text
        let qrApiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText;
        qrImage.src = qrApiUrl; // Set the src attribute of the image to the QR code URL
    } else {
        // Alert the user if no text was entered
        alert("Please enter some text!");
    }
}