import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// clsx로 클래스값 조합하기(여러 클래스를 받아서 하나의 문자열로 합치기)
// twMerge()로 TailwindCSS 클래스 병합 후 중복된 클래스 제거
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
