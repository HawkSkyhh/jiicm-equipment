export interface CurrEquipmentInfo {
    id: string,
    name: string,
    department: string,
    type: string,
    oid: string,
    description: string,
    alignment: string,
    create_time: string,
    nums: string,
    location: string,
    owner: string,
    standard_owner: string,
    avatar_path: string,
    pics: { id: string, src: string}[],
    tables: {
        oid: string, create_time: string, location: string,
        alignment: string, owner: string, standard_owner: string
    }[],
}