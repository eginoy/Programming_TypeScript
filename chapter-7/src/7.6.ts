const chapter7_6 = () => {
    type UserID = number

    class API{
        getLoggedInUserID(): UserID | null {
            return null
        }
        getFriendIDs(userID: UserID | null): UserID[] | null{
            if(userID) return [2,3,4]
            return null
        }
        getUserName(userID: UserID | null): string | null{
            if(userID) return 'eginoy'
            return null
        }
    }

    const api = new API()

    const loggedInUserID = api.getLoggedInUserID()
    if(!loggedInUserID) return console.error('error getLoggedInUserID')
    
    const friendIDs = api.getFriendIDs(loggedInUserID)
    if(!friendIDs) return console.error('error getFriendIDs')

    const friendUserNames = friendIDs.map(id => api.getUserName(id))
    let completeUserNames = true
    friendUserNames.forEach(name => {
        if(!name) completeUserNames = false
    })
    if(completeUserNames) console.error('error getUserName')

    console.info('your friend list', friendUserNames)
}