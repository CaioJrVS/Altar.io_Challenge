export class HttpRequestResult<T> {
    public StatusCode!: number;
    public ErrorMessage!: string;
    public Result!: T;
}
