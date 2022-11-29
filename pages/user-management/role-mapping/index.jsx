import { useRouter } from "next/router"
import RoleMapping from "../../../components/userManagement/RoleMapping"


export default function AddRoleMapping() {

    const Router = useRouter()

    return (

        <RoleMapping />
    )
}