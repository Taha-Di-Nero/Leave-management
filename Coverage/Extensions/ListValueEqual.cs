using System.Collections.Generic;

namespace Seac.Coverage.Extensions
{
    public static class ListValueEqual
    {
        public static bool ValueEqual<T>(this IList<T> left, IList<T> right)
        {
            return new HashSet<T>(left).SetEquals(new HashSet<T>(right));
        }
    }
}
