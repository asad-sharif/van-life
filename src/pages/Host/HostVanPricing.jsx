import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const {van} = useOutletContext()


    return (
        <>
            <p><strong>${ van.price}</strong> <small>/day</small></p>
        </>
    )
}