using System.Linq;
using System.Collections.Generic;

using AutoMapper;

using Seac.Coverage.Models;

namespace Seac.Coverage.Dto
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Area, AreaDto>().ForMember(dto => dto.EmployeList, opt => opt.ResolveUsing(x => x.EmployeArea.Select(y => new EmployeBaseDto(y.Employe)).ToList()));
            CreateMap<AreaDto, Area>();

            CreateMap<Area, AreaBaseDto>();
            CreateMap<AreaBaseDto, Area>();

            CreateMap<Leave, LeaveDto>();
            CreateMap<LeaveDto, Leave>();

            CreateMap<Employe, EmployeDto>().ForMember(dto => dto.AreaList, opt => opt.ResolveUsing(x =>
                                                                        x.EmployeArea == null ? new List<AreaBaseDto>() : x.EmployeArea.Select(y => new AreaBaseDto(y.Area)).ToList()));
            CreateMap<EmployeDto, Employe>();

            CreateMap<InflexibilityPeriod, InflexibilityPeriodDto>();
            CreateMap<InflexibilityPeriodDto, InflexibilityPeriod>();

            CreateMap<InflexibilityPeriodMotivation, InflexibilityPeriodMotivationDto>();
            CreateMap<InflexibilityPeriodMotivationDto, InflexibilityPeriodMotivation>();
        }
    }
}
