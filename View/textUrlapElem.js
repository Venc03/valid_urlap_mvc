class textUrlapElem{

    #key=""
    #leiro = {};
    #value;
    constructor(key, leiro, szuloElem){
        this.#key = key;
        this.#leiro = leiro;
        this.formElem = szuloElem;
        this.#textElem();
        this.inputElem = $(`#${this.#key}`)
        this.validElem = this.formElem.children("div:last-child").children(".valid");
        this.invalidElem = this.formElem.children("div:last-child").children(".invalid");
        console.log(this.formElem)
        console.log(this.validElem)
        

        this.inputElem.on("keyup", ()=>{
            this.#value = this.inputElem.val();
            let reg = this.#leiro.regex;
            let regObj = new RegExp(reg);
            console.log(regObj.test(this.#value));
            if(regObj.test(this.#value)){
                this.validElem.removeClass("elrejt");
                this.invalidElem.addClass("elrejt");
            }else{
                this.validElem.addClass("elrejt");
                this.invalidElem.removeClass("elrejt");
            }
        });
    }

    get valid(){
        return this.validElem;
    }

    #textElem(){
        let txt = `
            <div class="mb-3 mt-3">
             <label for="${this.#key}" class = "form-label">${this.#leiro.megjelenes}</label>
             <input type = "${this.#leiro.tipus}" class = "from-control" 
             id = "${this.#key}" 
             name = "${this.#key}" 
             placeholder = "${this.#leiro.placeholder}" 
             pattern = "${this.#leiro.regex}" 
             value = "${this.#leiro.value}">

            <div class = "valid elrejt">${this.#leiro.valid}</div>
            <div class = "invalid elrejt">${this.#leiro.invalid}</div>
            </div>`

        this.formElem.append(txt);
    }
};

export default textUrlapElem;