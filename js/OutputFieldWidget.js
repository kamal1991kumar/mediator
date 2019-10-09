class OutputFieldWidget {
    constructor() {
        this.target = null;
        this.MD = null;
    }
    init( MD ) {
        this.MD = MD;
        this.bind();
    }

    render( id ) {
        this.target = document.querySelector( id );
    }

    bind(){
        this.MD.on( 'PRINT_INPUT_VALUE', this.updateOutput.bind( this ) );
    };

    updateOutput( value ) {
        this.target.innerText = value;
    }
};
window.outputField =  new OutputFieldWidget();