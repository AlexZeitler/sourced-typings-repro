import EventEmitter from 'events'

export = SourcedEntity

declare class SourcedEntity extends EventEmitter {
  constructor(snapshots?, events?)
  public rehydrate(snapshot?, events?): void
  public id: string
  public digest(method: string, param: any): void
  public enqueue(method: string, param: any): void
}
