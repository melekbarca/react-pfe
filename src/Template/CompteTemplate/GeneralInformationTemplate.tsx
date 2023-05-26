import React, { useContext } from 'react'
import { ESizeInput, IAtomSpinner, Icon, Input, InputFile, Spinner, TypeButton, TypeInputFile, colors } from '@piximind/ds-p-23'
import { LangContext } from '../../Lang/Provider/Provider'
import { CommonFunction } from '../../Common/Function/Function'
import { ITemplateAddAccount } from '../../Interfaces'
import { useDispatch } from 'react-redux'
import { closeModal, openModal } from '../../Redux/Reducers/ModalReducer/ModalReducer'

const GeneralInformationTemplate = ({ form, onChange, sectors, subsidiaries, activities, users, languages, selectedActivities, setSelectedActivities, file, setFile, isLoaded, ...props }: ITemplateAddAccount): JSX.Element => {

    const lang = useContext(LangContext)

    const dispatch = useDispatch()


    const onCloseModal = () => {
        dispatch(closeModal())
    }

    const sectorsData = sectors?.map(sector => {
        return {
            value: sector.id.toString(),
            label: sector.name,
        };
    });

    const subsidiariesData = subsidiaries?.map(subsidiary => {
        return {
            value: subsidiary.id.toString(),
            label: subsidiary.name,
        };
    });

    const activitiesData = activities?.map(activity => {
        return {
            value: activity.id.toString(),
            label: activity.name,
        };
    });

    const usersData = users?.map(user => {
        return {
            value: user.id.toString(),
            label: user.name,
        };
    });

    const languagesData = languages?.map(language => {
        return {
            value: language.id.toString(),
            label: language.name,
        };
    });

    const onChangeFile = (file: any) => {
        setFile(file[0])
    }
    const spinnerProps: IAtomSpinner = {
        color: colors.primary,
        height: 40,
        width: 40,
        type: TypeButton.primary,
        className: "loader"
    }

    if (isLoaded === true) {
        return (
            <div className='ds-w-100 ds-p-40'>
                <div className="ds-flex-col ds-center ds-h-100 color">
                    <Spinner {...spinnerProps} />
                    <p>{lang.wait}</p>
                </div>
            </div>
        )
    }
    return (
        <div className="ds-w-70 ds-h-80 ds-p-30 ds-ml-120 ds-flex-row " >
            <div className="ds-w-60 " >
                <InputFile
                    text=""
                    //type={TypeInputFile.type2}
                    className="ds-flex ds-justify-center ds-align-center "
                    containerClassName="ds-flex-col ds-align-center ds-justify-center "
                    onChange={onChangeFile}
                />
                <div className="ds-mb-20" >
                    <Input
                        className="ds-mt-3 inputAdd"
                        label={lang?.accountManager}
                        inputSize={ESizeInput.small}
                        isSelect
                        isClerable
                        isSearch
                        onChangeSelect={(e: Array<string>) => onChange({
                            key: "accountManager",
                            value: e
                        })}
                        selectOption={usersData}
                        {...CommonFunction.getSelectProps(form?.accountManager)}
                    />
                </div>
                <div className="ds-mb-20" >
                    <Input
                        className="ds-mt-3 inputAdd"
                        label={`${lang?.accountName} *`}
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
                        label={lang?.sector}
                        inputSize={ESizeInput.small}
                        isSelect
                        isClerable
                        isSearch
                        onChangeSelect={(e: Array<string>) => onChange({
                            key: "sector",
                            value: e
                        })}
                        selectOption={sectorsData}
                        {...CommonFunction.getSelectProps(form?.sector)}
                        placeholder={lang?.none}
                    />
                </div>
                <div className="ds-mb-20" >
                    <Input
                        className="ds-mt-3 inputAdd"
                        label={lang?.activity}
                        inputSize={ESizeInput.small}
                        isSelect
                        isMulti
                        isClerable
                        isSearch
                        onChangeSelect={(e: Array<string>) => {
                            onChange({
                                key: "activities",
                                value: e
                            })
                            setSelectedActivities(e)
                        }}
                        selectOption={activitiesData}
                        {...CommonFunction.getSelectProps(form?.activities)}
                        placeholder={lang?.none}
                    />
                </div>
                <div className="ds-mb-20" >
                    <Input
                        className="ds-mt-3 inputAdd"
                        label={lang?.subsidiary}
                        inputSize={ESizeInput.small}
                        isSelect
                        isClerable
                        isSearch
                        onChangeSelect={(e: Array<string>) => onChange({
                            key: "subsidiary",
                            value: e
                        })}
                        selectOption={subsidiariesData}
                        {...CommonFunction.getSelectProps(form?.subsidiary)}
                        placeholder={lang?.none}
                    />
                </div>
                <div className="ds-mb-20" >
                    <Input
                        className="ds-mt-3 inputAdd"
                        label={lang?.webSite}
                        inputSize={ESizeInput.small}
                        {...CommonFunction.getInputProps(form?.website)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange({
                            key: "website",
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
                            className="ds-bg-primary50 ds-borad-16 addField ds-pointer"
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
