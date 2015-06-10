/* Task Class */

Step = require('./step')

var Task = function (task_id, args) {
    /* meta */
    this.task_id = task_id;
    this.org = null;
    this.acct_id = null;
    this.acct_name = null;
    this.task_type = null;

    for (k in args) {
        this[k] = args[k];
    }
    this.steps = [];
    this.cur_step = null;
};

module.exports = Task;
            
