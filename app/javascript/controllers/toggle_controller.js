import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["toggleable"];

  connect() {
    this.hideToggleable();
  }

  toggle() {
    if (this.isToggleableHidden()) {
      this.showToggleable();
    } else {
      this.hideToggleable();
    }
  }

  isToggleableHidden() {
    return this.toggleableTarget.classList.contains("hidden");
  }

  showToggleable() {
    this.toggleableTarget.classList.remove("hidden");
  }

  hideToggleable() {
    this.toggleableTarget.classList.add("hidden");
  }
}
