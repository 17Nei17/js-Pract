//сделать класс работающий с localStorage предоставляющий CRUD операции c localStorage
class workLocal {
    constructor(key, value) {
      this.key = key;
      this.value = value;
    }
    setItem() {
       localStorage.setItem(` ${this.key} `,` ${this.value} `);
    }
    getItem() {
        let value = localStorage.getItem(` ${this.key} `,` ${this.value} `);
        if (value===null){
            console.log('ничего нет' )
        }else
        console.log(value )
    }
    removeItem() {
        localStorage.removeItem(` ${this.key} `);
    }
}
 function localStorag (form) {
   const set = new workLocal(form.key.value, form.value.value);
   set.setItem()
  }

 function exctract (form2) {
    const set = new workLocal(form2.key.value);
    set.getItem()
   }

   function remove (form3) {
    const set = new workLocal(form3.key.value);
    set.removeItem()
   }
   function clearAll (form4) {
    localStorage.clear();
   }
   
