import React, { useContext, useState } from 'react'
import { CustomHeaderTable, TableOrganism, TopOrganism } from '../../Organism'
import { Icon, Table } from '../../DesignSystem'
import { LangContext } from '../../Lang/Provider/Provider'
import { Data } from '../../Common'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../../Redux/Reducers/ModalReducer/ModalReducer'
import { RootState } from '../../Interfaces'
import { IconDropdown } from '../../Molecules'
import { ELang, IAtomSpinner, Spinner, TypeButton, colors } from '@piximind/ds-p-23'

export default function TemplateContacts(props: any) {
    const lang = useContext(LangContext)
    const [listCheckbox, setListCheckbox] = useState([])
    const [showDropdown, setShowDropdown] = useState<boolean>(false)
    const { contactTable } = useSelector((state: RootState) => state?.tableHeader)
    CustomHeaderTable(contactTable, props.headers, "contact")
    const dispatch = useDispatch()
    const spinnerProps: IAtomSpinner = {
        color: colors.primary,
        height: 40,
        width: 40,
        type: TypeButton.primary,
        className: "loader"
    }

    if (props.isLoaded === true) {
        return (
            <div className='ds-w-100 ds-p-40'>
                <div className='ds-flex col-space-30'>
                    <TopOrganism
                        listCheckbox={listCheckbox}
                        {...props}
                    />
                </div>
                <div className="ds-flex-col ds-center ds-h-100 color">
                    <Spinner {...spinnerProps} />
                    <p>{lang.wait}</p>
                </div>
            </div>
        )
    }
    return (
        <div className='ds-w-100 ds-p-40'>
            <div className='ds-flex col-space-30'>
                <TopOrganism
                    listCheckbox={listCheckbox}
                    {...props}
                />
            </div>
            <div className='ds-pt-30'>
                <Table
                    lang={ELang.fr}
                    className="ds-p-20 ds-text-size-14 userstable"
                    headers={(contactTable?.length !== 0 && contactTable) ? contactTable : props.headers}
                    actions={[
                        { onClick: () => { }, isDisplayed: true },
                        { label: lang.update, icon: 'pencil', onClick: (e: any, index: number) => { props.onUpdate(e, index) }, isDisplayed: true },
                        { label: lang.toArchive, icon: 'server', onClick: (e: any, index: number) => { props.onArchive(e, index) }, isDisplayed: true },
                        { label: lang.delete, icon: 'trash', onClick: (e: any, index: number) => { props.onDelete(e, index) }, isDisplayed: true },
                    ]}
                    data={props.dataTable}
                    onSort={props.onSort}
                    withCheckox={true}
                    withPagination={true}
                    page={props.page}
                    numberOfPage={props.numberOfPage}
                    isRightPagination={true}
                    iconNavigation={true}
                    maxElementInPagination={10}
                    listSelectedElement={listCheckbox}
                    onSelect={(e: any) => { setListCheckbox(e) }}
                    onPaginate={props.onPaginate}
                />
                <IconDropdown
                    items={[
                        { text: lang.managingColumns, action: () => { dispatch(openModal({ name: "modalColRef", data: props.headers, tableName: "contact" })) } },
                        { text: lang.resettingColumnSizes, action: () => { console.log('action') } },
                    ]}
                    iconClassname={"compte-Col"}
                    dropdwonClassname={"drop-down-pos"}
                />

            </div>
        </div>
    )
}