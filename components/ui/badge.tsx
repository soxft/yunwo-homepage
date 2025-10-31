import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary/10 text-primary ring-1 ring-primary/20",
        success: "bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/20",
        neutral: "bg-muted text-muted-foreground",
        warning: "bg-amber-500/10 text-amber-600 ring-1 ring-amber-500/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn("select-none", badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
