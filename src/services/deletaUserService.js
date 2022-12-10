import http from "./httpService";

export const deleteUser=(id)=>{
    return http.delete(`/user/${id}`)
}