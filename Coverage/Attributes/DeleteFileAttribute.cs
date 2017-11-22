using System;
using System.IO;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Seac.Coverage.Attributes
{
    [AttributeUsage(AttributeTargets.Method)]
    public sealed class DeleteFileAttribute : ActionFilterAttribute
    {
        public override void OnResultExecuted(ResultExecutedContext context)
        {
            context?.HttpContext.Response.Body.Flush();            
            File.Delete((context?.Result as PhysicalFileResult).FileName);
        }
    }
}