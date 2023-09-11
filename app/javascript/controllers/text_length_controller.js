import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["input", "counter"];
  static values = { maxLength: Number };

  connect() {
    this.updateCounter();

    this.inputTarget.addEventListener("input", () => {
      this.updateCounter();
    });
  }

  updateCounter() {
    const input = this.inputTarget;
    const counter = this.counterTarget;
    const remainingCharacters = this.maxLengthValue - input.value.length;

    counter.textContent = `${remainingCharacters} characters remaining`;

    if (remainingCharacters <= 10) {
      counter.classList.add("text-danger");
    } else {
      counter.classList.remove("text-danger");
    }

    if (remainingCharacters <= 0) {
      input.value = input.value.slice(0, this.maxLengthValue);
      input.blur();
    }
  }
}
