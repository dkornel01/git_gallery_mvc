import { keplista } from "../kepek/adat.js";
class Modell{
    #lista=[]
    #id
    constructor(){
        this.#lista=keplista
        this.#id=0;
    }
    getList(){
        return this.#lista;
    }
    getid(){
        return this.#id
    }
    getAktkep(){
        return this.#lista[this.#id];
    }
    job(){
        this.#id++
        if (this.#id>=this.#lista.length){
            this.#id = 0
        }
    }
    bal(){
        this.#id++
        if (this.#id < 0){
            this.#id=this.#lista.length- 1
        }
    }
}
export default Modell