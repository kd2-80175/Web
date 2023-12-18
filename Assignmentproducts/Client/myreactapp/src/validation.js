function ValidateForEmpty(x,y,z){var a=document.getElementById(x);var b=document.getElementById(y);if (a.value==="")
{b.innerText=z;}else{b.innerText="";console.log(a.value);}}

export default ValidateForEmpty;