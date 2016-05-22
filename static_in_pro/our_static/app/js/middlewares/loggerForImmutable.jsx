const loggerForImmutable = ({ getState }) => next => action => {

    function mapStoreImmutableToJs(store_object){
        let key_array = Object.keys(store_object)

        return key_array.reduce((pV, cV, cI) => {
            pV[cV] = store_object[cV].toJS()
            return pV
        }, {})
    }

    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', mapStoreImmutableToJs(getState()))

    return result
}

export default loggerForImmutable
