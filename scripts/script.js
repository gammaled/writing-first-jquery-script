function loadData() {
    $.get('https://ci-swapi.herokuapp.com/api/', function(data, status) {
        document.getElementById('demo').innerHTML = data;
        console.log("Data: " + data + '/nStatus: ' + status);
    });
};