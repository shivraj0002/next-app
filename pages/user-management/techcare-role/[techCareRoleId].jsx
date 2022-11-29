import TakeCareRole from "../../../components/userManagement/TechCareRole"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

export default function UpdateTechCareRole() {
    const [loadId, setloadId] = useState('')
    const Router = useRouter()

    const { techCareRoleId } = Router.query
    console.log(techCareRoleId);
    useEffect(() => {

        setloadId(techCareRoleId)

    }, [techCareRoleId])

    return (
        <TakeCareRole id={loadId} />
    )

}