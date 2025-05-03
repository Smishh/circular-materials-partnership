
import * as React from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { cn } from "@/lib/utils"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <CollapsiblePrimitive.Content
    ref={ref}
    className={cn(
      "overflow-visible",
      className
    )}
    style={{
      position: 'relative',
      zIndex: 30,
      height: 'auto',
      visibility: 'visible',
      overflow: 'visible',
      display: 'block'
    }}
    {...props}
  >
    <div 
      className="overflow-visible py-4"
      style={{
        position: 'relative',
        zIndex: 30,
        overflow: 'visible',
        height: 'auto'
      }}
    >
      {children}
    </div>
  </CollapsiblePrimitive.Content>
))

CollapsibleContent.displayName = CollapsiblePrimitive.Content.displayName

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
