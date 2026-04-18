import dictionary from "../data/dictionary.json"

export function checkQr(room, currentPlantId, url) {
    const id = dictionary[room]?.[url]

    if (id === undefined) return { success: false, reason: 'unknown_qr' }
    if (id !== currentPlantId) return { success: false, reason: 'wrong_qr' }

    return { success: true }
}