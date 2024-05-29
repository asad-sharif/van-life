import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const {van} = useOutletContext()

    return (
        <>
            <img src={van.imageUrl} alt="" className="anything" />
            <img src={van.imageUrl} alt="" className="anything" />
            <img src={van.imageUrl} alt="" className="anything" />
        </>
    )
}