import Image from "next/image";
import { Globe, GraduationCap, User as UserIcon, Settings, HelpCircle, LogOut, ChevronDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {User} from "@/types/user-session";
import LogoutMenuItem from "./logoutMenuItem";
import { getEducationalSystems, getGradeLevels } from "@/lib/database/contents/curriculum";
import { LabeledSelect } from "@/components/ui/labeled-select";
import { redirect } from "next/navigation";

async function HomeHeader({user, system, grade}:{user:User | null, system:string|string[]|undefined, grade:string|string[]|undefined}) {

    const educationalSystems = await getEducationalSystems() ;
    const educationalSystemOptions = educationalSystems.map(sys=>({
        value : sys.id,
        label : sys.name
    })) ;
    const educationalSystemDefault = educationalSystems.find(sys=>sys.name==="Malagasy") ;
    if(!system){
        redirect(`/?system=${educationalSystemDefault?.id}`) ;
    }
    const educationalSystemCurrent = educationalSystems.find(sys=>sys.id===educationalSystemDefault?.id) ;
    const currentSystem = educationalSystemCurrent || educationalSystemDefault ;

    const grades = await getGradeLevels(educationalSystemDefault!.id) ;
    const gradeOptions = grades.map(gr=>({
        value : gr.id,
        label : gr.name
    })) ;
    const gradeDefault = grades[0] ;


    return (
        <header className="flex items-center justify-between px-8 py-3 bg-background border-b border-border">
            {/* Logo + name */}
            <div className="flex items-center gap-2">
                <Image src="/hero.png" alt="here" width={40} height={40} />
                <span className="text-xl font-bold text-foreground">Deeply</span>
            </div>

            {/* System + Grade + Profile */}
            <div className="flex items-center gap-6">
                {/* Systeme */}
                <div className="flex items-center gap-2">
                    <Globe className="size-5 text-primary" />
                    <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground leading-none mb-1">Système</span>
                        <LabeledSelect options={educationalSystemOptions} defaultValue={currentSystem!.id}/>
                    </div>
                </div>

                {/* Grade */}
                <div className="flex items-center gap-2">
                    <GraduationCap className="size-5 text-primary" />
                    <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground leading-none mb-1">Grade</span>
                        <LabeledSelect options={gradeOptions} defaultValue={gradeDefault!.id}/>
                    </div>
                </div>

                {/* User profile */}
                <DropdownMenu>
                    <DropdownMenuTrigger
                        render={
                            <Button variant="ghost" className="flex items-center gap-2 px-2" />
                        }
                    >
                        <Avatar className="size-8">
                            <AvatarImage src="" />
                            <AvatarFallback>{user ? user.username.charAt(0).toUpperCase() : "?"}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-foreground">{user ? user.username : "Anonyme"}</span>
                        <ChevronDown className="size-4 text-muted-foreground" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuItem>
                            <UserIcon className="size-4 mr-2" />
                            Mon profil
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className="size-4 mr-2" />
                            Paramètres
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <HelpCircle className="size-4 mr-2" />
                            Aide
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <LogoutMenuItem />
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}

export default HomeHeader;