interface IAccount {
    statiqueField: {
        id: number
        user: string
        language: string
        name: string
        country: string
        city: string
        industry: string
        website: string
        email: string
        linkedin: string
        phone: string
        subsidiary: string
        address: string
        postalcode: string
        activities: string[]
    },
    customFields: []

}
export type { IAccount }
