function storage_value()  {
    var nom = document.getElementById('firstname').value;
    var prenom = document.getElementById('lastname').value;
    var id_medecin = document.getElementById('id_medecin').value;
    var email = document.getElementById('email').value;
    var tel = document.getElementById('tel').value;
    var ordo = document.getElementById('ordo').value;
    
    document.location.href="ordonnance_page.html?nom="+nom+"&prenom="+prenom+"&id_medecin="+id_medecin+"&email="+email+"&tel="+tel+"&ordo"+ordo; 
}
    