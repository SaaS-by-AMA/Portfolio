"use client"

import { MenuItem, MenuContainer } from "@/components/ui/fluid-menu"
import { Menu as MenuIcon, X, Home, Mail, User, Settings, Briefcase } from "lucide-react"

export function FluidNavbar() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="fixed top-6 right-6 z-50">
            <MenuContainer>
                <MenuItem
                    icon={
                        <div className="relative w-6 h-6">
                            <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-100 scale-100 rotate-0 [div[data-expanded=true]_&]:opacity-0 [div[data-expanded=true]_&]:scale-0 [div[data-expanded=true]_&]:rotate-180">
                                <MenuIcon size={24} strokeWidth={1.5} />
                            </div>
                            <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-0 scale-0 -rotate-180 [div[data-expanded=true]_&]:opacity-100 [div[data-expanded=true]_&]:scale-100 [div[data-expanded=true]_&]:rotate-0">
                                <X size={24} strokeWidth={1.5} />
                            </div>
                        </div>
                    }
                />
                <MenuItem
                    icon={<Home size={24} strokeWidth={1.5} />}
                    onClick={scrollToTop}
                />
                <MenuItem
                    icon={<Settings size={24} strokeWidth={1.5} />}
                    onClick={() => scrollToSection('services')}
                />
                <MenuItem
                    icon={<Briefcase size={24} strokeWidth={1.5} />}
                    onClick={() => scrollToSection('projects')}
                />
                <MenuItem
                    icon={<User size={24} strokeWidth={1.5} />}
                    onClick={() => scrollToSection('about')}
                />
                <MenuItem
                    icon={<Mail size={24} strokeWidth={1.5} />}
                    onClick={() => scrollToSection('contact')}
                />
            </MenuContainer>
        </div>
    )
}
