import Image from "next/image";
import { Globe, GraduationCap, User as UserIcon, Settings, HelpCircle, LogOut, ChevronDown } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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

function HomeHeader({user}:{user:User | null}) {
    return (
        <header className="flex items-center justify-between px-8 py-3 bg-background border-b border-border">
            {/* Logo + name */}
            <div className="flex items-center gap-2">
                <Image src="/hero.png" alt="here" width={40} height={40} />
                <span className="text-xl font-bold text-foreground">Deeply</span>
            </div>

            {/* Système + Grade + Profile */}
            <div className="flex items-center gap-6">
                {/* Système */}
                <div className="flex items-center gap-2">
                    <Globe className="size-5 text-primary" />
                    <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground leading-none mb-1">Système</span>
                        <Select defaultValue="us">
                            <SelectTrigger className="h-8 w-27.5">
                                <SelectValue placeholder="Système" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="US">US</SelectItem>
                                <SelectItem value="FR">FR</SelectItem>
                                <SelectItem value="MG">MG</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Grade */}
                <div className="flex items-center gap-2">
                    <GraduationCap className="size-5 text-primary" />
                    <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground leading-none mb-1">Grade</span>
                        <Select defaultValue="terminal">
                            <SelectTrigger className="h-8 w-32.5">
                                <SelectValue placeholder="Grade" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="6ème">6ème</SelectItem>
                                <SelectItem value="5ème">5ème</SelectItem>
                                <SelectItem value="4ème">4ème</SelectItem>
                                <SelectItem value="3ème">3ème</SelectItem>
                                <SelectItem value="2ème">2ème</SelectItem>
                                <SelectItem value="1ère">1ère</SelectItem>
                                <SelectItem value="terminal">Terminal</SelectItem>
                            </SelectContent>
                        </Select>
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
                        <DropdownMenuItem>
                            <LogOut className="size-4 mr-2" />
                            Se déconnecter
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}

export default HomeHeader;