import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const CertificateModal = DialogPrimitive.Root
const CertificateModalTrigger = DialogPrimitive.Trigger

const CertificateModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    certificateName: string;
    certificateImage?: string;
    websiteUrl?: string;
  }
>(({ className, children, certificateName, certificateImage, websiteUrl, ...props }, ref) => {
  const handleGetCertificate = () => {
    if (websiteUrl) {
      window.open(websiteUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 border-4 border-primary bg-card/95 backdrop-blur-md p-6 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] pixel-corners hover-glow",
          className
        )}
        {...props}
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="text-center">
            <h3 className="font-mono text-xl font-bold text-primary mb-2">{certificateName}</h3>
            <div className="w-16 h-1 bg-primary mx-auto pixel-bar"></div>
          </div>
          
          {certificateImage ? (
            <div className="w-full max-w-lg border-2 border-border pixel-corners overflow-hidden hover-glow">
              <img 
                src={certificateImage} 
                alt={`${certificateName} Certificate`}
                className="w-full h-auto object-contain"
              />
            </div>
          ) : (
            <div className="w-full max-w-lg h-64 bg-muted border-2 border-border pixel-corners flex items-center justify-center">
              <div className="text-center">
                <div className="font-mono text-primary mb-2">// Certificate Image</div>
                <div className="font-mono text-sm text-muted-foreground">Coming Soon</div>
              </div>
            </div>
          )}
          
          {websiteUrl && (
            <Button
              onClick={handleGetCertificate}
              className="font-mono bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-primary pixel-corners hover-glow transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Get This Certificate
            </Button>
          )}
          
          <div className="font-mono text-xs text-muted-foreground bg-muted p-3 pixel-corners w-full text-center">
            {"// Click outside to close"}
          </div>
        </div>
        
        <DialogPrimitive.Close className="absolute right-4 top-4 p-2 bg-muted hover:bg-accent border border-border pixel-corners transition-colors">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
})
CertificateModalContent.displayName = DialogPrimitive.Content.displayName

export { CertificateModal, CertificateModalTrigger, CertificateModalContent }
