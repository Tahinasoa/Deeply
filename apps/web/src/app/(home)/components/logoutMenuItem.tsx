'use client'


import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

const LogoutMenuItem = () => {
    return (
    <DropdownMenuItem >
        <div onClick={async ()=>{ await signOut()}} className="flex items-center">
            <LogOut className="size-4 mr-2" />
            Se déconnecter
        </div>
    </DropdownMenuItem>) ;
}
export default LogoutMenuItem ;