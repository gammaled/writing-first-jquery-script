
$(document).ready(function() {
    $('button').click(function() {
        $.get('https://ci-swapi.herokuapp.com/api/', function(data, status) {
            document.getElementById('demo').innerHTML = data;
            alert(status);
            console.log(data);
        });
    });
});

