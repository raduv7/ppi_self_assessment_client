export class Assessment {
  timestamp: number;
  hasAudio: boolean;
  hasVideo: boolean;
  hasWearableData: boolean;

  constructor(timestamp: number, hasAudio: boolean, hasVideo: boolean, hasWearableData: boolean) {
    this.timestamp = timestamp;
    this.hasAudio = hasAudio;
    this.hasVideo = hasVideo;
    this.hasWearableData = hasWearableData;
  }

  public copy(assessment: Assessment) {
    this.timestamp = assessment.timestamp;
    this.hasAudio = assessment.hasAudio;
    this.hasVideo = assessment.hasVideo;
    this.hasWearableData = assessment.hasWearableData;
  }

  public getTimestampAsSmallDate(): String {
    const date = new Date(this.timestamp * 1000);

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const dateOfMonth = date.getDate();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let minutesStr: string = minutes < 10 ? '0' + minutes : '' + minutes; // Add leading zero if needed

    return `${day}, ${month} ${dateOfMonth}, ${hours}:${minutesStr}`;
  }
}
