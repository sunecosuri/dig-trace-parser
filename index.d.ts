declare module 'dig-trace-parser' {
    interface IRecord {
        A: string[]
        CNAME: string[]
    }

    function dig(name: string): Promise<IRecord>
    namespace dig { }
    export = dig
}
