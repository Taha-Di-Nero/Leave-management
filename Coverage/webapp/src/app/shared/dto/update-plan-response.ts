export class UpdatePlanResponse {

    constructor(public savedDates = new Array<string>(), public removedDates = new Array<string>(),
        public rejectedDates = new Array<string>()) { }

}
