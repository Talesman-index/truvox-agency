import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to combine class names with Tailwind CSS merging support.
 * Accepts any number of class value arguments (strings, objects, arrays)
 * and returns a single merged class string.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
