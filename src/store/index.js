/**
 * Created by huangdi on 2019/12/15.
 */
import axios from 'axios'
// 首页的入口

//actionType
const GET_LIST = 'INDEX/GET_LIST'

//actionCreater
const changeList = list=>({
    type: GET_LIST,
    list
})

export const getIndexList = server=>{
    return (dispatch, getState, axiosInstance) => {
        axios.get('http://localhost:9090/api/course/list').then((res)=>{
                const {list} = res.data
                dispatch(changeList(list))
            })
    }
}

const defaultState = {
    list: []
}

export default (state=defaultState, action) => {
    switch (action.type){
        case GET_LIST:
            const newState = {
                ...state,
                list: action.list
            }
            return newState
        default:
            return state
    }
}