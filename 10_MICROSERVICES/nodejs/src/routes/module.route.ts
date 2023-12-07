
class ModuleRouter
{
    private method: string;

    constructor(method: string)
    {
        this.method = method;
    }

    public getMethod(): string
    {
        return this.method;
    }

    
}