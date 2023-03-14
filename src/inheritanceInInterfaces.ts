interface UserInterface {
  name: string;
  email: string;
  age: number;
  phone?: number;

  greet?: () => void;
}

const personNew: UserInterface = {
  name: "Afzal",
  email: "gmail",
  age: 24,
};

interface UserWithAddress extends UserInterface {
  address: string;
}

const userAddress: UserWithAddress = {
  address: "D-263",
  name: "me",
  email: "gmail",
  age: 24,
};

// enum Roles{

// }

import { Roles } from "./roles.js";

interface Role {
  role: Roles;
}

enum PermissionList {
  read = "read",
  write = "write",
  execute = "execute",
}

interface UserPermission {
  permission: PermissionList[];
}

interface AdminUser extends UserInterface, Role, UserPermission {
  numberOfUserReporting: number;
}

const rob: AdminUser = {
  name: "rob",
  email: "",
  age: 2,

  role: Roles.admin,
  permission: [PermissionList.execute],
  numberOfUserReporting: 2,
};

console.log(rob);
