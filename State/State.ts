import create from "zustand";
import { devtools } from "zustand/middleware"
import EntriesData from "../data/data";
import { nanoid } from 'nanoid'
interface StateType {
    entries: typeof EntriesData
    addEntry: (name: string, expected: number) => void
    toggleEdit: (id: string, field?: string) => void
    deleteEntry: (id: string) => void
}
const usetStore = create<StateType>()(
    devtools((set) => ({
        entries: EntriesData,
        addEntry: (name, expected) => {
            set((state) => {
                const id = nanoid()
                const newEntry = {
                    name, expected, ogCost: 0, id, isEditOn: false
                }
                return { ...state, entries: [...state.entries, newEntry] }
            })
        },
        toggleEdit: (id, field) => {
            set((state) => {
                const entriesAfterToggling = state.entries.map((entry) => {
                    if (entry.id === id) return { ...entry, isEditOn: true }
                    return entry
                })
                return { ...state, entries: entriesAfterToggling }

            })
        },
        deleteEntry: (id: string) => {
            set((state) => {
                const newstore = state.entries.filter((entry) => entry.id !== id)
                return { ...state, entries: newstore }
            })
        }
    })))
export default usetStore