import { useState } from "react";
import { CategoryPills } from "./components/CategoryPills";
import { categories, videos } from "./data/home";
import { PageHeader } from "./layouts/PageHeader";
import { VideoGridItem } from "./components/VideoGridItem";
import { Sidebar } from "./layouts/Sidebar";
import { SidebarProvider } from "./contexts/SidebarContext";

export default function App() {

  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  return(
    <SidebarProvider>
      <div className="flex flex-col max-h-screen">
        <PageHeader />
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <Sidebar />

          <div className="px-8 pb-4 overflow-x-hidden">
            <div className="sticky top-0 z-10 pb-4 bg-white">
              <CategoryPills categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory}/>
            </div>

            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              
              {videos.map(video => (
                <VideoGridItem 
                  key={video.id}
                  {...video}
                />
              ))}
              
              
            </div>

          </div>

        </div>
      </div>
    </SidebarProvider>
    
  )
}