
    async function getData(category) {
        const response = await fetch(`https://ci-swapi.herokuapp.com/api/${category}/`);
        const result = await response.json();
        for (let item of result['results']) {
            console.log(item.name || item.title);
            document.getElementById('demo').innerHTML += JSON.stringify(item.name || item.title);
        };
    }; 
