export function getNextPlant(progress, room) {
    // look for first false value in given room
    const index = progress[room].findIndex(item => item === false)

    // return index or -1 if nothing is false
    return index === -1 ? null : index
}