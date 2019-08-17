class session {
    constructor(key, value) {
      this.key = key;
      this.value = value;
    }
    setItem() {
        sessionStorage.setItem(` ${this.key} `,` ${this.value} `);
    }
    getItem() {
        let value = sessionStorage.getItem(` ${this.key} `,` ${this.value} `);
        if (value===null){
            console.log('ничего нет' )
        }else
        console.log(value )
    }
}


function sessionStorageadd (form5) {
    const set = new session(form5.key.value, form5.value.value);
    set.setItem()
   }
   
   function sessionStorageget (form6) {
    const set = new session(form6.key.value);
    set.getItem()
   }