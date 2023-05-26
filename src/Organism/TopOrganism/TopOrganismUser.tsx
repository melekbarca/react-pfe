import React, { useContext } from 'react'
import { Button, Input } from "../../DesignSystem"
import { LangContext } from '../../Lang/Provider/Provider'
import { ITopOrganism } from '../../Interfaces'
import { Size, Type } from "@piximind/ds-p-23/lib/esn/Interfaces/Atoms/IAtomButton/IAtomButton"
import { useNavigate } from 'react-router-dom'
import { ESizeInput } from "../../DesignSystem/Types/Types"
import { CommonFunction } from '../../Common'
export default function TopOrganismUser({ listCheckbox, ...props }: ITopOrganism) {
    const lang = useContext(LangContext)
    const navigate = useNavigate()
    return (
        <>
            <div className="ds-w-80 ds-pr-10 ds-dl-10 ds-flex-row col-space-10" >
                <div className='ds-flex'>
                    {listCheckbox.length !== 1 ? null : (
                        <div className="ds-m-5 ds-flex-row" >
                            <Button
                                icon='pencil'
                                className="buttonIcon"
                                type={Type.secondary}
                                isRightIcon={false}
                                size={Size.small}
                            // onClick={(e: any) => { navigate(`updateUser/${props.listCheckbox[0]}`) }}
                            />
                        </div>
                    )}
                    {listCheckbox.length === 0 ? null : (
                        <div className="ds-m-5 ds-flex-row" >
                            <Button
                                icon='server'
                                className="buttonIcon"
                                type={Type.secondary}
                                isRightIcon={false}
                                size={Size.small}
                            />
                        </div>
                    )}
                    {listCheckbox.length === 0 ? null : (
                        <div className="ds-m-5 ds-flex-row ds-mr-30" >
                            <Button
                                icon='trash'
                                className="buttonIcon"
                                type={Type.secondary}
                                isRightIcon={false}
                                size={Size.small}
                                onClick={(e: any) => {
                                    const listId = listCheckbox.join(",")
                                    navigate(`deleteUser/${listId}`)
                                    //submit()
                                    props.setListCheckbox([])
                                }}
                            />
                        </div>
                    )}
                    <Input
                        className="ds-mt-3 inputSearch"
                        inputSize={ESizeInput.small}
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
            {listCheckbox.length !== 0 ? null : (
                <div className="ds-w-20 ds-pr-10 ds-dl-10 ds-flex-row" >
                    <Button text={lang.add}
                        icon='plus-sm'
                        className="buttonAdd"
                        type={Type.secondary}
                        isRightIcon={false}
                        onClick={(e: any) => { navigate("addUser") }}
                    />
                </div>
            )}
        </>
    )
}
