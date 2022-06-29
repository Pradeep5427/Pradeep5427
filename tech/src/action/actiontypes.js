export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";


export const adduser = payload =>{
    return {
        type:'ADD_USER',
        payload 
    };
};

export const updateuser = payload =>{
    return {
        type:'UPDATE_USER',
        payload 
    };
};

export const deleteuser = () =>{
    return {
        type:'DELETE_USER',
        payload 
    };
};