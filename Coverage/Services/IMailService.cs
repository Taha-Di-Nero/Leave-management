using Seac.Coverage.Dto;
using Seac.Coverage.Enum;

namespace Seac.Coverage.Services
{
    public interface IMailService
    {
        void SendNotification(NotificationType notificationType, EmployeDto loggedEmploye, long targetEmployeId, UpdatePlanResponse response, string serverLink);

    }
}
