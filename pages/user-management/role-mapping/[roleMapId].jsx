import { useRouter } from "next/router"
import RoleMapping from "../../../components/userManagement/RoleMapping"


export default function UpdateRoleMapping() {

    const Router = useRouter()

    const { roleMapId } = Router.query
    // console.log(roleMapId);

    return (

        <RoleMapping id={roleMapId} />
    )
}