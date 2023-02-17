function() {
    if (this.channel1envelopeSweepsLast > -1) {
        if (this.channel1envelopeSweeps > 0) {
            --this.channel1envelopeSweeps;
        } else {
            if (!this.channel1envelopeType) {
                if (this.channel1envelopeVolume > 0) {
                    --this.channel1envelopeVolume;
                    this.channel1envelopeSweeps = this.channel1envelopeSweepsLast;
                    this.channel1OutputLevelCache();
                } else {
                    this.channel1envelopeSweepsLast = -1;
                }
            } else if (this.channel1envelopeVolume < 0xF) {
                ++this.channel1envelopeVolume;
                this.channel1envelopeSweeps = this.channel1envelopeSweepsLast;
                this.channel1OutputLevelCache();
            } else {
                this.channel1envelopeSweepsLast = -1;
            }
        }
    }
    if (this.channel2envelopeSweepsLast > -1) {
        if (this.channel2envelopeSweeps > 0) {
            --this.channel2envelopeSweeps;
        } else {
            if (!this.channel2envelopeType) {
                if (this.channel2envelopeVolume > 0) {
                    --this.channel2envelopeVolume;
                    this.channel2envelopeSweeps = this.channel2envelopeSweepsLast;
                    this.channel2OutputLevelCache();
                } else {
                    this.channel2envelopeSweepsLast = -1;
                }
            } else if (this.channel2envelopeVolume < 0xF) {
                ++this.channel2envelopeVolume;
                this.channel2envelopeSweeps = this.channel2envelopeSweepsLast;
                this.channel2OutputLevelCache();
            } else {
                this.channel2envelopeSweepsLast = -1;
            }
        }
    }
    if (this.channel4envelopeSweepsLast > -1) {
        if (this.channel4envelopeSweeps > 0) {
            --this.channel4envelopeSweeps;
        } else {
            if (!this.channel4envelopeType) {
                if (this.channel4envelopeVolume > 0) {
                    this.channel4currentVolume = --this.channel4envelopeVolume << this.channel4VolumeShifter;
                    this.channel4envelopeSweeps = this.channel4envelopeSweepsLast;
                    this.channel4UpdateCache();
                } else {
                    this.channel4envelopeSweepsLast = -1;
                }
            } else if (this.channel4envelopeVolume < 0xF) {
                this.channel4currentVolume = ++this.channel4envelopeVolume << this.channel4VolumeShifter;
                this.channel4envelopeSweeps = this.channel4envelopeSweepsLast;
                this.channel4UpdateCache();
            } else {
                this.channel4envelopeSweepsLast = -1;
            }
        }
    }
}