import { cn } from "@/lib/utils";

type ContainerProps = {
	children: React.ReactNode;
	className?: string;
};

export function Container({ children, className }: ContainerProps) {
	return <div className={cn("px-4 lg:px-10", className)}>{children}</div>;
}
