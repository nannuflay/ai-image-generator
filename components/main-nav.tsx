"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathName = usePathname();

  const routes = [
    {
      href: `/`,
      label: "Generate",
      active: pathName == `/`,
    },
    {
      href: `/collections`,
      label: "Collections",
      active: pathName == `/collections`,
    },
  ];
  return (
    <nav
      className={(cn("flex items-center space-x-4 lg:space-x-6"), className)}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            " text-sm  font-medium transition-colors hover:text-primary mr-3",
            route.active
              ? "text-black : dark:text-white"
              : " text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
