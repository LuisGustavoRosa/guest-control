import { test } from "@japa/runner";
import { GuestEntity } from "../guestsEntity";

test.group("Guest", () => {
  test("should be able to create a guest from bedroom ", ({ expect }) => {
    const guest = new GuestEntity({
      name: "Luis",
      age: 15,
    });
    expect(guest).toBeTruthy();
  });
});
