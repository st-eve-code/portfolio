import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
