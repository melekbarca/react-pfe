interface IAddUser {
    identifier: string
    name: string
    email: string
    roleId: number
    password: string
    confirmPassword: string
    status: number
    access: number
    generatePassword: number
    inviteUser: number
}
export type { IAddUser }