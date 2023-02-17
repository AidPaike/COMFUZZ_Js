function() {
    "use strict";
    this.channel1canPlay = (this.memory[0xFF12] > 7);
    this.channel1EnableCheck();
    this.channel1OutputLevelSecondaryCache();
}