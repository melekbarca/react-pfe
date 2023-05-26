import { ESizeInput, TextType } from "@piximind/ds-p-23"
import { CommonFunction } from "../../Common"
import { Input, Text } from "../../DesignSystem"
import { useContext } from "react"
import { LangContext } from "../../Lang/Provider/Provider"
import { IFormModalOrganism } from "../../Interfaces/Modal"
const FormModalOrganism = ({
    form,
    onChange,
    ...props
}: IFormModalOrganism): JSX.Element => {
    const lang = useContext(LangContext)
    return (
        <div className="ds-flex-col ds-align-center ds-w-100 ds-h-100">
            <Text type={TextType["type-6"]} text={props.title} />
            {form?.fieldLabel && (
                <Input
                    placeholder={lang.enterFieldName}
                    inputSize={ESizeInput.medium}
                    label={`${lang?.fieldLabel} *`}
                    labelClassName="ds-text-weight400 ds-text-size-16 ds-text-line-28"
                    containerClassName="ds-pb-16"
                    {...CommonFunction.getInputProps(form?.fieldLabel)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        onChange({
                            key: "fieldLabel",
                            value: e.target.value
                        })
                    }
                />
            )}
            {form?.fieldType && (
                <Input
                    placeholder={lang.chooseFieldType}
                    inputSize={ESizeInput.medium}
                    label={`${lang?.type} *`}
                    labelClassName="ds-text-weight400 ds-text-size-16 ds-text-line-28"
                    containerClassName="ds-pb-16"
                    {...CommonFunction.getInputProps(form?.fieldType)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        onChange({
                            key: "fieldType",
                            value: e.target.value
                        })
                    }
                />
            )}
        </div>
    )
}
export default FormModalOrganism