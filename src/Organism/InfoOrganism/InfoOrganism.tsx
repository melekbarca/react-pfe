import React, { useState } from 'react'
import { Text } from '../../DesignSystem'
export default function InfoOrganism(props: any) {
    const onChangeInfo = (index: number) => {
        props.setCurrentInfo(index)
    }
    const renderClassName = (className: string, effectClassName: string, index: number) => {
        if (props.currentInfo === index) {
            return className + " " + effectClassName
        }
        return className
    }
    return (
        <div className='ds-w-25 ds-h-80 ds-flex-col col-space-20 ds-m-30 create-right-border'>
            {
                props?.listInfo?.map((item: string, index: number) => {
                    return (
                        <div className={renderClassName('ds-w-90', "", index)}>
                            <Text
                                text={item}
                                className={renderClassName("subtitle-2 ds-mb-1 cursor tabPosition", "ds-bg-primary50 ds-borad-8 tabClicked", index)}
                                onClick={() => onChangeInfo(index)}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}
