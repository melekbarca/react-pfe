import { Api } from "@piximind/api"
import { CommonFunction, Config } from "../../Common"
import { IForgetPass } from "../../Interfaces/ForgetPass/IForgetPass"
import { ILogin } from "../../Interfaces/Login/ILogin"
import { IRegister } from "../../Interfaces/Register/IRgister"
import { IResetPass } from "../../Interfaces/ResetPass/IResetPass"
import { IUpdateUser } from "../../Interfaces/User/IUpdateUser"
import { IgetAllUserByParams } from "../../Interfaces/User/IgetAllUserByParams"
import { IInviteUser } from "../../Interfaces/User/IInviteUser"
import { IAddAccount } from "../../Interfaces/Account/IAddAccount"
import { IgetAllAccountsByParams } from "../../Interfaces/Account/IgetAllAccountsByParams"
import { IgetAllContactsByParams } from "../../Interfaces/Contact/IgetAllContactsByParams"

class AuthAPI {
    _api: Api
    constructor() {
        this._api = new Api(Config.getInstance().API_URL)
    }
    async getUser() {
        return this._api.get("/")
    }

    async getAllUserByParams(body: IgetAllUserByParams) {
        return this._api.post("getAllUserByParams", JSON.stringify(body), CommonFunction.createHeaders({ withToken: true }))
    }

    async activateDesactivateUserAccount(id: number) {
        let formData = new FormData();
        formData.append('id', id.toString());
        return this._api.post("activateDesactivateUserAccount", formData, CommonFunction.createHeaders({ withToken: true, formData: true }))
    }
    async genererPassword() {
        return this._api.get("genererPassword", CommonFunction.createHeaders({ withToken: true }))
    }
    async inviteUser(body: IInviteUser) {
        return this._api.post("inviteUser", JSON.stringify(body), CommonFunction.createHeaders({ withToken: true }))
    }
    async getIndustries() {
        return this._api.get("getAllIndustryIdName", CommonFunction.createHeaders({ withToken: true }))
    }

    async getSubsidiaries() {
        return this._api.get("getAllSubsidiaryIdName", CommonFunction.createHeaders({ withToken: true }))
    }

    async getActivities() {
        return this._api.get("getAllActivityIdName", CommonFunction.createHeaders({ withToken: true }))
    }

    async getCountries() {
        return this._api.get("getAllCountries", CommonFunction.createHeaders({ withToken: true }))
    }

    async getCities(country: string) {
        let formData = new FormData();
        formData.append('country', country);
        return this._api.post("getAllCitiesByCountryName", formData, CommonFunction.createHeaders({ withToken: true, formData: true }))
    }

    async getLanguages() {
        return this._api.get("getAllLanguageIdName", CommonFunction.createHeaders({ withToken: true }))
    }

    async addContact(body: any) {
        return this._api.post("addContact", body, CommonFunction.createHeaders({ withToken: true, formData: true }))
    }

    async getAllContactByParams(body: IgetAllContactsByParams) {
        return this._api.post("getAllContactByParams", JSON.stringify(body), CommonFunction.createHeaders({ withToken: true }))
    }

    async archiveContact(id: any) {
        let formData = new FormData();
        formData.append("id", id);
        return this._api.post("archiveContact", formData, CommonFunction.createHeaders({ withToken: true, formData: true }))
    }

    async deleteContact(id: any) {
        let formData = new FormData();
        formData.append("id", id);
        return this._api.post("deleteContact", formData, CommonFunction.createHeaders({ withToken: true, formData: true }))
    }

    async getAllAccountByParams(body: IgetAllAccountsByParams) {
        return this._api.post("getAllAccountByParams", JSON.stringify(body), CommonFunction.createHeaders({ withToken: true }))
    }

    async addAccount(body: any) {
        return this._api.post("addAccount", body, CommonFunction.createHeaders({ withToken: true, formData: true }))
    }

    async getAccountById(id: any) {
        let formData = new FormData();
        formData.append("id", id);
        return this._api.post("getAccountById", formData, CommonFunction.createHeaders({ withToken: true, formData: true }))
    }

    async updateAccount(body: any) {
        return this._api.post("updateAccount", body, CommonFunction.createHeaders({ withToken: true, formData: true }))
    }

    async deleteAccount(id: any) {
        let formData = new FormData();
        formData.append("id", id);
        return this._api.post("deleteAccount", formData, CommonFunction.createHeaders({ withToken: true, formData: true }))
    }

    async archiveAccount(id: any) {
        let formData = new FormData();
        formData.append("id", id);
        return this._api.post("archiveAccount", formData, CommonFunction.createHeaders({ withToken: true, formData: true }))
    }

    async getAllUserIdName() {
        return this._api.get("getAllUserIdName", CommonFunction.createHeaders({ withToken: true }))
    }

    async getAllAccountIdName() {
        return this._api.get("getAllAccountIdName", CommonFunction.createHeaders({ withToken: true }))
    }

    async getProfiles() {
        return this._api.get("profiles", CommonFunction.createHeaders({ withToken: true }))
    }

    async getRoles() {
        return this._api.get("roles", CommonFunction.createHeaders({ withToken: true }))
    }
    async addUser(body: any) {
        return this._api.post("addUser", body, CommonFunction.createHeaders({ withToken: true, formData: true }))
    }

    async updateUser(body: IUpdateUser) {
        const urlSegments = window.location.pathname.split("/");
        const userId = urlSegments[urlSegments.length - 1];
        return this._api.post("updateUser", JSON.stringify(body), CommonFunction.createHeaders({ withToken: true }))
    }

    async showUser() {
        const urlSegments = window.location.pathname.split("/");
        const userId = urlSegments[urlSegments.length - 1];
        return this._api.post("getUserById", CommonFunction.createHeaders({ withToken: true }))
    }

    async deleteUser(id: string) {
        return this._api.delete(`utilisateurs/${id}`, JSON.stringify(id), CommonFunction.createHeaders({ withToken: true }))
    }

    async login(body: ILogin) {
        return this._api.post("login", JSON.stringify(body), CommonFunction.createHeaders({ withToken: false }))
    }

    async forgetPass(body: IForgetPass) {
        return this._api.post("forgetPass", JSON.stringify(body), CommonFunction.createHeaders({ withToken: false }))
    }

    async resetPass(body: IResetPass) {
        const urlSegments = window.location.pathname.split("/");
        const token = urlSegments[urlSegments.length - 1];
        return this._api.post(`resetPass/${token}`, JSON.stringify(body), CommonFunction.createHeaders({ withToken: false }))
    }

    async verifyToken() {
        const urlSegments = window.location.pathname.split("/");
        const token = urlSegments[urlSegments.length - 1];
        return this._api.get(`resetPass/${token}`, CommonFunction.createHeaders({ withToken: false }))
    }

    async register(body: IRegister) {
        return this._api.post("register", JSON.stringify(body), CommonFunction.createHeaders({ withToken: false }))
    }

    async logout() {
        return this._api.post("logout", CommonFunction.createHeaders({ withToken: true }))
    }
}
export { AuthAPI }