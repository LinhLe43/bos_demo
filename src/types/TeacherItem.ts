export interface TeacherItem {
    id: number;
    fullName: string;
    code?: string;
    email?: string;
    countryName: string;
    contactPhone: string;
    classInPhone: string;
    skype: string;
    workingStatus: string;
    partner: string;
    availableSession: number;
    busySession: number;
    totalSession: number;
    products: Array<string>;
    numberOfSession?: string;
    serviceAgent: string;
    createDate: string;
  }