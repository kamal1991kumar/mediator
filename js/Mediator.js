
class Mediator {
    constructor() {
        this.MEvents = {};
    }

    on( eventName, callback ) {
        if( ! utils.isEmpty( eventName ) ) {
            if( utils.isEmpty( this.MEvents[ eventName ] ) ) {

                if( utils.isFunction( callback ) ) {
                    this.MEvents[ eventName ] = callback;
                } else {
                    console.error( 'Callback should be a function' );
                }
                
            } else {
                console.error( 'Event name already exist', this.MEvents[ eventName ] );
            }

        } else {
            console.error( 'Event name is not found.' );
        }
    }

    off( eventName ) {
        if( ! utils.isEmpty( eventName ) ) {
            if( ! utils.isEmpty( this.MEvents[ eventName ] ) ) {
                delete this.MEvents[ eventName ];   
            }

        } else {
            console.error( 'Event name is not found.' );
        }
    }

    trigger( eventName, data = '' ) {

        if( ! utils.isEmpty( eventName ) ) {
            if( ! utils.isEmpty( this.MEvents[ eventName ] ) ) {
                this.MEvents[ eventName ]( data );
            } else {
                console.error( 'Event name is not register with mediator.', this.MEvents[ eventName ] );
            }
        } else {
            console.error( 'Event name is not found.' );
        }

    }

};

const utils = {

    isEmpty( payload ) {

        if( undefined === payload ) {
            return true;
        } else if ( null === payload  ) {
            return true;
        } else if ( payload.length === 0  ) {
            return true;
        }
        
        return false;
        
    },

    isFunction( payload ) {
        return typeof payload === 'function';
    }

}

window.mediator =  new Mediator();
