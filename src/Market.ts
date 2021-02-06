import { SourcedEntity } from 'sourced'

class Market extends SourcedEntity {
  public orders: []
  public price: number
  constructor(snapshots?, events?) {
    super(snapshots, events)
    this.orders = []
    this.price = 0

    this.rehydrate(snapshot, events)
  }

  init(param) {
    this.id = param.id
    this.digest('init', param)
    this.emit('initialized', param, this)
  }
}
