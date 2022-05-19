function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
}

const heaven = {
    beginning: ['is a halfpipe', 'is wherever I fall', 'is a place on earth'],
    end: ['It isn't too hard to see, we're in', 'I just died and went to'],
    middle: ['I don't know how', 'could be better than this']
}

// Store heaven songs in an array
let heavenSongs = []

// Iterate over the object
for(let prop in heaven) {
    let optionIdx = generateRandomNumber(heaven[prop].length)

    // use the object's properties to customise the message being added to heaven
    switch(prop) {
        case 'beginning':
            heavenSongs.push(`At least in heaven I can skate "${heaven[prop][optionIdx]}".`)
            break
        case 'end':
            heavenSongs.push(`I think "${heaven[prop][optionIdx]}" heaven.`)
            break
        case 'middle':
            heavenSongs.push(`"${heaven[prop][optionIdx]}" heaven, "${heaven[prop][optionIdx]}".`)
            break
        default:
            heavenSongs.push('Song cannot be found.')
    }
}

function formatHeaven(heaven) {


    const formatted = heavenSongs.join('\n')
    console.log(formatted)
}

formatHeaven(heavenSongs);