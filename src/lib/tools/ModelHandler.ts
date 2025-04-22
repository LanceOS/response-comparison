import { PUBLIC_LOCAL_URL } from "$env/static/public";

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
                const response = await fetch(`${PUBLIC_LOCAL_URL}/api/getmodels`, {
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

    creators = {

        /**
         * 
         * @param model 
         * @param prompt 
         * @returns 
         */
        async createModelMessage(model: string, prompt: string) {
            try {
                const response = await fetch(`${PUBLIC_LOCAL_URL}/api/create`, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ model: model, prompt: prompt })
                });
    
                if (!response) throw new Error('Failed to get response');
    
                return response.json();
            } catch (error) {
                console.error(error);
            }
        },

        async analyzeContexts() {
            try {
                console.log("This")
            }
            catch(error) {
                console.error(error)
            }
        }
    }

}

export default ModelHandler;
