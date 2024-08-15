import { redirect } from "next/navigation";

function Account() {
    redirect(`/account/my-account/edit-profile`);
    return null;
}

export default Account
