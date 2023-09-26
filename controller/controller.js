import Modell from "../modell/modell.js";
import NagyKepView from "../view/view.js";
class controller{
    constructor(){
        const modell=new Modell()
        const nagyKepView=new NagyKepView(Modell.getAktKep(),$(".nagykep"))
        $(window).on("jobb",()=>{
            modell.job()
            let aktkep=modell.getAktkep()
            nagyKepView.nagyKepCsere(aktKep)
        })
        $(window).on("bal",()=>{
            modell.bal()
            let aktKep=modell.getAktkep()
            nagyKepView.nagyKepCsere(aktKep)
        })
        

    }
}
export default controller