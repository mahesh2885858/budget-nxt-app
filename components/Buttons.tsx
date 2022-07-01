import type { NextPage } from "next"
import { useStore } from "zustand"
import usetStore from "../State/State"

const Buttons: NextPage<{ id: string }> = ({ id }) => {
    const deleteEntry = usetStore((state) => state.deleteEntry)
    return (
        <div>
            <button onClick={() => deleteEntry(id)}> Delete</button>
            <button>Edit</button>
        </div>
    )
}

export default Buttons