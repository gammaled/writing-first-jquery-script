
$(document).ready(function() {
    $('button').click(function() {
        $('#demo').load('https://ci-swapi.herokuapp.com/api/', function() {
            console.log('Data: ' + data + '/nStatus: ' + status);
        });
    });
});