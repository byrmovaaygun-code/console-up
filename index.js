let database = []

let programIsRunning = true


while (programIsRunning) {
    const menuText = ` 
        1- adi goster
        2-adi elave et
        3- programi bitir
        4- ad silindi
        `

    const userinp = prompt(menuText)

    if (userinp === "1") {
        if (!database.length) {
            alert("salam")
        }
        else {
            let word = ``
            for (let i = 0; i < database.length; i++) {
                word += " | " + database[i] + " |  \n "
            }
            alert(word)
        }

    }
    else if (userinp === "2") {
        const username = prompt(`  ad daxil edin  `)
        database.push(username)
        alert(username + " ugurla elave edildi")
    }
    else if (userinp === "3") {
        alert("program bitdi")
        programIsRunning = false
    }
    else if (userinp === "4") {
        const deleted = prompt(`silinecek ad daxil edin  `)
        database=database.filter(x=>x!==deleted)
        alert(deleted + " ugurla  silindi")
    } 
    else {
        alert("duzgun deyer daxil edin  1 ,2 ve ya 3 yazin")
    }

}