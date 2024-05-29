import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const {van} = useOutletContext()


    return (
        <>
            <p><strong>Description: </strong>{van.description}</p>
            <p>{van.description}</p>
            
        </>
    )
}