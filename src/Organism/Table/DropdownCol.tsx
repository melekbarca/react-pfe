import React, { useContext } from 'react'
import { Checkbox, Input, Text } from '../../DesignSystem'
import { LangContext } from '../../Lang/Provider/Provider'

export default function DropdownCol(props: any) {
    const lang = useContext(LangContext)
    return (
        <div>
            <Input
                placeholder={lang.search}
                value={props.search}
                onChange={(e: any) => { props.handleChange(e.target.value) }}
                listIcons={[
                    {
                        icon: "search",
                        isLeft: true
                    }
                ]}
            />
            {
                props?.columns?.map((item: any, index: number) => {
                    if (item.label)
                        return (
                            <div className='ds-flex ds-justify-start ds-align-center ds-pt-10'>
                                <Checkbox
                                    checked={props.checkedCol?.includes(item.key)}
                                    onClick={() => props.onCheckCol(item.key)} />
                                <Text text={item.label} className="type-6 ds-m-1" />
                            </div>
                        )
                })
            }
        </div>
    )
}
