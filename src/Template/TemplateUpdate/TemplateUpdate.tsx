import React from 'react'
import { InfoOrganism } from '../../Organism'
import UpdateOrganism from '../../Organism/UpdateOrganism/UpdateOrganism'

export default function TemplateUpdate(props: any) {

    return (
        <div className='ds-h-100'>
            <UpdateOrganism text={props.tabName} addFieldsCancel={props.addFieldsCancel} addFieldsSave={props.addFieldsSave} />
            <div className='ds-h-100 ds-flex'>
                <InfoOrganism
                    currentInfo={props.currentInfo}
                    setCurrentInfo={props.setCurrentInfo}
                    onChangeInfoAction={props.onChangeInfoAction}
                    listInfo={props.tabList}
                />
                <div className='ds-w-100 ds-h-80 scroll'>
                    {props.onChangeInfoAction()}
                </div>
            </div>
        </div>
    )
}
