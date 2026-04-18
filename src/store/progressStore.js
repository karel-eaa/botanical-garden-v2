import { persist } from "zustand/middleware"
import initialTemplate from "../data/initialTemplate.json"
import { checkQr } from "../utils/checkQr"
import { getNextPlant } from "../utils/getNextPlant"
import { getPlantScript } from "../utils/getPlantScript"
import { getRoomScript } from "../utils/getRoomScript"
import { create } from "zustand"

export const useProgressStore = create(persist(
    (set, get) => ({
        // states
        view: 'map',
        progress: initialTemplate,
        currentRoom: null,
        currentPlantId: null,
        roomScript: null,
        plantScript: null,

        // MENU
        selectRoom: (room) => {
            const nextPlant = getNextPlant(get().progress, room)

            // if room is completed, just return to the map
            if (nextPlant === null) {
                set({ view: 'map' })
                return
            }

            set({
                currentRoom: room,
                currentPlantId: nextPlant,
                roomScript: getRoomScript(room),
                plantScript: getPlantScript(room, nextPlant),
                view: 'roomDialogue'
            })
        },
        getRoomPercentage: (room) => {
            let numberOfPlants = get().progress[room].length
            let completedCount = get().progress[room].filter(Boolean).length
            return Math.round((completedCount / numberOfPlants) * 100)
        },

        // HINT
        backToMap: () => {
            set({
                view: 'map'
            })
        },
        goToScanner: () => {
            set({
                view: 'scanner'
            })
        },

        // SCANNER
        goToHint: () => {
            set({
                view: 'hint'
            })
        },
        recordScan: (rawValue) => {
            const result = checkQr(get().currentRoom, get().currentPlantId, rawValue)
            if (result.success == true) {
                set((state) => ({
                    progress: {
                        ...state.progress,
                        [get().currentRoom]: state.progress[get().currentRoom].map(
                            (val, i) => i === get().currentPlantId ? true : val
                        )
                    }
                }))

                set({
                    view: 'plantDialogue'
                })

            } else {
                set({
                    view: 'wrong'
                })
            }
        },

        // DIALOGUE
        goToHintAfterDialogue: () => {
            const nextPlant = getNextPlant(get().progress, get().currentRoom)

            // if room is completed, just return to the map
            if (nextPlant === null) {
                set({ view: 'map' })
                return
            }

            set({
                currentPlantId: nextPlant,
                plantScript: getPlantScript(get().currentRoom, nextPlant),
                view: 'hint'
            })

        }
    }),
    { name: 'game-progress' }
))