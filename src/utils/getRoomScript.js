import scripts from "../data/scripts.json"

export function getRoomScript(room) {
    return scripts[room]['start']
}