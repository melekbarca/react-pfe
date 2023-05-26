import { useForm } from '../../CustomHooks'
import { IUseFormResult } from '../../CustomHooks/Interfaces/Interfaces'
import { EListFunction } from '../../CustomHooks/Types/Types'
import { TemplateTest } from '../../Template'

const PageTest = (): JSX.Element => {
    const { state: form, onChange, onValidForm, isFormValid }: IUseFormResult = useForm({
        isRealTimeValidation: true,
        data: [
            {
                key: "firstName",
                value: "",
                isRealTimeValidation: true,
                rules: [{
                    function: EListFunction.isNotEmpty,
                    messageError: "isEmpty",
                    priority: 0,
                },
                {
                    function: EListFunction.hasUperCase,
                    messageError: "hasUperCase",
                    priority: 10,
                }],
                successMessage: "Yes"
            },
            {
                key: "lastName",
                value: "",
                isRealTimeValidation: true,
                rules: [{
                    function: EListFunction.isNotEmpty,
                    messageError: "isEmptyhgdfghfghf",
                    priority: 0,
                }],
                successMessage: "Yesssssss"
            },
            {
                key: "password",
                value: "",
                isRealTimeValidation: true,
                rules: [{
                    function: EListFunction.isNotEmpty,
                    messageError: "isEmpty",
                    priority: 0,
                }],
                successMessage: "Yes"
            },
            {
                key: "selectSimple",
                value: [],
                rules: [{
                    function: EListFunction.isArray,
                    messageError: "isEmpty",
                    priority: 0,
                }],
                isRealTimeValidation: true,
                successMessage: "Yes"
            },
            {
                key: "selectMulti",
                value: [],
                rules: [{
                    function: EListFunction.isArray,
                    messageError: "isEmpty",
                    priority: 0,
                }],
                isRealTimeValidation: true,
                successMessage: "Yes"
            },
        ]
    })

    return <TemplateTest onChange={onChange} form={form} isFormValid={isFormValid} />
}
export default PageTest
