using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

using static Seac.Coverage.Utils.GeneralConstants;

namespace Seac.Coverage.Utils
{
    public static class Utils
    {
        public static List<string> ConcatDays(string[] dates)
        {
            var leavesInterval = new List<string>();
            var tempDate = GetDate(dates[0]).AddDays(-1);
            var lastDate = GetDate(dates[0]);
            DateTime currentDate = DateTime.MinValue;
            DateTime nextDay;
            DateTime lastCurrentDate = DateTime.MinValue;
            foreach (string date in dates)
            {
                currentDate = GetDate(date);
                tempDate = ForwardNonWorkingDays(tempDate);
                nextDay = tempDate.AddDays(1);
                if (nextDay.Date == currentDate.Date || HollidaysManager.isHolidayDay(nextDay))
                {
                    tempDate = currentDate;
                }
                else
                {
                    tempDate = HollidaysManager.isHolidayDay(tempDate) ? BackwardNonWorkingDays(tempDate) : tempDate;
                    lastCurrentDate = tempDate;
                    leavesInterval.Add(FormatDateInterval(lastDate, tempDate));
                    lastDate = tempDate = currentDate;
                }
            }

            if (currentDate.Date != lastCurrentDate.Date)
            {
                leavesInterval.Add(FormatDateInterval(lastDate, tempDate));
            }
            return leavesInterval;
        }

        private static DateTime ForwardNonWorkingDays(DateTime from)
        {
            var nextDay = from.AddDays(1);
            if (HollidaysManager.isHolidayDay(nextDay))
            {
                from = ForwardNonWorkingDays(nextDay);
            }
            return from;
        }

        private static DateTime BackwardNonWorkingDays(DateTime from)
        {
            from = from.AddDays(-1);
            if (HollidaysManager.isHolidayDay(from))
            {
                from = BackwardNonWorkingDays(from);
            }
            return from;
        }

        private static string FormatDateInterval(DateTime from, DateTime to)
        {
            var formattedFrom = from.ToString(DateMsgFormat);
            var formattedTo = to.ToString(DateMsgFormat);
            return from.Date == to.Date ? string.Format("Il {0}", formattedFrom) : string.Format("Dal {0} al {1}", formattedFrom, formattedTo);
        }


        private static DateTime GetDate(string date) => DateTime.ParseExact(date, DateIsoFormat, CultureInfo.InvariantCulture);

    }
}