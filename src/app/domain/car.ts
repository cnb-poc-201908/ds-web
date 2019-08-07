export interface Car {
    stockStatus: string;
    // 经销商ID
    dealerId: string;
    // 区域ID
    regionId: string;
    // 集团ID
    groupId: string;
    stockId: string;
    licensePlate: string;
    storageDate: string;
    productionDate: string;
    vehicleSeriesCode: string;
    vehicleModelCode: string;
    vehicleModelConfig: string;
    model: string;
    color: string;
    decoration: string;
    vehicleChassisNumber: string;
    // 库存年龄
    stockAge: number;
    // 存放成本
    stockCost: number;
}
