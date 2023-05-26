import React from 'react'
import { CreateOrganism, InfoOrganism } from '../../Organism'
import lang from '../../Lang/Fr/fr'

export default function TemplateCreate(props: any) {

    return (
        <div className='ds-h-100'>
            <CreateOrganism condSaveNew={props.condSaveNew} text={props.tabName} addFieldsCancel={props.addFieldsCancel} addFieldsSaveNew={props.addFieldsSaveNew} addFieldsSave={props.addFieldsSave} />
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
