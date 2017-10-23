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

export enum MenuItemIds { Employes, Shutdowns, presences, AddedLeaves, RemovedLeaves }

export enum Profile { Manager, Normal }

export enum EmployeState { Flexible, Inflexible, Indifferent }

export enum LeaveState { Approved, ToAdd, ToRemove }

export enum ViewMode { Employe, Area }

export enum ApprovationMode { Add, Remove }

export enum ApprovationExit { None, Approved, Rejected }

export enum LeaveOverlapsUri {
  ByEmploye = 'coverage/overlaps/employe/',
  ByArea = 'coverage/overlaps/area/',
  ByFlexibility = 'coverage/employe/flexibility/'
}

export enum SecurityUri {
  LoggedEmploye = 'security/logged/employe/',
  Logout = 'security/logout/'
}

export enum LeaveUri {
   GetLeavesByEmploye = 'leave/employe/',
   GetLeavesByState = 'leave/state/',
   GetYearLeaves = 'leave/plan/',
   LeavesEmployePlanUpdate = 'leave/employe/plan',
   LeavesPlan = 'leave/plan/export/'
}

export enum HolidayShutdownsUri {
  HolidayShutdownsBase = 'holidayShutdowns/'
}

export enum InflexibilityPeriodsUri {
  InflexibilityPeriodsBase = 'inflexibilityPeriods/',
  InflexibilityPeriodMotivationsBase = 'inflexibilityPeriods/motivation/'
}

export enum EmployesUri {
  EmployesBase = 'employes/',
  EmployeAreasBase = 'employes/area/'
}
