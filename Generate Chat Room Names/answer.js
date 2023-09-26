// const names = ["joe bloggs", "John SMITH", "Jane Doe", "Jane Bloggs", "John Scott", "John Salamani", "Johnny Wilson", "Johnny Williams"]
const names = [
    'James Smith',        'James Jones',        'James Johnson',
    'James Williams',     'James Taylor',       'James Wilson',
    'James Davis',        'James Anderson',     'James Harris',
    'James Miller',       'Mary Smith',         'Mary Jones',
    'Mary Johnson',       'Mary Williams',      'Mary Taylor',
    'Mary Wilson',        'Mary Davis',         'Mary Anderson',
    'Mary Harris',        'Mary Miller',        'Robert Smith',
    'Robert Jones',       'Robert Johnson',     'Robert Williams',
    'Robert Taylor',      'Robert Wilson',      'Robert Davis',
    'Robert Anderson',    'Robert Harris',      'Robert Miller',
    'John Smith',         'John Jones',         'John Johnson',
    'John Williams',      'John Taylor',        'John Wilson',
    'John Davis',         'John Anderson',      'John Harris',
    'John Miller',        'Patricia Smith',     'Patricia Jones',
    'Patricia Johnson',   'Patricia Williams',  'Patricia Taylor',
    'Patricia Wilson',    'Patricia Davis',     'Patricia Anderson',
    'Patricia Harris',    'Patricia Miller',    'Jennifer Smith',
    'Jennifer Jones',     'Jennifer Johnson',   'Jennifer Williams',
    'Jennifer Taylor',    'Jennifer Wilson',    'Jennifer Davis',
    'Jennifer Anderson',  'Jennifer Harris',    'Jennifer Miller',
    'Michael Smith',      'Michael Jones',      'Michael Johnson',
    'Michael Williams',   'Michael Taylor',     'Michael Wilson',
    'Michael Davis',      'Michael Anderson',   'Michael Harris',
    'Michael Miller',     'Linda Smith',        'Linda Jones',
    'Linda Johnson',      'Linda Williams',     'Linda Taylor',
    'Linda Wilson',       'Linda Davis',        'Linda Anderson',
    'Linda Harris',       'Linda Miller',       'David Smith',
    'David Jones',        'David Johnson',      'David Williams',
    'David Taylor',       'David Wilson',       'David Davis',
    'David Anderson',     'David Harris',       'David Miller',
    'Elizabeth Smith',    'Elizabeth Jones',    'Elizabeth Johnson',
    'Elizabeth Williams', 'Elizabeth Taylor',   'Elizabeth Wilson',
    'Elizabeth Davis',    'Elizabeth Anderson', 'Elizabeth Harris', 'Saadeh Elias']


function hasDuplicate(map, fname, lname, id) {
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

function generateChatRoomNames(users) {
    users = users.sort()
    const formatted = new Map()
    let firstName
    let lastName
    let fullName
    let id = 0
    const finalArr = []
    for (const name of users) {
        const words = name.split(" ");
        firstName = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
        lastName = words[1].charAt(0).toUpperCase() + words[1].slice(1).toLowerCase();
        fullName = `${firstName} ${lastName}`
        formatted.set(fullName, {fullName: fullName, firstName: firstName, lastName: lastName, id: id })
        id++
        // console.log("formatted: ", formatted.get(fullName))
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

const res = generateChatRoomNames(names)

console.log(res)