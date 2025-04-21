class ResponseTools {
    instance: ResponseTools | null = null;

    constructor() {
        if (this.instance) return this.instance;
        this.instance = this;
    }

    static async formatResponse() {
        const response = fetch('', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

export default ResponseTools;
