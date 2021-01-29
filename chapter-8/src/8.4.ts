const chapter8_4 = () => {
    function getUser(){
        getUserID(18)
        .then(user => getLocation(user))
        .then(location => console.info('got location', location))
        .catch(error => console.error(error))
        .finaly(() => console.info('done getting location'))
    }

    //上のコードをasyncとawaitにする
    async function getUser2(){
        try{
            let user = await getUserID(18)
            let location = await getLocation(user)
            console.info('got location', location)
        }catch(error){
            console.error(error)
        }finaly{
            console.info('done getting location')
        }
    }
}