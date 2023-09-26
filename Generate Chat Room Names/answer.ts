function hasDuplicate(map: Map<string, {fullName: string, firstName: string, lastName: string, id: number}>, fname: string, lname: string, id: number): string {
    for (const [key, value] of map.entries()) {
        if (key.split(" ")[0] === fname && key.split(" ")[1].slice(0,1) === lname.slice(0,1) && value.id !== id) {
            return 'deluxe';
        }
    }
    for (const [key, value] of map.entries()) {        
        if (key.split(" ")[0] === fname && value.id !== id) {
            return 'fNameOnly'
        }
    } 
    return 'unique';
  }

  function generateChatRoomNames(users: string[]): string[] {
  console.log(users)
    const formatted = new Map()
    let firstName
    let lastName
    let fullName
    let id = 0
    const finalArr:string[] = []
    for (const name of users) {
        const words = name.split(" ");
        firstName = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
        lastName = words[1].charAt(0).toUpperCase() + words[1].slice(1).toLowerCase();
        fullName = `${firstName} ${lastName}`
        formatted.set(fullName, {fullName: fullName, firstName: firstName, lastName: lastName, id: id })
        id++
    }
    for (const [key, value] of formatted.entries()) {
        let {fullName, firstName, lastName, id} = value
        const res = hasDuplicate(formatted, firstName, lastName, id)
        switch(res) {
            case 'deluxe':
                finalArr.push(fullName)
                break
            case 'fNameOnly':
                finalArr.push(`${firstName} ${lastName.slice(0,1)}`)
                break
            case 'unique':
                finalArr.push(firstName)
                break
        }
    }
    return finalArr.sort()
  }