using System.IO;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Seac.Coverage.Attributes
{
    public sealed class DeleteFileAttribute : ActionFilterAttribute
    {
        public override void OnResultExecuted(ResultExecutedContext context)
        {
            context.HttpContext.Response.Body.Flush();
            string filePath = (context.Result as PhysicalFileResult).FileName;
            File.Delete(filePath);
        }
    }
}