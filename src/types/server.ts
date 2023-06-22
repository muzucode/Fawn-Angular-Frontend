export interface Server {
  Id: number,
  Name: string,
  Distribution: string,
  DistributionVersion: string,
  AddressIPv4: string,
  AddressIPv6: string,
  PrivateKeyPath: string,
  GroupId: number,
  Description: string,
}