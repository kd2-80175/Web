function Clear(controlId)
{
   var refToControlId= document.getElementById(controlId);
   if(!(refToControlId.value==""))
    refToControlId.value="";
}

function ClearGender(controlId){

    var refToControlId= document.getElementsByName(controlId);
    for(var i=0;i<refToControlId.length;i++){
        if(refToControlId[i].checked){
            refToControlId[i].checked=false;
            console.log(refToControlId[i].checked);
        }
    }
}