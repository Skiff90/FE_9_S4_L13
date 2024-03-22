const fetchUserFromServer = (username,onSucces,onError) =>{
    console.log(`Fetching data for ${username}`)
    setTimeout(() => {
        const isSucces = true;

        if(isSucces) {
            onSucces("succes value")
        }else{
            onError("error")
        }
    }, 2000);

    const onFetchSuccess = user => {
        console.log(user)
    }

    const onFetchError = error => {
        console.log(error)
    }
}

fetchUserFromServer("Vlados",onFetchSuccess,onFetchError)