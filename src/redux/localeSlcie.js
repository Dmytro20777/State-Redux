

export const selectLang = newLang => {
    return {
        type: 'locale/selectLang',
        payload: newLang
    }
}

const localeItitialState = {
    lang: 'uk',
};

export const localReducer = (state = localeItitialState, action) => {

    switch (action.type) {

        case 'locale/selectLang':
            return {
                ...state,
                lang: action.payload,
            };

        default:
            return state;
    }

}