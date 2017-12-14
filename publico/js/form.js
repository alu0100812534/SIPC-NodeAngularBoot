
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validate(){
    // Aquí las comprobaciones
    var fname = document.forms["formCheck"]["name"].value;
    var femail = document.forms["formCheck"]["email"].value;
    var fmore = document.forms["formCheck"]["MoreF"].value;
    var showtext = "";
    var cnt = 0;

    if (fname == null || fname =="")
    {
      showtext += "-Campo nombre vacío\n";
      cnt++;
    }
    if (femail == null || femail =="")
    {
      showtext += "-Campo email vacío\n";
      cnt++;
    }
    if (fmore == null || fmore =="")
    {
      showtext += "-Campo otras funcionalidades vacío\n";
      cnt++;
    }
    if(!validateEmail(femail)){
      showtext += "-Formato del email introducido incorrecto\n";
      cnt++;
    }
    if(cnt > 0){
      alert(showtext);
      return false;
    }

}
