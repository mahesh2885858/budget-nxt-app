import { useState } from "react"
import usetStore from "../../State/State"
import Router from "next/router"
const index = () => {
    const [name, setName] = useState('')
    const [expected, setExpected] = useState("")
    const addEntry = usetStore((state) => state.addEntry)
    return (
        <div>
            <form action="#">
                <div>
                    <label htmlFor="name">Name : </label>
                    <input value={name} id="name" onChange={(e) => {
                        setName(e.target.value)
                    }} type="text" />
                </div>
                <div>
                    <label htmlFor="expected">Expected : </label>
                    <input id="expected" value={expected} onChange={(e) => setExpected((e.target.value))} type="number" />
                </div>
                <button onClick={(e) => {
                    e.preventDefault()
                    addEntry(name, parseInt(expected))
                    Router.push("/")
                }}>Add</button>
            </form>
        </div>
    )
}

export default index