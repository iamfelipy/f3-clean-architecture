import Notification from "../notification/notification";
export default abstract class ValueObject {
  public notification: Notification;

  constructor() {
    this.notification = new Notification();
  }

}