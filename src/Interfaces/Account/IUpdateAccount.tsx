interface IUpdateAccount {
    statiqueField: {
        id: number
        userId: number
        languageId: number
        name: string
        country: string
        city: string
        industryId: number
        website: string
        email: string
        linkedin: string
        phone: string
        subsidiaryId: number
        address: string
        postalcode: string
        activities: string[]
    },
    customFields: []

}
export type { IUpdateAccount }