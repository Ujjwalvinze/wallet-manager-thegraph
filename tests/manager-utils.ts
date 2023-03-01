import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AccountAdded,
  AccountDeleted,
  ManagerCreated,
  ManagerDeleted,
  TransferSuccess,
  Withdrawn
} from "../generated/Manager/Manager"

export function createAccountAddedEvent(
  account: Address,
  ownerAccount: Address
): AccountAdded {
  let accountAddedEvent = changetype<AccountAdded>(newMockEvent())

  accountAddedEvent.parameters = new Array()

  accountAddedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  accountAddedEvent.parameters.push(
    new ethereum.EventParam(
      "ownerAccount",
      ethereum.Value.fromAddress(ownerAccount)
    )
  )

  return accountAddedEvent
}

export function createAccountDeletedEvent(
  owner: Address,
  account: Address
): AccountDeleted {
  let accountDeletedEvent = changetype<AccountDeleted>(newMockEvent())

  accountDeletedEvent.parameters = new Array()

  accountDeletedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  accountDeletedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return accountDeletedEvent
}

export function createManagerCreatedEvent(owner: Address): ManagerCreated {
  let managerCreatedEvent = changetype<ManagerCreated>(newMockEvent())

  managerCreatedEvent.parameters = new Array()

  managerCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return managerCreatedEvent
}

export function createManagerDeletedEvent(
  owner: Address,
  accounts: Array<Address>
): ManagerDeleted {
  let managerDeletedEvent = changetype<ManagerDeleted>(newMockEvent())

  managerDeletedEvent.parameters = new Array()

  managerDeletedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  managerDeletedEvent.parameters.push(
    new ethereum.EventParam(
      "accounts",
      ethereum.Value.fromAddressArray(accounts)
    )
  )

  return managerDeletedEvent
}

export function createTransferSuccessEvent(
  accountFrom: Address,
  accountTo: Address,
  owner: Address,
  amount: BigInt
): TransferSuccess {
  let transferSuccessEvent = changetype<TransferSuccess>(newMockEvent())

  transferSuccessEvent.parameters = new Array()

  transferSuccessEvent.parameters.push(
    new ethereum.EventParam(
      "accountFrom",
      ethereum.Value.fromAddress(accountFrom)
    )
  )
  transferSuccessEvent.parameters.push(
    new ethereum.EventParam("accountTo", ethereum.Value.fromAddress(accountTo))
  )
  transferSuccessEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  transferSuccessEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return transferSuccessEvent
}

export function createWithdrawnEvent(
  account: Address,
  owner: Address,
  amount: BigInt
): Withdrawn {
  let withdrawnEvent = changetype<Withdrawn>(newMockEvent())

  withdrawnEvent.parameters = new Array()

  withdrawnEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawnEvent
}
