/* Step Class */

var Step = function (step_id, task_id, args) {
    /* meta */
    this.step_id = step_id;
    this.task_id = task_id;
    this.step_name = null;
    this.owner = null;
    this.status = null;
    for (k in args) {
        this[k] = args[k];
    }
};

module.exports = Step
