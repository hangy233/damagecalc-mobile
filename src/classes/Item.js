export default class Item {
  constructor ({
    id = 0,
    key,
    mega = null,
    boostType = null,
    resistType = null,
    flingPower = 0,
    naturalGiftPower = null,
    naturalGiftType = null,
    technoBlast = null,
    multiAttack = null,
    boostedStat = null
  } = {}) {
    this.id = id;
    this.key = key;
    this.mega = mega;
    this.boostType = boostType;
    this.resistType = resistType;
    this.flingPower = flingPower;
    this.naturalGiftPower = naturalGiftPower;
    this.naturalGiftType = naturalGiftType;
    this.technoBlast = technoBlast;
    this.multiAttack = multiAttack;
    this.boostedStat = boostedStat;
  }

  getNaturalGift (gen) {
    if (!this.naturalGiftPower) {
      return {power: 1, type: 1};
    }

    return {power: this.naturalGiftPower - (gen < 5 ? 20 : 0), type: this.naturalGiftType};
  }
};
