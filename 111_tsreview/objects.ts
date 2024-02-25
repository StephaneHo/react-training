interface AddressType {
  city: string;
  street: string;
  streetNumber: number;
}

function formatAddress(address: AddressType) {
  return `City: ${address.city}, Street: ${address.street}, StreetNumber: ${address.streetNumber}`;
}

formatAddress({
  city: "Paris",
  street: "Feaubourg Saint Honore",
  streetNumber: 10,
});
