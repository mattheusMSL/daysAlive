export abstract class dateDifference{
    private static millisecondsInASecond: number = 1000;
    private static secondsInaMinute: number = 60;
    private static minutesInAHour: number = 60;
    private static minutesInADay: number = 24;


    public static getDifferenceInDays(date1, date2){
        const diffInMilliseconds = Math.abs(date1 - date2);
        return  Math.trunc ( diffInMilliseconds /
        (this.millisecondsInASecond *
             this.secondsInaMinute *
              this.minutesInAHour *
               this.minutesInADay));
    }

    public static getDifferenceInHours(date1, date2){
        const diffInMilliseconds = Math.abs(date1 - date2);
        return  Math.trunc ( diffInMilliseconds /
        (this.millisecondsInASecond *
             this.secondsInaMinute *
              this.minutesInAHour));
    }

    public static getDifferenceInMinutes(date1, date2){
        const diffInMilliseconds = Math.abs(date1 - date2);
        return  Math.trunc ( diffInMilliseconds /
        (this.millisecondsInASecond *
             this.secondsInaMinute ));
    }

    public static getDifferenceInSeconds(date1, date2){
        const diffInMilliseconds = Math.abs(date1 - date2);
        return  Math.trunc ( diffInMilliseconds /
        (this.millisecondsInASecond));
    }
}