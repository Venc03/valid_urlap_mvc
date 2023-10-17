import { urlapleiro } from "./urlapleiro.js";

export { urlapleiro } from "./urlapleiro.js";

class UrlapModell{
    #leiro = {}
    constructor (){
        this.#leiro = urlapleiro;
    }

    get leiro(){
        return {...this.#leiro};
    }
};

export default UrlapModell;