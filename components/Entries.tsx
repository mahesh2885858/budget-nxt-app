import type { NextPage } from "next"
import { useState } from "react"
import { MdEdit, MdSave } from "react-icons/md"
import usetStore from "../State/State"
import Buttons from "./Buttons"
const Entries: NextPage = () => {
    // const [isEditModeOn, setIsEditModeOn] = useState(false)
    const Entries = usetStore((state) => state.entries)
    const toggleEdit = usetStore((state) => state.toggleEdit)
    console.log(Entries)
    return (
        <div>
            {
                Entries.map((entry) => {
                    return (
                        <div key={entry.id}>
                            <p>{

                                !entry.isEditOn ?
                                    (
                                        <>
                                            <span>

                                                {entry.name}
                                            </span>
                                            <span onClick={() => toggleEdit(entry.id, "name")}><MdEdit /></span>
                                        </>

                                    ) : (
                                        <>

                                            <input type="text" value={entry.name} />
                                            <span><MdSave /></span>
                                        </>
                                    )


                            }

                            </p>
                            <p>
                                <span>

                                    Expected:{entry.expected}
                                </span>
                                <span><MdEdit /></span>

                            </p>
                            <p>
                                <span>

                                    Cost:{entry.ogCost}
                                </span>
                                <span><MdEdit /></span>

                            </p>
                            <Buttons id={entry.id} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Entries