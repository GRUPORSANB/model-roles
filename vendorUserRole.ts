export interface VendorUserRole {
    Name: string,
    Permissions: VendorUserRolePermission[]
}

export interface VendorUserRolePermission {
    Name: string,
    Actions: VendorUserRoleActions
}

export enum VendorUserRoleActions {
    Read = 1,
    Write = 3,
    Delete = 7
}