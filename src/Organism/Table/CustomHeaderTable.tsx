import { useUpdateEffect } from '@piximind/custom-hook'
import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { setHeader } from '../../Redux/Reducers'
import { LangContext } from '../../Lang/Provider/Provider'

export default function CustomHeaderTable(modifiedHeader: [], originHeaders: [], tableName: string) {
    const lang = useContext(LangContext)
    const dispatch = useDispatch()
    useUpdateEffect(() => {
        const headerKey = modifiedHeader?.map((item: any) => {
            return item.key
        })
        const newLangHeader = originHeaders?.filter((item: any) => {
            return (
                headerKey?.includes(item.key)
            )
        })
        dispatch(setHeader({ tableHeader: newLangHeader, tableName: tableName }))
    }, [lang])
}
