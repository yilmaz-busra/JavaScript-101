

// JSON dosyadan veri cekmek:
fetch("data/settings.json").then(
    response=> {
        //   console.log(response)
        return response.json()
        }
    ).then( responseJson =>{
        console.log(responseJson)
        console.log(responseJson.userName)
    }
        )