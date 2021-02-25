export interface TotalDonorsDTO {
    details: Detail[];
    aptosADoar: number;
    totalPacientes: number;
}

export interface Detail {
    tipoSanguineo: string;
    totalTipoSanguineo: number;
    podeReceber: number;
    podeDoar: number;
}  