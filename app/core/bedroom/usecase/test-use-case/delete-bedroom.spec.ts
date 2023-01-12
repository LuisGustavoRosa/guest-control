import { test } from "@japa/runner";
import { InMemoryBedroomRepository } from "../../../../infra/repository/bedroom/in-memory-bedroom-repository";
import deleteBedroom from "../deleteBedroom";

test.group("Bedroom", () => {
  test("should be able to delete bedroom ", async ({ expect }) => {
    const bedroomRepository = new InMemoryBedroomRepository();
    const createBedroom = new deleteBedroom(bedroomRepository);
    const { bedroom } = await createBedroom.execute(12345);
    expect(bedroom).toBeTruthy();
  });
});
