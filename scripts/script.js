
    async function getData(category) {
        const response = await fetch(`https://ci-swapi.herokuapp.com/api/${category}`);
        const result = await response.json();
        document.getElementById('demo').innerHTML = JSON.stringify(result);
        for (let item of result['results']) {
            console.log(item.name);
            return JSON.parse(item.name);
        };
    }; 
