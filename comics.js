var API_BASE_URL = "http://gateway.marvel.com/v1/public/comics";
var publickey = "0370a4eecd66e075fc167701bb140870";
var hash = "01f04630400a77817d480d7df86660b5";

/* Obtener lista de Comics*/
$("#button_get_marvel").click(function(e) {
	e.preventDefault();
	getMarvelComics();
});

function getMarvelComics() {
/*http://gateway.marvel.com:80/v1/public/comics?format=comic&apikey=0370a4eecd66e075fc167701bb140870&hash=01f04630400a77817d480d7df86660b5&ts=1*/
	var url = API_BASE_URL + '?format=comic&apikey=0370a4eecd66e075fc167701bb140870&hash=01f04630400a77817d480d7df86660b5&ts=1';
	$("#repos_result").text('');
	
	$.ajax({
		url : url,
		type : 'GET',
		crossDomain : true,
		dataType : 'json',
	}).done(function(data, status, jqxhr) {
				var comics = data;
				var objeto = comics.data.results
				
				
				$.each(objeto, function(i, v) {
					var comic = v;
					$('<h4> Copyright: ' + comics.copyright + '</h4>').appendTo($('#marvel_result'));
					$('<h4> HTML: ' + comics.attributionHTML + '</h4>').appendTo($('#marvel_result'));
					$('<h4> titulo: ' + comic.title+ '</h4>').appendTo($('#marvel_result'));
					$('<h4> id: ' + comic.id + '</h4>').appendTo($('#marvel_result'));
					
									
					var objeto2 =  comic.series
					
				});
				

	}).done(function(data, status, jqxhr) {
		$('<div class="alert alert-success"> <strong>Ok!</strong> It works! </div>').appendTo($('#marvel_alert2'));				
  	}).fail(function() {
		$("#comics_result").text("No hay comics.");
		$('<div class="alert alert-danger"> <strong>Oh!</strong> It does not works! </div>').appendTo($("#comics_alert2"));
	});

}
