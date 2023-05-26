import { useContext, useState } from 'react'
import { CustomHeaderTable } from '../../Organism'
import { Table } from '../../DesignSystem'
import { LangContext } from '../../Lang/Provider/Provider'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../../Redux/Reducers/ModalReducer/ModalReducer'
import { RootState } from '../../Interfaces'
import { IconDropdown } from '../../Molecules'
import { ELang, IAtomSpinner, Spinner, TypeButton, colors } from '@piximind/ds-p-23'
import TopOrganismUser from '../../Organism/TopOrganism/TopOrganismUser'

export default function TemplateUsers(props: any) {
    const lang = useContext(LangContext)
    const [listCheckbox, setListCheckbox] = useState([])
    const { userTable } = useSelector((state: RootState) => state?.tableHeader)
    let sortfield = ""
    const dispatch = useDispatch()
    CustomHeaderTable(userTable, props.headers, "user")
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
                    <TopOrganismUser
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
                <TopOrganismUser
                    listCheckbox={listCheckbox}
                    {...props}
                />
            </div>
            <div className='ds-pt-30'>
                <Table
                    lang={ELang.fr}
                    className="ds-p-20 ds-text-size-14 userstable"
                    headers={(userTable?.length !== 0 && userTable) ? userTable : props.headers}
                    actions={[
                        { onClick: () => { }, isDisplayed: true },
                        { label: lang.update, icon: 'pencil', onClick: (e: any, index: number) => { props.onUpdate(e, index) }, isDisplayed: true },
                        { label: lang.toArchive, icon: 'server', onClick: (e: any, index: number) => { props.onArchive(e, index) }, isDisplayed: true },
                        { label: lang.delete, icon: 'trash', onClick: (e: any, index: number) => { props.onDelete(e, index) }, isDisplayed: true },
                    ]}
                    data={props.dataTable}
                    onSort={(e: any) => {
                        if (e.key === "role") {
                            sortfield = "roles.name"
                        } else {
                            sortfield = e.key
                        }
                        props.setSortField(sortfield)
                        props.updateUsersSort()
                    }}
                    onPaginate={(e: number) => {
                        props.setPage(e)
                    }}

                    page={props.page}
                    withCheckox={true}
                    withPagination={true}
                    numberOfPage={props.numberOfPage}
                    isRightPagination={true}
                    iconNavigation={true}
                    maxElementInPagination={4}
                    listSelectedElement={listCheckbox}
                    onSelect={(e: any) => {
                        setListCheckbox(e)
                    }}
                />
                <IconDropdown
                    items={[
                        { text: lang.managingColumns, action: () => { dispatch(openModal({ name: "modalColRef", data: props.headers, tableName: "user" })) } },
                        { text: lang.resettingColumnSizes, action: () => { console.log('action') } },
                    ]}
                    iconClassname={"compte-Col"}
                    dropdwonClassname={"drop-down-pos"}
                />

            </div>
        </div>
    )
}
