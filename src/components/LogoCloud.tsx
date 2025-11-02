import { BlurFade } from "./BlurFade";

export default function LogoCloud() {
  return (
    <section className="py-16 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
          <h2 className="text-lg font-medium text-white min-w-fit">Powering the best<br />teams</h2>
          <div className="h-px w-px bg-white/20 hidden md:block" />
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <img 
            className="h-5 w-fit dark:invert" 
            src="https://html.tailus.io/blocks/customers/nvidia.svg" 
            alt="Nvidia Logo" 
            height="20" 
            width="auto" 
          />
          <img 
            className="h-4 w-fit dark:invert" 
            src="https://html.tailus.io/blocks/customers/column.svg" 
            alt="Column Logo" 
            height="16" 
            width="auto" 
          />
          <img 
            className="h-4 w-fit dark:invert" 
            src="https://html.tailus.io/blocks/customers/github.svg" 
            alt="GitHub Logo" 
            height="16" 
            width="auto" 
          />
          <img 
            className="h-5 w-fit dark:invert" 
            src="https://html.tailus.io/blocks/customers/nike.svg" 
            alt="Nike Logo" 
            height="20" 
            width="auto" 
          />
          <img 
            className="h-4 w-fit dark:invert" 
            src="https://html.tailus.io/blocks/customers/laravel.svg" 
            alt="Laravel Logo" 
            height="16" 
            width="auto" 
          />
          <img 
            className="h-7 w-fit dark:invert" 
            src="https://html.tailus.io/blocks/customers/lilly.svg" 
            alt="Lilly Logo" 
            height="28" 
            width="auto" 
          />
          <img 
            className="h-5 w-fit dark:invert" 
            src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg" 
            alt="Lemon Squeezy Logo" 
            height="20" 
            width="auto" 
          />
          <img 
            className="h-6 w-fit dark:invert" 
            src="https://html.tailus.io/blocks/customers/openai.svg" 
            alt="OpenAI Logo" 
            height="24" 
            width="auto" 
          />
          <img 
            className="h-4 w-fit dark:invert" 
            src="https://html.tailus.io/blocks/customers/tailwindcss.svg" 
            alt="Tailwind CSS Logo" 
            height="16" 
            width="auto" 
          />
          <img 
            className="h-5 w-fit dark:invert" 
            src="https://html.tailus.io/blocks/customers/vercel.svg" 
            alt="Vercel Logo" 
            height="20" 
            width="auto" 
          />
          <img 
            className="h-5 w-fit dark:invert" 
            src="https://html.tailus.io/blocks/customers/zapier.svg" 
            alt="Zapier Logo" 
            height="20" 
            width="auto" 
          />
          </div>
        </div>
      </div>
    </section>
  );
}

