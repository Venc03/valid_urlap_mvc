import UrlapModell, { urlapleiro } from "../Modell/UrlapModell.js";
import UrlapView from "../View/UrlapView.js";

class UrlapController{
    constructor (){
        const urlapModell = new UrlapModell();
        new UrlapView( $(".urlap"), urlapModell.leiro );
    }
};

export default UrlapController;