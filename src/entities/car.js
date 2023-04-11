const Base = require("./base/base")

class Car extends Base{
    constructor({id, name, releaserYear, available, gasAvailable}) {
        super({ id, name})
        this.releaserYear =releaserYear
        this.available
        this.gasAvailable
    }
}

module.exports = Car