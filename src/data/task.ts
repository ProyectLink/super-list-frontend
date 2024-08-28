import { faker } from "@faker-js/faker";

const generateFakeTask = () => ({
  id: faker.string.alphanumeric(20),
  title: faker.word.words(5),
});

const FAKE_TASK_DATA = Array.from({ length: 5 }, generateFakeTask);

export { FAKE_TASK_DATA };
