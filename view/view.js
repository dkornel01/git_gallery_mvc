class NagyKepView {
    #kep
    #szuloElem
    constructor(kep,szuloElem){
        this.#kep=kep;
        this.#szuloElem=szuloElem
        this.#htmlOsszerak()
        this.balGombElem=$("#bal")
        this.jobbGombElem=$("#jobb")
        this.NagyKepHelye=$("#nagykephelye")
        this.balGombElem.on("click",()=>{
            this.#sajatEsemenykezelo("bal")
        })
        this.jobbGombElem.on("click",()=>{
            this.#sajatEsemenykezelo("jobb")
        })
    }
    #Nagykepcsere(kep){
        
    }
    #htmlOsszerak(){
        let txt="<button class='bal'>BAL</button>";
        txt+=`
        <div class="card">
        <div class="card-header">Header</div>
        <div class="card-body">img scr="${this.#kep} class="img-tumbhnail</div>
        <div class="card-footer">Footer</div
        </div>
        `
        txt+="<button id='Jobb'>JOBB</button>";
        this.szuloElem.html(txt)
    }
    #sajatEsemenykezelo(esemenynev){
        console.log(esemenynev)
        const esemenynev=new CustomEvent(esemenynev)
    }
}
export default NagyKepView;