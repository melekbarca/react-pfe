import React, { useContext } from 'react'
import { ESizeInput, Input } from '@piximind/ds-p-23'
import { LangContext } from '../../Lang/Provider/Provider'
import { CommonFunction } from '../../Common/Function/Function'
import { ITemplateAddAccount, ITemplateAddContact } from '../../Interfaces'

const AddressInformationTemplate = ({ form, onChange, countries, cities, selectedCountry, setSelectedCountry, ...props }: ITemplateAddContact): JSX.Element => {
    const lang = useContext(LangContext)
    const countriesData = countries?.map(country => {
        return {
            value: country.name,
            label: country.name,
        };

    });
    const citiesData = cities?.map(city => {
        return {
            value: city.name,
            label: city.name,
        };
    });
    return (
        <div className="ds-w-70 ds-h-80 ds-p-30 ds-ml-120 ds-flex-row " >
            <div className="ds-w-60" >
                <div className="ds-mb-20" >
                    <Input
                        className="ds-mt-3 inputAdd"
                        label={lang?.address}
                        inputSize={ESizeInput.small}
                        {...CommonFunction.getInputProps(form?.address)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange({
                            key: "address",
                            value: e.target.value
                        })}
                    />
                </div>
                <div className="ds-mb-20" >
                    <Input
                        className="ds-mt-3 inputAdd"
                        label={lang?.country}
                        inputSize={ESizeInput.small}
                        isSelect
                        isClerable
                        isSearch
                        onChangeSelect={(e: any) => {
                            onChange({
                                key: "country",
                                value: e
                            })
                            setSelectedCountry(e)
                        }}
                        selectOption={countriesData}
                        {...CommonFunction.getSelectProps(form?.country)}
                        placeholder={lang?.none}
                    />
                </div>
                <div className="ds-mb-20" >
                    <Input
                        className="ds-mt-3 inputAdd"
                        label={lang?.postalCode}
                        inputSize={ESizeInput.small}
                        {...CommonFunction.getInputProps(form?.postalcode)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange({
                            key: "postalcode",
                            value: e.target.value
                        })}
                    />
                </div>
                <div className="ds-mb-20" >
                    <Input
                        className="ds-mt-3 inputAdd"
                        label={lang?.city}
                        inputSize={ESizeInput.small}
                        isSelect
                        isClerable
                        isSearch
                        onChangeSelect={(e: Array<string>) => onChange({
                            key: "city",
                            value: e
                        })}
                        selectOption={citiesData}
                        {...CommonFunction.getSelectProps(form?.city)}
                        placeholder={lang?.none}
                    />
                </div>
            </div>
        </div>
    )
}

export default AddressInformationTemplate
