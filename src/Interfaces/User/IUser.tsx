interface IUser {
    id:number
    identifier: string
    image: string
    name:string
    email: string
    password: string
    roleId:number
    role:string
    status:any
    access:string
    lastConnexion : Date
    created_at:Date
    updated_at:Date
    //avatar:string
}
export type {IUser }