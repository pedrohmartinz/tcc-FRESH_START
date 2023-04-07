export const initialState ={
    avatar:'',
    favorites:[],
    appointments:[],
    metas:[],
    notas:[],
    nome:'',
    email:''

};

export const UserReducer= (state,action) => {
    switch(action,action){
        case 'setAvatar':
            return {...state, avatar:action.payload.avatar};
        break
        default:
            return state;
    }

}
