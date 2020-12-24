const chapter6_3_2 = () => {
    type WeekDay = 'Mon' | 'Tue'| 'Wed' | 'Thu' | 'Fri'  
    type Day = WeekDay | 'Sat' | 'Sun'

    //レコード型
    let nextDay: Record<WeekDay,Day> = {
        Mon: 'Tue',
        Tue: 'Wed',
        Wed: 'Thu',
        Thu: 'Fri',
        Fri: 'Sat'
    }
}