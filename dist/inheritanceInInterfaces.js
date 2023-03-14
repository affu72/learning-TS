const personNew = {
    name: "Afzal",
    email: "gmail",
    age: 24,
};
const userAddress = {
    address: "D-263",
    name: "me",
    email: "gmail",
    age: 24,
};
// enum Roles{
// }
import { Roles } from "./roles.js";
var PermissionList;
(function (PermissionList) {
    PermissionList["read"] = "read";
    PermissionList["write"] = "write";
    PermissionList["execute"] = "execute";
})(PermissionList || (PermissionList = {}));
const rob = {
    name: "rob",
    email: "",
    age: 2,
    role: Roles.admin,
    permission: [PermissionList.execute],
    numberOfUserReporting: 2,
};
console.log(rob);
