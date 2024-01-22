import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react"
import logo from "../assets/logo-tube.png"
import { Button } from "../components/Button"
import { useState } from "react"
import { useSidebarContext } from "../contexts/SidebarContext"

export function PageHeader() {

    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)

    


    return (
        <div className="flex justify-between gap-10 pt-2 mx-4 mb-6 lg:gap-20">
            
            <PageHeaderFirstSection hidden={showFullWidthSearch}/>

            <form className={`gap-4 flex-grow justify-center ${showFullWidthSearch ? "flex" : "hidden md:flex "}`}>

                { showFullWidthSearch && (
                    <Button 
                        onClick={() => setShowFullWidthSearch(false)}
                        type="button" 
                        size="icon" 
                        variant="ghost" 
                        className="flex-shrink-0"
                    >
                            <ArrowLeft />
                    </Button>
                )}
                
                <div className="flex flex-grow max-w-[600px]">
                    <input 
                        type="search" 
                        placeholder="Search"
                        className="w-full px-4 py-1 text-lg border rounded-l-full shadow-inner outline-none border-secondary-border shadow-secondary focus:border-blue-500"
                    />
                    <Button className="flex-shrink-0 px-4 py-2 border border-l-0 rounded-r-full border-secondary-border">
                        <Search />
                    </Button>
                </div>
                <Button type="button" size="icon" className="flex-shrink-0">
                    <Mic />
                </Button>
            </form>


            <div className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
                <Button
                    onClick={() => setShowFullWidthSearch(true)}
                    size="icon"
                    variant="ghost"
                    className="md:hidden"
                >
                    <Search />
                </Button>

                <Button 
                    size="icon"
                    variant="ghost"
                    className="md:hidden"
                >
                    <Mic />
                </Button>

                <Button 
                    size="icon"
                    variant="ghost"
                >
                    <Upload />
                </Button>

                <Button 
                    size="icon"
                    variant="ghost"
                >
                    <Bell />
                </Button>

                <Button 
                    size="icon"
                    variant="ghost"
                >
                    <User />
                </Button>
            </div>
        </div>
    )
}


type PageHeaderFirstSectionProps = {
    hidden?: boolean
}


export function PageHeaderFirstSection({ hidden = false } : PageHeaderFirstSectionProps) {
    const { toggle } = useSidebarContext()
    
    return (
        <div className={`gap-4 items-center flex-shrink-0 ${hidden ? "hidden" : "flex"}`}>
            <Button onClick={toggle} variant="ghost" size="icon">
                <Menu />
            </Button>
            <a href="/">
                <img 
                    src={logo} 
                    alt="logo tube" 
                    className="h-6" 
                />
            </a>
        </div>
    )
}