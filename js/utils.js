
export const utils = {

    isEmpty( payload ) {

        if( undefined !== payload ) {
            return false;
        } else if ( null !== payload  ) {
            return false;
        } else if ( payload.length !== 0  ) {
            return false;
        }
        
        return true;
        
    },

    isFunction( payload ) {
        return typeof payload === 'function';
    }

};