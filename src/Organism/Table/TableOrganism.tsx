import React, { useContext } from 'react'
import { LangContext } from '../../Lang/Provider/Provider';
import { Table } from '../../DesignSystem';

export default function TableOrganism(props: any) {
    const lang = useContext(LangContext)
    return (
        <div>
            <Table
                className="userstable"
                headers={props.headers}
                actions={[
                    { onClick: () => { }, isDisplayed: true },
                    { label: lang.update, icon: 'pencil', onClick: (e: any, index: number) => { props.onUpdate(e, index) }, isDisplayed: true },
                    { label: lang.toArchive, icon: 'server', onClick: (e: any, index: number) => {props.onArchive(e, index)}, isDisplayed: true },
                    { label: lang.delete, icon: 'trash', onClick: (e: any, index: number) => {props.onDelete(e, index)}, isDisplayed: true },
                ]}
                data={props.dataTable}
                withCheckox={true}
                withPagination={true}
                numberOfPage={6}
                isRightPagination={true}
                iconNavigation={true}
                maxElementInPagination={10}
                listSelectedElement={props.listCheckbox}
                onSelect={(e: any) => { props.setListCheckbox(e) }}
            />
        </div>
    )
}
