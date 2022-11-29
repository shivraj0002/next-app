import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import RoleMapping from "../../../components/userManagement/RoleMapping"


export default function UpdateRoleMapping() {
    const [loadId, setloadId] = useState('')
    const Router = useRouter()

    const { roleMapId } = Router.query
    console.log(roleMapId);
    useEffect(() => {

        setloadId(roleMapId)

    }
        , [roleMapId])


    return (

        <RoleMapping id={loadId} />
    )
}