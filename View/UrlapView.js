import textUrlapElem from "./textUrlapElem.js";

class UrlapView{

    #leiro = {};
    #szuloElem;
    #formElem;
    #urlapElemLista = [];
    constructor (szuloElem, leiro){
        this.#szuloElem = szuloElem;
        this.#leiro = leiro;
        this.#szuloElem.append("<form>");
        this.#formElem = this.#szuloElem.children("form")
        this.#urlapOsszerak();
        this.submitElem = $("#submit")
        this.submitElem.on("click", (event)=>{
            event.preventDefault();
            this.#urlapElemLista.forEach(elem => {
                console.log(elem);
                console.log(elem.valid);
            })
        });
    }

    #urlapOsszerak() {
        for (const key in this.#leiro) {
            switch(this.#leiro[key].tipus){
                case "text":
                    this.#urlapElemLista.push(new textUrlapElem(key, this.#leiro[key], this.#formElem));
                    break;
                case "number":
                    this.#numElem(key);
                    break;
                default:
                    console.log("Ez az urlap meg nem keszult el");

            }
        }
        let text = "<input type='submit' id = 'submit' value = 'OK' >"
        this.#formElem.append(text);
    
    }


    #numElem(key){
        let txt = `
            <div class="mb-3 mt-3">
             <label for="${key}" class = "form-label">${this.#leiro[key].megjelenes}
             <input type = "${this.#leiro[key].tipus}" class = "from-control" 
             id = "${key}" 
             name = "${this.#leiro[key]}" 
             min = "${this.#leiro[key].regex.min}" 
             min = "${this.#leiro[key].regex.max}" 
             value = "${this.#leiro[key].value}"
            </div>`

        this.#formElem.append(txt);
    }
};

export default UrlapView;