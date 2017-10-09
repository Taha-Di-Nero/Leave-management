namespace Seac.Coverage.Dto
{
    public class UpdatePlanResponse
    {
        public string[] SavedDates { get; set; } = new string[0];
        public string[] RemovedDates { get; set; } = new string[0];
        public string[] RejectedDates { get; set; } = new string[0];
    }
}
