declare module 'dig-trace-parser' {
    function dig(name: string): Promise<string[]>
    namespace dig { }
    export = dig
}
