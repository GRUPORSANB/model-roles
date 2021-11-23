export interface VendorUserRole {
    Name: string;
    ADN: string;
    Permissions: VendorUserRolePermission[];
    CreatedOn: string;
    UpdatedOn: string;
    DeletedOn: string;
}
export interface VendorUserRolePermission {
    Name: string;
    Actions: VendorUserRoleActions;
    CreatedOn: string;
    UpdatedOn: string;
    DeletedOn: string;
}
export declare enum VendorUserRoleActions {
    Read = 1,
    Write = 3,
    Delete = 7,
    Administrator = 9
}
