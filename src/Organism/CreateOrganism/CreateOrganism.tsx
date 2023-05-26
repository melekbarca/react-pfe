import React, { useContext } from 'react'
import { Button, Text } from '../../DesignSystem'
import { LangContext } from '../../Lang/Provider/Provider'
import { TypeBtn } from '../../Interfaces'
import { TextType, Type } from '@piximind/ds-p-23/lib/esn/Interfaces'

export default function CreateOrganism(props: any) {
    const lang = useContext(LangContext)
    if (props.condSaveNew === "update") {
        return (
            <>
                <div className='ds-w-100 ds-p-30 ds-pb-5 ds-flex ds-justify-between'>
                    <div className='ds-w-50'>
                        <Text text={props.text} className="type-5" type={TextType['subtitle-1']} />
                    </div>
                    <div className='ds-w-50 ds-flex col-space-20'>
                        <Button text={lang.cancel} onClick={props.addFieldsCancel} className="ds-w-100" type={Type.secondary} />
                        <Button text={lang.save} onClick={props.addFieldsSave} className="ds-w-100" />
                    </div>
                </div>
                <div className='ds-mr-30 ds-ml-30 create-bottom-border'></div>
            </>
        )
    }
    else {
        return (
            <>
                <div className='ds-w-100 ds-p-30 ds-pb-5 ds-flex ds-justify-between'>
                    <div className='ds-w-50'>
                        <Text text={props.text} className="type-5" type={TextType['subtitle-1']} />
                    </div>
                    <div className='ds-w-50 ds-flex col-space-20'>
                        <Button text={lang.cancel} onClick={props.addFieldsCancel} className="ds-w-100" type={Type.secondary} />
                        <Button text={lang.saveNew} onClick={props.addFieldsSaveNew} className="ds-w-100" type={Type.secondary} />
                        <Button text={lang.save} onClick={props.addFieldsSave} className="ds-w-100" />
                    </div>
                </div>
                <div className='ds-mr-30 ds-ml-30 create-bottom-border'></div>
            </>
        )
    }

}
