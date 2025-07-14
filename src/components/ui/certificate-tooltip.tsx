
import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@/lib/utils"

const CertificateTooltipProvider = TooltipPrimitive.Provider
const CertificateTooltip = TooltipPrimitive.Root
const CertificateTooltipTrigger = TooltipPrimitive.Trigger

const CertificateTooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
    certificateName: string;
    certificatePreview?: string;
  }
>(({ className, sideOffset = 4, certificateName, certificatePreview, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden border-2 border-primary bg-card/95 backdrop-blur-md px-4 py-3 text-sm shadow-2xl animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 pixel-corners hover-glow max-w-xs",
      className
    )}
    {...props}
  >
    <div className="space-y-2">
      <div className="font-mono font-bold text-primary text-xs">
        {certificateName}
      </div>
      {certificatePreview && (
        <div className="w-full h-20 border border-border pixel-corners overflow-hidden">
          <img 
            src={certificatePreview} 
            alt={`${certificateName} Preview`}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="font-mono text-xs text-muted-foreground">
        {"// Click to view full certificate"}
      </div>
    </div>
  </TooltipPrimitive.Content>
))
CertificateTooltipContent.displayName = TooltipPrimitive.Content.displayName

export { CertificateTooltip, CertificateTooltipTrigger, CertificateTooltipContent, CertificateTooltipProvider }
