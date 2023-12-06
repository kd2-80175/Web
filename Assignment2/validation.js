function ValidateForEmpty(inputId,errorId,errorMsg)
{
    var value="";
    var refToControl=document.getElementById(inputId);
    var refToErrorControl=document.getElementById(errorId);
    console.log(refToControl.value);
    if(refToControl.value =="")
    {
        refToErrorControl.innerText=errorMsg;
        isEmpty=true;
        return value;
    }
    else{
       refToErrorControl.innerText="";
        console.log(refToControl.value);
        return refToControl.value;
    }
}

function ValidateEmptyForGender(inputName, errorId, errorMsg)
 {
    var refToControl = document.getElementsByName(inputName);
    var refToErrorControl = document.getElementById(errorId);

    var genderSelected = false;

    for (var i = 0; i < refToControl.length; i++) {
        if (refToControl[i].checked)
         {
            genderSelected = true;
            break;
        }
    }
    if (!genderSelected) 
    {
        refToErrorControl.innerText = errorMsg;
    } else
     {
        refToErrorControl.innerText = "";
    }
}
