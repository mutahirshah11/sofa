import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
 import React from 'react'
 
 const Cartopen = () => {
   return (
     <div>
         {/* Hamberger menu */}
  <div className=" lg:hidden">
  <Sheet>
    <SheetTrigger>
    
    </SheetTrigger>
    <SheetContent className="bg-[#f0efef] border-[0px]">
      <SheetHeader>
        <SheetTitle></SheetTitle>
        <div className="text-left pt-20 ">
          
        </div>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</div>
     </div>
   )
 }
 
 export default Cartopen