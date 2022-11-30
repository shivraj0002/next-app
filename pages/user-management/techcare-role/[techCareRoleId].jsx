import TakeCareRole from "../../../components/userManagement/TechCareRole"
import { useRouter } from "next/router"


export default function UpdateTechCareRole() {

    const Router = useRouter()

    const { techCareRoleId } = Router.query


    return (
        <TakeCareRole id={techCareRoleId} />
    )

}