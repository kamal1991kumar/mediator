class InputFieldWidget {
    constructor() {
        this.target = null;
        this.value = '';
        this.MD = null;
    }

    init( MD ) {
        this.MD = MD;
    }

    render( id ) {
        this.target = document.querySelector( id );
        this.target.innerHTML = `<input type='text' value='${this.value}' />`;
        this.bindEventOnInput();
    };

    bindEventOnInput() {
        const input = this.target.querySelector( 'input' );
        input.addEventListener( 'input', this.onChange.bind( this ) );
    }

    onChange( event ) {
        this.value = event.currentTarget.value;
        this.MD.trigger( 'PRINT_INPUT_VALUE', this.value );
    }

};

window.inputField =  new InputFieldWidget();