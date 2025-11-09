import { ArrowRightIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border-y border-white/10 bg-black px-4 py-8">
      <PlusIcon
        className="absolute top-[-12.5px] left-[-11.5px] z-10 size-6 text-white/40"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute top-[-12.5px] right-[-11.5px] z-10 size-6 text-white/40"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute bottom-[-12.5px] left-[-11.5px] z-10 size-6 text-white/40"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute right-[-11.5px] bottom-[-12.5px] z-10 size-6 text-white/40"
        strokeWidth={1}
      />

      <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l border-white/10" />
      <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r border-white/10" />

      <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed border-white/10" />

      <div className="space-y-1">
        <h2 className="text-center font-bold text-2xl text-white">
          Design Engineering + Vibe Coding Mastermind
        </h2>
        <p className="text-center text-white/60">
          Master Vibe Coding workflows that help you design, code, and ship faster — so you can land premium clients and roles.
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
          Contact Sales
        </Button>
        <Button variant="cta">
          Get Started <ArrowRightIcon className="size-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}

