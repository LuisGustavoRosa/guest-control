import { test } from "@japa/runner";
import { InMemoryBedroomRepository } from "../../../../infra/repository/bedroom/in-memory-bedroom-repository";
import GetBedroom from "../getBedroom";

test.group("Bedroom", () => {
  test("should be able to list bedroom ", async ({ expect }) => {
    const bedroomRepository = new InMemoryBedroomRepository();
    const createBedroom = new GetBedroom(bedroomRepository);
    const { bedroom } = await createBedroom.execute(12345);
    expect(bedroom).toBeTruthy();
  });
});
