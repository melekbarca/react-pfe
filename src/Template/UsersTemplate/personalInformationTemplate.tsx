import React, { useContext } from 'react'
import { ESizeInput, Input, InputFile } from '@piximind/ds-p-23'
import { LangContext } from '../../Lang/Provider/Provider'
import { CommonFunction } from '../../Common/Function/Function'
import { ITemplateAddUser } from '../../Interfaces'
import { useNavigate } from 'react-router'

const PersonalInformationTemplate = ({ form, onChange, roles, onSubmit, file, setFile, ...props }: ITemplateAddUser): JSX.Element => {
    const lang = useContext(LangContext)
    const navigate = useNavigate()
    const rolesData = roles?.map(role => {
        return {
            value: role.id.toString(),
            label: role.name,
        };
    });
    const onChangeFile = (file: any) => {
        setFile(file[0])
    }
    return (
        <div className="ds-w-70 ds-p-30 ds-ml-120 ds-flex-row " >
            <div className="ds-w-60 " >
                <div className="ds-mb-20" style={{ padding: "10px" }} >
                    <InputFile
                        text=""
                        //type={TypeInputFile.type2}
                        className="ds-flex ds-justify-center ds-align-center "
                        containerClassName="ds-flex-col ds-align-center ds-justify-center "
                        onChange={onChangeFile}
                    />
                </div>
                <div className="ds-mb-20" >
                    <Input
                        className="ds-mt-3 inputAdd"
                        label={`${lang?.identifiant} *`}
                        inputSize={ESizeInput.small}
                        {...CommonFunction.getInputProps(form?.identifier)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange({
                            key: "identifier",
                            value: e.target.value
                        })}
                    />
                </div>
                <div className="ds-mb-20" >
                    <Input
                        className="ds-mt-3 inputAdd"
                        label={`${lang?.userName} *`}
                        inputSize={ESizeInput.small}
                        {...CommonFunction.getInputProps(form?.name)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange({
                            key: "name",
                            value: e.target.value
                        })}
                    />
                </div>
                <div className="ds-mb-20" >
                    <Input
                        className="ds-mt-3 inputAdd"
                        label={`${lang?.mailAdress} *`}
                        inputSize={ESizeInput.small}
                        {...CommonFunction.getInputProps(form?.email)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange({
                            key: "email",
                            value: e.target.value
                        })}
                    />
                </div>
                <div className="ds-mb-20" >
                    <Input
                        className="ds-mt-3 inputAdd"
                        label={`${lang?.role} *`}
                        inputSize={ESizeInput.small}
                        isSelect
                        isClerable
                        isSearch
                        onChangeSelect={(e: Array<string>) => onChange({
                            key: "role",
                            value: e
                        })}
                        selectOption={rolesData}
                        {...CommonFunction.getSelectProps(form?.role)}
                        placeholder={lang?.chooseRole}
                    />
                </div>
            </div>
        </div>
    )
}

export default PersonalInformationTemplate
