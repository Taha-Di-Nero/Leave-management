using System.IO;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Seac.Coverage.Attributes
{
    public sealed class DeleteFileAttribute : ActionFilterAttribute
    {
        public override void OnResultExecuted(ResultExecutedContext filterContext)
        {
            filterContext.HttpContext.Response.Body.Flush();
            string filePath = (filterContext.Result as PhysicalFileResult).FileName;
            File.Delete(filePath);
        }
    }
}