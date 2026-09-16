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
import { User } from "@/types/user-session";
import LogoutMenuItem from "./logoutMenuItem";
import { getEducationalSystems, getGradeLevels } from "@/lib/database/contents/curriculum";
import { LabeledSelect } from "@/components/ui/labeled-select";
import { redirect } from "next/navigation";
import { EducationalSystemSelect, GradeLevelSelect } from "./curriculumSelects";

async function HomeHeader({ user, currentSystemId, currentGradeId, systems, grades }:
    {
        user: User | null,
        currentSystemId: string,
        currentGradeId: string,
        systems: { id: string, name: string }[],
        grades: { id: string, name: string }[]
    }
) {
    const systemOptions = systems.map(sys => ({
        value: sys.id,
        label: sys.name
    }));
    const gradeOptions = grades.map(gr => ({
        value: gr.id,
        label: gr.name
    }));

    return (
        <header className="flex items-center justify-between px-8 py-3 bg-background border-b border-border">
            {/* Logo + name */}
            <div className="flex items-center gap-2">
                <Image src="/hero-bird.png" alt="here" width={70} height={70} />
                <span className="text-xl font-bold text-foreground">Deeply</span>
            </div>

            {/* System + Grade + Profile */}
            <div className="flex items-center gap-6">
                {/* Systeme */}
                <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground leading-none mb-1">Système</span>
                    <EducationalSystemSelect options={systemOptions} value={currentSystemId} />
                </div>

                {/* Grade */}
                <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground leading-none mb-1">Grade</span>
                    <GradeLevelSelect options={gradeOptions} value={currentGradeId} key={currentSystemId} />
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