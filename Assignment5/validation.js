
function ValidateForEmpty(inputId, errorId, errorMsg) {
    var divref = document.getElementsByTagName("div");
    // Loop through each div element
    for (var i = 0; i < divref.length; i++) {
      divref[i].style.display = "block";
    }

    var value = "";
    var refToControl = document.getElementById(inputId);
    var refToErrorControl = document.getElementById(errorId);

    console.log(refToControl.value);
    if (refToControl.value == "") {
        refToErrorControl.innerText = errorMsg;
        isEmpty = true;
        
        //set data to local storage
        localStorage.setItem(inputId, document.getElementById(inputId).value);
        return value;
    }
    else {
        refToErrorControl.innerText = "";
        console.log(refToControl.value);
        return refToControl.value;
    }
}

function ValidateForPayment(inputName, errorid, erromsg) {
    
    var refToControl = document.getElementsByName(inputName);
    var refToErrorControl = document.getElementById(errorid);

    var selectPayment = false;
    var CheckBoxCount = 0;

    for (var i = 0; i < refToControl.length; i++) {
        if (refToControl[i].checked) 
        {
            selectPayment = true;
            CheckBoxCount++;
                }
    }
    if (!selectPayment) {
        refToErrorControl.innerText = erromsg;
    }
    else if (!(CheckBoxCount >= 2)) {
        refToErrorControl.innerText = "Select at least 2 Check boxes";   
    }
}

