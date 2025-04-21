class ModelHandler {
    instance: ModelHandler | null = null;

    constructor() {
        if (this.instance) return this.instance;
        this.instance = this;
    }


    static retrievers = {
        /*
        * Checks available models on local machine
        * @returns list of local models
        */
        async checkAvailModels() {
            try {
                const response = await fetch('/api/getmodels', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
    
                if (!response) {
                    throw new Error('Failed to get response');
                } 
    
                const models = await response.json()
                return models.data
            } catch (error) {
                console.log(error);
                throw new Error(`Failed to get local models: ${error}`)
            }
        }
    
    }


    async createModelMessage() {
        try {
            const response = await fetch('/api/create', {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response) throw new Error('Failed to get response');

            return response.json();
        } catch (error) {
            console.log(error);
        }
    }
}

export default ModelHandler;
