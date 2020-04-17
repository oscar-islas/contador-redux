export const contadorReducer = (previuousState = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return previuousState + 1; 
        case 'DECREMENT':
            return previuousState - 1;           
        default:
            return previuousState;
    }
}