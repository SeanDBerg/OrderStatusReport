import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(number: number): string {
  return new Intl.NumberFormat("en-US").format(number);
}

export function formatCurrency(number: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
}

export function formatPercentage(number: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(number / 100);
}

export function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case "complete":
      return "bg-success text-success-foreground";
    case "in progress":
      return "bg-accent text-accent-foreground";
    case "on hold":
    case "temporary hold":
      return "bg-warning text-warning-foreground";
    case "pending":
      return "bg-secondary text-secondary-foreground";
    case "new":
      return "bg-muted text-muted-foreground";
    case "suspended":
      return "bg-destructive text-destructive-foreground";
    case "cancelled":
      return "bg-destructive/80 text-destructive-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
}

export function getPercentage(value: number, total: number): number {
  return Math.round((value / total) * 100);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}
