export default (state,action)=>{
    switch(action.type){
        case "ADD_TRANSCATION":return{
            ...state,transcations:[action.payload,...state.transcations]
        }
        case "DELETE_TRANSCATION":return{
            ...state,transcations:state.transcations.filter((t)=>t.id!==action.payload)
        }
        default:
            return state;
    }
}