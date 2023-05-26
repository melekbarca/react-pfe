import React, { useState } from 'react'
import { Icon } from '../../DesignSystem'

export default function IconDropdown(props: any) {
    const [showDropdown, setShowDropdown] = useState<boolean>(false)

    return (
        <div>
            <Icon
                size={30}
                onClick={() => { setShowDropdown(!showDropdown) }}
                icon="adjustments"
                className={`setting-col ${props.iconClassname}`}
            />
            {
                showDropdown &&
                <div className={`drop-down ${props.dropdwonClassname}`}>
                    {props.items?.map((item: any) => {
                        return (
                            <div className='li' onClick={() => item.action()}>{item.text}</div>
                        )
                    })}
                </div>
            }
        </div >
    )
}
