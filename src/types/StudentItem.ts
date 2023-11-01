export interface StudentItem {
  id: number;
  fullName: string;
  code: string;
  phone: string;
  email?: string;
  dateOfBirth: string;
  gender: string;
  parentName: string;
  parentPhone: string;
  province: string;
  district: string;
  address?: string;
  customerService: string;
  status: string;
  createDate: string;
  createBy: string;
  updateDate: string;
  updateBy: string;
  numberOfSession?: string;
  serviceAgent: string;
  totalServicePackage?: string;
  representativePhone?: string;
  classInPhone?: string | null;
  enrollRequirement?: string;
  studentClass?: string | null;
}
