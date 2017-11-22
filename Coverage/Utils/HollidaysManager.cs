using System;
using System.Collections.Generic;

using static Seac.Coverage.Utils.Easter;

namespace Seac.Coverage.Utils
{

    public class HollidaysManager
    {

        private static HollidaysManager INSTANCE = new HollidaysManager();
        private readonly List<List<int>> fixedHolidays = new List<List<int>>();

        private HollidaysManager()
        {
            fixedHolidays.Insert(0, new List<int>(new[] { 1, 6 }));
            fixedHolidays.Insert(1, new List<int>());
            fixedHolidays.Insert(2, new List<int>());
            fixedHolidays.Insert(3, new List<int>(new[] { 25 }));
            fixedHolidays.Insert(4, new List<int>(new[] { 1 }));
            fixedHolidays.Insert(5, new List<int>(new[] { 2 }));
            fixedHolidays.Insert(6, new List<int>());
            fixedHolidays.Insert(7, new List<int>(new[] { 15 }));
            fixedHolidays.Insert(8, new List<int>());
            fixedHolidays.Insert(9, new List<int>());
            fixedHolidays.Insert(10, new List<int>(new[] { 1 }));
            fixedHolidays.Insert(11, new List<int>(new[] { 8, 25, 26 }));
        }

        public static bool IsHolidayDay(DateTime date)
        {
            int day = date.Day;
            int month = date.Month - 1;
            return date.DayOfWeek == DayOfWeek.Saturday || date.DayOfWeek == DayOfWeek.Sunday || INSTANCE.fixedHolidays[month].Contains(day) || IsLittleEaster(date);
        }

    }
}
