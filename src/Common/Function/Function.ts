import { IElementState } from "../../CustomHooks/Interfaces/Interfaces"
import { store } from "../../Redux/Store/Store";

class CommonFunction {
    private static instance: CommonFunction;
    constructor() { }
    public static getInstance(): CommonFunction {
        if (!CommonFunction.instance) {
            CommonFunction.instance = new CommonFunction();
        }
        return CommonFunction.instance;
    }
    static createHeaders = ({ withToken = true, formData = false }) => {
        const header = new Headers()
        if (!formData) {
            header.set('Content-Type', 'application/json')
            header.set('accept', 'application/json')
        }
        if (withToken) {
            const accessToken = store.getState().auth.accessToken
            header.set("Authorization", 'Bearer ' + accessToken)
        }
        return header
    }
    static getInputProps(state: IElementState) {
        if (state && state.value) {
            return {
                value: state.value.toString(),
                isInvalid: state.isInvalid,
                isValid: state.isValid,
                success: state.successMessage,
                error: state.errorMessage,
            }
        }
        return {
            value: '',
            isInvalid: false,
            isValid: false,
            success: '',
            error: '',
        }
    }

    static getSelectProps(state: IElementState) {
        let value: Array<string> = []
        if (state.value) {
            if (!Array.isArray(state.value)) {
                value = []
            } else {
                value = state.value
            }
        } else {
            value = []
        }
        return {
            selectValue: value ? value : [],
            isInvalid: state.isInvalid,
            isValid: state.isValid,
            success: state.successMessage,
            error: state.errorMessage,
        }
    }
}

export { CommonFunction }