import { test } from "@japa/runner";
import { InMemoryBedroomRepository } from "../../../../infra/repository/bedroom/in-memory-bedroom-repository";
import ListAllBedroom from "../listAllBedroom";

test.group("Bedroom", () => {
  test("should be able to list bedroom ", async ({ expect }) => {
    const bedroomRepository = new InMemoryBedroomRepository();
    const createBedroom = new ListAllBedroom(bedroomRepository);
    const { bedroom } = await createBedroom.execute();
    expect(bedroom).toBeTruthy();
  });
});
