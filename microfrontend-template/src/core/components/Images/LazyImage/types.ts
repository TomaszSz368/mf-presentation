export const ImageName = {
  calendarIcon: 'CalendarIcon',
} as const;
export type ImageName = (typeof ImageName)[keyof typeof ImageName];
