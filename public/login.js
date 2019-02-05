function check(form){

  if (form.userN.value =="dew" && form.pswrd.value == "123"){
 
    window.open("myaccount.html");
  }
  else{
    alert("The username and password combination is incorrect. Please try again.")
  }
}
