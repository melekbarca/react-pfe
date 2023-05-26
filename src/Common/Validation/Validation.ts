import { IElementState } from "../../CustomHooks/Interfaces/Interfaces"

class CommonValidation {
    private static instance: CommonValidation;
    constructor() { }
    public static getInstance(): CommonValidation {
        if (!CommonValidation.instance) {
            CommonValidation.instance = new CommonValidation();
        }
        return CommonValidation.instance;
    }
}

export { CommonValidation }