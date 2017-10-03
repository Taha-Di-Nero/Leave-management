using System;
using System.Collections.Generic;
using System.Linq;

namespace Seac.Coverage.Utils
{
    public static class Easter
    {


        public static bool IsEaster(DateTime date)
        {
            int year = date.Year;
            return (GetEasterDate(year) == date);
        }

        public static bool IsLittleEaster(DateTime date)
        {
            int year = date.Year;
            DateTime mayBeEaster = date.AddDays(-1);

            return (GetEasterDate(year) == mayBeEaster);
        }

        private class CalendarConstants
        {
            public int? MinDate { get; set; }
            public int MaxDate { get; set; }
            public int X { get; set; }
            public int Y { get; set; }
        }

        private static IEnumerable<CalendarConstants> Costanti = new List<CalendarConstants>()
        {
           new CalendarConstants() { MinDate = null , MaxDate = 1582, X = 15, Y= 6 },
           new CalendarConstants()  { MinDate = 1583 , MaxDate = 1699, X = 22, Y= 2 },
           new CalendarConstants()  { MinDate = 1700 , MaxDate = 1799, X = 23, Y= 3 },
           new CalendarConstants()  { MinDate = 1800 , MaxDate = 1899, X = 23, Y= 4 },
           new CalendarConstants()  { MinDate = 1900 , MaxDate = 2099, X = 24, Y= 5 },
           new CalendarConstants()  { MinDate = 2100 , MaxDate = 2199, X = 24, Y= 6 },
           new CalendarConstants()  { MinDate = 2200 , MaxDate = 2299, X = 25, Y= 7 },
           new CalendarConstants()  { MinDate = 2300 , MaxDate = 2399, X = 26, Y= 1 },
           new CalendarConstants()  { MinDate = 2400 , MaxDate = 2499, X = 25, Y= 1 }
        };

        public static DateTime? GetEasterDate(int year)
        {
            var constant = Costanti.First(cx =>
                (!cx.MinDate.HasValue || year >= cx.MinDate.Value) &&
                (year <= cx.MaxDate));
            var x = constant.X;
            var y = constant.Y;
            var a = year % 19;
            var b = year % 4;
            var c = year % 7;
            var d = (19 * a + x) % 30;
            var e = (2 * b + 4 * c + 6 * d + y) % 7;
            var sum = 22 + d + e;
            if (sum <= 31) return new DateTime(year, 3, sum);
            else if (((sum - 31) != 26 && (sum - 31) != 25) ||
                        ((sum - 31) == 25 && (d != 28 || a <= 10)))
                return new DateTime(year, 4, sum - 31);
            else if ((sum - 31) == 25 && d == 28 && a > 10) return new DateTime(year, 4, 18);
            else return new DateTime(year, 4, 19);

        }
    }
}