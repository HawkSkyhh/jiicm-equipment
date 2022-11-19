export interface EquipmentListType {
    [equipment: number]: Equipment;
}

type Equipment = {
    id: string;
    equipmentId: string;
    name: string;
    overview: string;
}