function loadData() {
    $.get('https://ci-swapi.herokuapp.com/api/', function(data, status) {
        console.log("Data: " + data + '/nStatus: ' + status);
    });
};