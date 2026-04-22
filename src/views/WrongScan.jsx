import { useShallow } from "zustand/shallow"
import { useProgressStore } from "../store/progressStore"
import { useEffect } from "react"

export default function WrongScan() {

    const { goToHint } = useProgressStore(useShallow(s => ({
        goToHint: s.goToHint
    })))

    useEffect(() => {
        const id = setTimeout(() => goToHint(), 2000)
        return () => clearTimeout(id)
    }, [])

    return <>
        <div className="h-screen bg-[#F1F8E9] flex flex-col gap-12 justify-center items-center">
            <h1 className="text-3xl">That’s incorrect :(</h1>
            <img src="/botanical-garden-v2/images/error.png" alt="" />
        </div>
    </>
}