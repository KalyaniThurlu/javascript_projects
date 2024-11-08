function genarator3(){
  
  
    let qrText = document.getElementById("qrtext").value;
    let qrImage = document.getElementById("qrImage")
    if(qrText!==""){
         let qrurl="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText;
         qrImage.src=qrurl

    }else{
        alert("enter text")
    }
}


