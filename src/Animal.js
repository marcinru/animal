class Animal {
  constructor(kind) {
    this.kind = kind;
  }

  getNumOfLegs() {
    switch (this.kind) {
      case "insect": return 6;
      case "spider": return 8;
    }
  }

}
