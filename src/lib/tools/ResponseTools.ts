class ResponseTools {
    instance: ResponseTools | null = null;

    constructor() {
        if (this.instance) return this.instance;
        this.instance = this;
    }

    
}

export default ResponseTools;
