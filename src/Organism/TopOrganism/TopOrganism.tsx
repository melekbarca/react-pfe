import React, { useContext } from 'react'
import { Input } from "../../DesignSystem"
import { LangContext } from '../../Lang/Provider/Provider'
import { ITopOrganism } from '../../Interfaces'
import { CommonFunction } from '../../Common'
export default function TopOrganism(props: ITopOrganism) {
    const lang = useContext(LangContext)
    return (
        <>
            <div className='ds-w-60 ds-flex col-space-20 ds-align-center'>
                <div className='ds-w-30 ds-hp-40'>
                    <Input
                        onChangeSelect={(e: any) => { props.onChangeSelect(e, "type") }}
                        isSelect
                        selectOption={props.selectOptionType}
                        selectValue={props.selectValueType}
                    />
                </div>
                <div className='ds-w-70 ds-hp-40'>
                    <Input
                        {...CommonFunction.getInputProps(props.form?.search)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange({
                            key: "search",
                            value: e.target.value
                        })}
                        placeholder={lang.search}
                        listIcons={[
                            {
                                icon: "search",
                                isLeft: true
                            },
                            {
                                icon: "filter",
                                isLeft: false,
                                onClick: () => { }
                            }
                        ]}
                        isSearch
                    />
                </div>
            </div>
            <div className='ds-w-40 ds-flex col-space-20  ds-align-center'>
                <div className='ds-w-50 ds-hp-40'>
                    <Input
                        onChangeSelect={(e: any) => { props.onChangeSelect(e, "create") }}
                        isSelect
                        selectOption={props.selectOptionCreate}
                        selectValue={props.selectValueCreate}
                    />
                </div>
                <div className='ds-w-50 ds-hp-40'>
                    <Input
                        onChangeSelect={(e: any) => { props.onChangeSelect(e, "action") }}
                        isSelect
                        selectOption={props.selectOptionAction}
                        selectValue={props.selectValueAction}
                    />
                </div>
            </div>
        </>
    )
}
