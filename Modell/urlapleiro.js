export const urlapleiro = {
    nev:{
        megjelenes: "Név",
        tipus: "text",
        value: "",
        placeholder: "valaki vagyok",
        regex:"[A-Z][a-z]{2,15}",
        valid:"Valid a szoveg",
        invalid:"Név nagybetuvel kezdodik, legalabb 3 betu.",
    },

    szulEv:{
        megjelenes: "Születési év",
        tipus: "number",
        value: "2000",
        regex:{
            min:1900,
            max:2023,
        },
        validalas:""
    }

}