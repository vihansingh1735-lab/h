import { antiSpam } from "../handlers/antispam.js";

export default async (message) => {
  antiSpam(message);
};
