import { Iterable } from 'immutable'

const loggerForImmutable = ({ getState }) => next => action => {

    function mapStoreImmutableToJs(store_object){
        let key_array = Object.keys(store_object)

        return key_array.reduce((pV, cV, cI) => {
          if(Iterable.isIterable(store_object[cV])){
            pV[cV] = store_object[cV].toJS()
          }else{
            pV[cV] = store_object[cV]
          }

          return pV
        }, {})
    }

    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', mapStoreImmutableToJs(getState()))

    return result
}

export default loggerForImmutable
