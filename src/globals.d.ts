export {}

declare global {
  export type ValueOrNull<T> = T | null

  export type StringOrNull = ValueOrNull<string>
  export type NumberOrNull = ValueOrNull<number>
}
