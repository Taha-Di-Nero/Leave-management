namespace Seac.Coverage.Dto
{
    public class CoverageGap
    {
        public string InitTime { get; set; }
        public string EndTime { get; set; }

        public CoverageGap(string initTime, string endTime)
        {
            InitTime = initTime;
            EndTime = endTime;
        }

        public override bool Equals(object obj)
        {
            var other = obj as CoverageGap;
            if (other == null)
            {
                return false;
            }

            if (InitTime == null && other.InitTime != null)
            {
                return false;
            }

            if (InitTime != other.InitTime)
            {
                return false;
            }

            if (EndTime == null && other.EndTime != null)
            {
                return false;
            }

            if (EndTime != other.EndTime)
            {
                return false;
            }
            return true;
        }

        public override int GetHashCode()
        {
            const int prime = 31;
            int result = 1;
            result = prime * result + ((InitTime == null) ? 0 : InitTime.GetHashCode());
            result = prime * result + ((EndTime == null) ? 0 : EndTime.GetHashCode());
            return result;
        }
    }
}