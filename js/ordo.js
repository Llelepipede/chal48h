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
    var name = $_GET['nom'];
    var lastname = $_GET['prenom'];
    $_GET['tel'];
    $_GET['email'];
    $_GET['id-medecin'];
    $_GET['ordo'];
    
}