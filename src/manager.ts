import {
  AccountAdded as AccountAddedEvent,
  AccountDeleted as AccountDeletedEvent,
  ManagerCreated as ManagerCreatedEvent,
  ManagerDeleted as ManagerDeletedEvent,
  TransferSuccess as TransferSuccessEvent,
  Withdrawn as WithdrawnEvent
} from "../generated/Manager/Manager"
import {
  AccountAdded,
  AccountDeleted,
  ManagerCreated,
  ManagerDeleted,
  TransferSuccess,
  Withdrawn
} from "../generated/schema"

export function handleAccountAdded(event: AccountAddedEvent): void {
  let entity = new AccountAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.ownerAccount = event.params.ownerAccount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAccountDeleted(event: AccountDeletedEvent): void {
  let entity = new AccountDeleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleManagerCreated(event: ManagerCreatedEvent): void {
  let entity = new ManagerCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleManagerDeleted(event: ManagerDeletedEvent): void {
  let entity = new ManagerDeleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.accounts = event.params.accounts

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferSuccess(event: TransferSuccessEvent): void {
  let entity = new TransferSuccess(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.accountFrom = event.params.accountFrom
  entity.accountTo = event.params.accountTo
  entity.owner = event.params.owner
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawn(event: WithdrawnEvent): void {
  let entity = new Withdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.owner = event.params.owner
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
