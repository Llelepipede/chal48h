function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}


function getelementbyurl() {
    var name = $_GET('nom');
    var lastname = $_GET('prenom');
    var tele = $_GET('tel');
    var mail = $_GET('email');
    var rpps = $_GET('id-medecin');
    var ordonnance = $_GET('ordo');  

    document.getElementById("nom").innerHTML = name;
    document.getElementById("prenom").innerHTML = lastname;
    document.getElementById("rpps").innerHTML = rpps;
    document.getElementById("email").innerHTML = mail;
    document.getElementById("tel").innerHTML = tele;
    document.getElementById("ordo").innerHTML = ordonnance;
}


