import { useReducer } from 'react';

enum stateApi {
  FETCH_INIT,
  FETCH_SUCCESS,
  FETCH_FAILURE,
}

const dataFetchReducer = (state:any, action:any) => {
  switch(action.type) {
    case stateApi.FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case stateApi.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case stateApi.FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: action.payload
      };
    default:
      throw new Error();
  }
}

const Index = (api:any, initialData: any[] | any) => {
  const [ state, dispatch ] = useReducer(dataFetchReducer,{
    isLoading: false,
    isError: false,
    data: initialData,
  })
  // useEffect(()=> {
    let didCancel = false;
    const fetchData = async (params?: any) => {
      dispatch({ type: stateApi.FETCH_INIT });
      try {
        let result;
          result = await api.execute(params);
        if(result._success === false) {
          dispatch({ type: stateApi.FETCH_FAILURE, payload: 'error' });
        } else {
          if (!didCancel) {
            dispatch({ type: stateApi.FETCH_SUCCESS, payload: result });
          }
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: stateApi.FETCH_FAILURE, payload: error.response });
        }
      }
    }
    // fetchData();
    // return () => {
    //   didCancel = true;
    // }
  // })
  return [{...state, fetchData}];
}

export default Index;