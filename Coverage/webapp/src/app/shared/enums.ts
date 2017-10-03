export const COLORS: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

export enum MenuItemIds { Chiusure, Presenze }

export enum Profile { Manager, Normal }

export enum EmployeState { Flexible, Inflexible, Indifferent }

export enum ViewMode { Employe, Area }

export enum LeaveOverlapsUri {
  ByEmploye = <any>'coverage/overlaps/employe/',
  ByArea = <any>'coverage/overlaps/area/',
  ByFlexibility = <any>'coverage/employe/flexibility/'
}

export enum SecurityUri {
  LoggedEmploye = <any>'security/logged/employe/',
  Logout = <any>'security/logout/'
}

export enum LeaveUri {
   GetLeaves = <any>'leave/employe/',
   GetYearLeaves = <any>'leave/plan/',
   LeavesEmployePlanUpdate = <any>'leave/employe/plan',
   LeavesPlan = <any>'leave/plan/export/'
}

export enum HolidayShutdownsUri {
  HolidayShutdownsBase = <any>'holidayShutdowns/'
}

export enum InflexibilityPeriodsUri {
  InflexibilityPeriodsBase = <any>'inflexibilityPeriods/',
  InflexibilityPeriodMotivationsBase = <any>'inflexibilityPeriods/motivation/'
}