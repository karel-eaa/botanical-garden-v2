import scripts from "../data/scripts.json"

export function getPlantScript(room, id) {
    return scripts[room][id]
}