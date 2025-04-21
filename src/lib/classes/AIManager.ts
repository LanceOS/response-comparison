

class AIManager {
    instance: AIManager | null = null;

    constructor() {
        if(this.instance) return this.instance;
        this.instance = this;
    }

    

}

export default AIManager;
