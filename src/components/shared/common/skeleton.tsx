import Spinner from "@/components/shared/common/spinner";
import { cn } from "@/components/shared/utils/cn";

export const Skeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("animate-pulse bg-neutral-300 rounded-md", className)}>
      {children}
    </div>
  );
};

export function PageSkeleton() {
  return (
    <div className="min-h-full flex justify-center items-center bg-background">
      <Spinner />
    </div>
  );
}

export const TextSkeleton = ({
  lines = 1,
  className,
}: {
  lines?: number;
  className?: string;
}) => {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          className={cn("h-4", index === 0 ? "w-3/4" : "w-1/2")}
        />
      ))}
    </div>
  );
};
