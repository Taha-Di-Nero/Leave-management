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
            if (obj == null || GetType() != obj.GetType())
            {
                return false;
            }
            if (base.Equals(obj))
            {
                return true;
            }
            CoverageGap other = (CoverageGap)obj;
            if (InitTime == null)
            {
                if (other.InitTime != null)
                    return false;
            }
            else if (InitTime != other.InitTime)
                return false;
            if (EndTime == null)
            {
                if (other.EndTime != null)
                    return false;
            }
            else if (EndTime != other.EndTime)
                return false;
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