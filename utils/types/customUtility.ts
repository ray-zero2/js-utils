// Merge< { a: number } & { b: string } >  => { a: number, b: string }
export type Merge<T> = { [K in keyof T]: T[K] } 