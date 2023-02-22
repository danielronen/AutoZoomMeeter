function get() {
    // XMLHttpRequest - 
    let req = new XMLHttpRequest();

    // XMLHttpRequest.open(method: string, url: string)
    req.open('GET', '/all');

    req.onreadystatechange = () => {
        // readyState of 4 - DONE (operation is complete).
        if (req.readyState === 4) {
            // req.response - is the data that returns from the address
            // JSON.parse() - convert to array. 
            let arr = JSON.parse(req.response);
            let result = '';
            result += `${arr}`
            result = result.split(',');
            //console.log(result);
            document.getElementById('link').href = result[0];
            document.getElementById('link').innerHTML = result[0];
            document.getElementById('pass').innerHTML = result[1];
            document.getElementById('email').innerHTML = result[2];
        }
    }
    req.send();
}

function func(){
    // XMLHttpRequest - 
    let req = new XMLHttpRequest();

    // XMLHttpRequest.open(method: string, url: string)
    req.open('GET', '/meet');

    req.onreadystatechange = () => {
        // readyState of 4 - DONE (operation is complete).
        if (req.readyState === 4) {
            // req.response - is the data that returns from the address
            // JSON.parse() - convert to array. 
            console.log(req.response)
            let arr = req.response;
            let a = JSON.parse(JSON.parse(arr));
            console.log(a)
            
            let result = '';
            result += `<th>User</th><th>Live</th><th>Host Key</th>`
            for (var key in a) {
                result += `
                    <tr>
                    <td>${a[key][0]}</td>
                    <td>${key}</td>
                    <td>${a[key][1]}</td>
                    </tr>
                    `
            }     
            document.getElementById('shiftsTable').innerHTML = result;
        }
    }
    req.send();

}

function getTable(){
    console.log("rewq req")
    let req = new XMLHttpRequest();
    req.open('GET', '/meetings');
    req.send();
}

function myFunction(){
    document.getElementById("g").style.display = "inline";    
}
