'use strict';

class ProcessChainBlock {
  setNextBlock(block) {
    if (this.nextBlock) {
      this.nextBlock.setNextBlock(block);
    } else {
      this.nextBlock = block;
    }
  }

  execute(context) {
  }

  executeNext(context) {
    if (this.nextBlock) {
      this.nextBlock.execute(context);
    } else {
      return;
    }
  }
}

module.exports = ProcessChainBlock;