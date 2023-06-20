import { Server } from "src/types/server";

export const TEST_SERVER: Server = {
  AddressIPv4:"127.0.0.1",
  AddressIPv6:"::1",
  Distribution: 'Ubuntu',
  Description: "My description",
  GroupId: 1,
  Id: 1,
  Name: "Test Server",
  PrivateKeyPath: "~/.ssh/github_rsa"
}