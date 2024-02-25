interface AddressTypeExtended extends AddressType {
  departmentNumber: number;
  departmentName?: string;
}

function formatAddressExtended(address: AddressTypeExtended) {
  let formattedAdress = `City: ${address.city}, Street: ${address.street}, StreetNumber: ${address.streetNumber} DepartmentNumber: ${address.departmentNumber} `;
  if (address.departmentName) {
    formattedAdress =
      formattedAdress + ` DepartmentName: ${address.departmentName} `;
  }
  return formattedAdress;
}

console.log(
  formatAddressExtended({
    city: "Paris",
    street: "Feaubourg Saint Honore",
    streetNumber: 10,
    departmentName: "Paris",
    departmentNumber: 75,
  })
);
