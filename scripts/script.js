
    async function getData() {
        const response = await fetch('https://ci-swapi.herokuapp.com/api/');
        const result = await response.json();
        document.getElementById('demo').innerHTML = JSON.stringify(result);
    }
    
