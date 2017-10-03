using System.Collections.Generic;

namespace Seac.Coverage.Dto
{
    public class EmployesFlexibility
    {
        public IList<EmployeDto> Flexible { get; set; } = new List<EmployeDto>();
        public IList<EmployeDto> Inflexible { get; set; } = new List<EmployeDto>();
        public IList<EmployeDto> Indifferent { get; set; } = new List<EmployeDto>();

        public EmployesFlexibility(IList<EmployeDto> flexible, IList<EmployeDto> inflexible)
        {
            Flexible = flexible;
            Inflexible = inflexible;
        }

        public EmployesFlexibility(IList<EmployeDto> flexible, IList<EmployeDto> inflexible, IList<EmployeDto> indifferent) : this(flexible, inflexible)
        {
            Indifferent = indifferent;
        }
    }
}