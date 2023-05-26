import React, { useContext } from 'react'
import { ESizeInput, Icon, Input, InputFile } from '@piximind/ds-p-23'
import { LangContext } from '../../Lang/Provider/Provider'
import { CommonFunction } from '../../Common/Function/Function'
import { ITemplateAddAccount, ITemplateAddContact } from '../../Interfaces'
import { useDispatch } from 'react-redux'

const GeneralInformationTemplate = ({ form, onChange, users, languages, accounts, onChangeFile, ...props }: ITemplateAddContact): JSX.Element => {

    const lang = useContext(LangContext)

    const dispatch = useDispatch()

    const usersData = users?.map(user => {
        return {
            value: user.id.toString(),
            label: user.name,
        };
    });

    const accountsData = accounts?.map(account => {
        return {
            value: account.id.toString(),
            label: account.name,
        };
    });

    const languagesData = languages?.map(language => {
        return {
            value: language.id.toString(),
            label: language.name,
        };
    });



    return (
        <div className="ds-w-70 ds-h-80 ds-p-30 ds-ml-120 ds-flex-row " >
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
                        label={lang?.contactManager}
                        inputSize={ESizeInput.small}
                        isSelect
                        isClerable
                        isSearch
                        onChangeSelect={(e: Array<string>) => onChange({
                            key: "contactManager",
                            value: e
                        })}
                        selectOption={usersData}
                        {...CommonFunction.getSelectProps(form?.contactManager)}
                    />
                </div>
                <div className="ds-mb-20" >
                    <Input
                        className="ds-mt-3 inputAdd"
                        label={`${lang?.fullName} *`}
                        inputSize={ESizeInput.small}
                        {...CommonFunction.getInputProps(form?.fullName)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange({
                            key: "fullName",
                            value: e.target.value
                        })}
                    />
                </div>
                <div className="ds-mb-20" >
                    <Input
                        className="ds-mt-3 inputAdd"
                        label={lang?.company}
                        inputSize={ESizeInput.small}
                        isSelect
                        isClerable
                        isSearch
                        onChangeSelect={(e: Array<string>) => onChange({
                            key: "account",
                            value: e
                        })}
                        selectOption={accountsData}
                        {...CommonFunction.getSelectProps(form?.account)}
                        placeholder={lang?.none}
                    />
                </div>
                <div className="ds-mb-20" >
                    <Input
                        className="ds-mt-3 inputAdd"
                        label={lang?.position}
                        inputSize={ESizeInput.small}
                        {...CommonFunction.getInputProps(form?.position)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange({
                            key: "position",
                            value: e.target.value
                        })}
                    />
                </div>
                <div className="ds-mb-20" >
                    <Input
                        className="ds-mt-3 inputAdd"
                        label={lang?.email}
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
                        label={lang?.phone}
                        inputSize={ESizeInput.small}
                        {...CommonFunction.getInputProps(form?.phone)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange({
                            key: "phone",
                            value: e.target.value
                        })}
                    />
                </div>
                <div className="ds-mb-20" >
                    <Input
                        className="ds-mt-3 inputAdd"
                        label={lang?.language}
                        inputSize={ESizeInput.small}
                        isSelect
                        isClerable
                        isSearch
                        onChangeSelect={(e: Array<string>) => onChange({
                            key: "language",
                            value: e
                        })}
                        selectOption={languagesData}
                        {...CommonFunction.getSelectProps(form?.language)}
                        placeholder={lang?.none}
                    />
                </div>
            </div>
            <div className='ds-w-68'>
                <div className="ds-mb-20 ds-flex" >

                    <Input
                        className="ds-mt-3 inputAdd"
                        label={lang?.linkedin}
                        inputSize={ESizeInput.small}
                        {...CommonFunction.getInputProps(form?.linkedin)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange({
                            key: "linkedin",
                            value: e.target.value
                        })}
                    />

                    <div style={{ paddingTop: "28px", paddingLeft: "18px" }}>
                        <Icon
                            icon="plus-sm"
                            className="ds-bg-primary50 ds-borad-16 addField"
                            size="28px"
                            onClick={props.onPlusIconClick}

                        />

                    </div>
                </div>
            </div>

        </div>

    )
}

export default GeneralInformationTemplate
